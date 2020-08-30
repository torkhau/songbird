import React, { Component} from "react";
import classes from "./Button.css";

const Button = props => {
  return (
    <button
    className = {classes.Button}
    disabled = {props.btnDisabled}
    onClick = {props.onClick}>
      Наступнае пытанне
    </button>
  )
}

export default Button