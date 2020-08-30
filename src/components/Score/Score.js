import React, { Component} from "react";
import classes from "./Score.css";

const Score = props => <div className = {classes.Score}>Рахунак гульні:&ensp;<span>{props.score}</span></div>

export default Score