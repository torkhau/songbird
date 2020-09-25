import React from "react";
import classes from "./Score.module.css";

const Score = props => <div className = {classes.Score}>Рахунак гульні:&ensp;<span>{props.score}</span></div>

export default Score