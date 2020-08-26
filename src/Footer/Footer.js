import React, { Component} from "react";
import classes from "./Footer.css";
import Button from "../components/Button/Button"

const Footer = props => {
  return (
    <div className={classes.Footer}>
        <Button onClick = {props.onClick}/>
    </div>
  )
}

export default Footer;