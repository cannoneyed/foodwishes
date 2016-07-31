import _ from 'lodash'
import P from 'bluebird'
import * as util from 'src/util'

import {
  loadUser,
  updateAccess,
  addConnection,
  trackUserVisitAsync,
} from '../index'

import {
  connectSuccess,
} from '../../connect/index'

import * as notificationActions from 'src/core/notifications'

export default function getUserDataAsync(userId) {
  return (dispatch, getState) => {
    const { firebase } = getState()

    return P.resolve()
    .then(() => {
      // Load user Data
      return firebase.database().ref().child(`users/${userId}`).once('value', snapshot => {
        const user = util.recordFromSnapshot(snapshot)
        dispatch(loadUser(user))

        // Now track the visit to the user
        return dispatch(trackUserVisitAsync(user))
      })
    })
    .then(() => {
      return dispatch(registerUserListenersAsync(userId))
    })
  }
}

function registerUserListenersAsync(userId) {
  return (dispatch, getState) => {
    const { firebase } = getState()

    // Register the user access listener
    firebase.database().ref().child(`users/${userId}/hasAccess`).on('value', snapshot => {
      const { user } = getState()
      const access = util.recordFromSnapshot(snapshot)

      // If the access hasn't changed, don't dispatch the action
      if (user.hasAccess === access) {
        return
      }

      dispatch(updateAccess(access))
    })

    // Register the user connection listener
    firebase.database().ref().child(`users/${userId}/connections`).on('child_added', snapshot => {
      const { user } = getState()
      const id = util.recordFromSnapshot(snapshot)

      // If the connection is already present on the user, don't dispatch the action
      const isConnected = _.get(user, ['connections', id])
      if (isConnected) {
        return
      }

      dispatch(addConnection(id))
      dispatch(connectSuccess())
      dispatch(displayConnectionNotificationAsync(id))
    })
  }
}

function displayConnectionNotificationAsync(id) {
  return (dispatch, getState) => {
    const { firebase } = getState()

    firebase.database().ref().child(`users/${id}`).once('value', snapshot => {
      const connectedUser = util.recordFromSnapshot(snapshot)

      const didShare = Object.keys(connectedUser.connections).length <= 1
      const message = didShare ? 'Shared' : 'Connected'

      dispatch(notificationActions.addNotification({
        message: `${message} with ${connectedUser.displayName}`,
        kind: 'success',
        dismissAfter: 5000,
      }))
    })
  }
}
