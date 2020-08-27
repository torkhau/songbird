import React, { Component} from "react";
import classes from "./Button.css";

const Button = props => {
  return (
    <button
    className = {classes.Button}
    // disabled = {false}
    onClick = {props.onClick}>
      Наступны вапрос
    </button>
  )
}

export default Button