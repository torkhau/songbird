import React from "react";
import classes from "./Button.module.css";

const Button = props => {
  const className = [classes.Button];
  if (props.btnDisabled) {
    className.push(classes.disabled)
  }

  return (
    <button
    className = {className.join(' ')}
    disabled = {props.btnDisabled}
    onClick = {props.onClick}>
      Наступнае пытанне
    </button>
  )
}

export default Button