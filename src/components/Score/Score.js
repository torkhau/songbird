import React, { Component} from "react";
import classes from "./Score.css";

const Score = props => {
  return (
    <div>Рахунак гульні: <span className={classes.span}>{props.score}</span></div>
  
  )
}

export default Score