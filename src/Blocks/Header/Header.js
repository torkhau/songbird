import React, { Component} from "react";
import classes from "./Header.css";
import Logo from "../../components/Logo/Logo"
import Score from "../../components/Score/Score"
import Menu from "../../components/Menu/Menu"

const Header = props => {
  return (
    <div className={classes.Header}>
      <div className={classes.wrapper}>
        <Logo />
        <Score score = {props.score}/>
      </div>
      <Menu lavel = {props.level} menu = {props.menu}/>
    </div>
  )
}

export default Header;