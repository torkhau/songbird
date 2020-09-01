import React from "react";
import classes from "./Button.module.css";

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