import React, { Component} from "react";
import classes from "./Button.css";

const Button = props => {
  return (
    <button
    // disabled = {props.disabled}
    onClick = {props.onClick}>
      Кнопка
    </button>
  )
}

export default Button