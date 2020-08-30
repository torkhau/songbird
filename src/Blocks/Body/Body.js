import React, { Component} from "react";
import classes from "./Body.css";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import Question from "../Question/Question";

const QuestionBlock = props => {
  let child = <Loader />;
  let cls = classes.section_center;
  if (!props.loading) {
    child = <Question src = {props.src} song = {props.song}/>
    cls = classes.section_normal;
  };
  return (
    <section className = {cls}>
      {child}
    </section>
  )
}

const Body = props => {
  
  let src = '';
  let song = '';
  if (props.trueAnswer > -1) {
    const e = props.data[props.trueAnswer];
    src = e.img;
    song = e.song
  };

  return (
    <div className = {classes.Body}>
      <QuestionBlock loading = {props.loading} src = {src} song = {song}/>
      <section>
        <div className = {classes.wrapper}>
          <Loader />
        </div>
        <div className = {classes.wrapper}>
          Тут тот ответ, который выбрали
        </div>
      </section>
      <div className = {classes.btn_wrapper}>
        <Button onClick = {props.onClick} btnDisabled = {props.btnDisabled}/>
      </div>
    </div>
  )
}

export default Body;