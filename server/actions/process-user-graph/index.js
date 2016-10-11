const P = require('bluebird')
const _ = require('lodash')
const logger = require('winston')
const graphData = require('../../graph/data')
const { firebase } = require('../../firebase')
const helpers = require('./helpers')

module.exports = function processUserGraph({ data, resolve, reject }) {
  const { userId } = data

  return P.resolve().then(() => {
    const g = graphData.getGraph()

    const connected = g.successors(userId) || []
    const own = g.node(userId)

    if (!own) {
      return
    }

    // Process the graph data
    // Formatted as { from: [to, to] }
    const connections = {}
    connected.forEach(userId => {
      const node = g.node(userId)
      const { from } = node
      connections[from] = (connections[from] || []).concat(userId)
    })

    // Process the graph stats
    const total = connected.length

    let maxDistance = 0
    _.each(connected, (id) => {
      const other = g.node(id)

      const distance = helpers.getDistance(own, other)
      maxDistance = distance > maxDistance ? distance : maxDistance
    })

    const score = Math.floor(maxDistance) + (total * 5)

    const processed = {
      data: {
        connections,
      },
      stats: {
        total,
        maxDistance,
        score,
      },
    }

    logger.info(`Processed graph for user ${userId}`)
    return firebase.database().ref('userGraph').child(userId).set(processed)
  })
  .then(resolve)
  .catch(err => {
    logger.error(err)
    reject(err)
  })
}
