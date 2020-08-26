import React, { Component} from "react";
import classes from "./Menu.css";

const menuItems = [
  'Хатнiя',
  'Лясныя',
  'Драпежныя',
  'Вадаплаўныя',
  'З Чырвонай кнігі',
  'Рэдкія'
]

class Menu extends Component {

  renderListItems = () => {
    return menuItems.map((item, index) => {
      return (
      <li 
      key = {index}
      className = {this.props.lavel === index ? classes.active : ''}>
        {item}
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