import React, { Component, PropTypes } from 'react'

class Icon extends Component {
  static propTypes = {
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    style: PropTypes.object,
    type: PropTypes.string.isRequired,
  }

  static defaultProps = {
    size: 24
  }

  _mergeStyles(...args) {
    // This is the m function from "CSS in JS" and can be extracted to a mixin
    return Object.assign({}, ...args)
  }

  renderGraphic() {
    switch (this.props.type) {
      case 'cancel':
        return (
          <g><path d="M14.59 8l-2.59 2.59-2.59-2.59-1.41 1.41 2.59 2.59-2.59 2.59 1.41 1.41 2.59-2.59 2.59 2.59 1.41-1.41-2.59-2.59 2.59-2.59-1.41-1.41zm-2.59-6c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
        )
      case 'menu':
        return (
          <g><path d="M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z"></path></g>
        )
      case 'arrow-back':
        return (
          <g><path d="M15.41 7.41l-1.41-1.41-6 6 6 6 1.41-1.41-4.58-4.59z"></path></g>
        )
      case 'close':
        return (
          <g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path></g>
        )
      case 'play':
        return (
          <g><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
        )
      default:
        return null
    }
  }

  render() {
    let styles = {
      fill: 'currentcolor',
      verticalAlign: 'middle',
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size // Prevents scaling issue in IE
    }
    return (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        fit
        style={this._mergeStyles(
          styles,
          this.props.style // This lets the parent pass custom styles
        )}>
          {this.renderGraphic()}
      </svg>
    )
  }
}

export default Icon
