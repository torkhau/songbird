import React, { Component } from "react"
import classes from "./Container.css"

class Container extends Component {
  render() {
    const arrayClasses = String(this.props.className).split(' ');
    const cls = [classes.Container, ...arrayClasses.map(item => classes[item])];

    return (
      <div className = { cls.join(' ') }>
        { this.props.children }
      </div>
    )
  }
}

export default Container