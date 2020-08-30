import React, { Component } from 'react';
import classes from './Question.css';
import Img from "../../components/Img/img"
import Audio from "../../components/Audio/Audio";

const Question = (props) => {
  return(
    <div className = {classes.Question}>
      <div>
        <Img src = {props.src}/>
      </div>
      <div className = {classes.block_discription}>
        <p>А тут название птицы</p>
        <hr/>
        <Audio />
      </div>
    </div>
  )
}

export default Question;