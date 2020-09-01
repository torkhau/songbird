import React, { Component} from "react";
import classes from "./Menu.module.css";

class Menu extends Component {

  renderListItems = () => {
    return this.props.menu.map((item, index) => {
      return (
      <li 
        key = {index}
        className = {this.props.lavel === index ? classes.active : ''}>
        {item[0]}
      </li>
      )
    })
  }

  render() {
    return(
      <div className={classes.Menu}>
      <ul>
        {this.renderListItems()}
      </ul>
    </div>
    )
  }

}

export default Menu