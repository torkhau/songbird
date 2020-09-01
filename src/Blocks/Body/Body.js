import React from "react";
import classes from "./Body.css";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import Question from "../Question/Question";
import Answers from "../Answers/Answers";

const QuestionBlock = props => {
  let child = <Loader />;
  let cls = `${classes.sections} ${classes.div_center}`;
  if (!props.loading) {
    child = <Question src = {props.src} song = {props.song} nameBird = {props.nameBird}/>
    cls = `${classes.sections} ${classes.div_normal}`;
  };
  return (
    <div className = {cls}>
      {child}
    </div>
  )
}

const AnswersBlock = props => {
  let child = <Loader />;
  let cls = `${classes.sections} ${classes.div_center}`;
  if (!props.loading) {
    child = <Answers answersArr = {props.answersArr} onClick = {props.onClick}/>
    cls = `${classes.sections} ${classes.div_normal}`;
  };
  return (
    <div className = {cls}>
      {child}
    </div>
  )
}

const createRandomArrayAnswers = (data, trueAnswer) => {
  const tempArr = data.map((item, index) => [item, trueAnswer === index ? 1 : 0]);
  const resArr = [];
  while (tempArr.length > 0) {
    const index = Math.floor(Math.random() * Math.floor(tempArr.length));
    resArr.push(tempArr[index]);
    tempArr.splice(index, 1);
  };
  return resArr;
}

const Body = props => {
  
  let src = '';
  let song = '';
  let answersArr = [];
  if (props.trueAnswer > -1) {
    const e = props.data[props.trueAnswer];
    src = props.srcImg;
    song = e.song;
    answersArr = createRandomArrayAnswers(props.data, props.trueAnswer);
    console.log("Call")
  };
  return (
    <div className = {classes.Body}>
      <QuestionBlock loading = {props.loading} src = {src} song = {song} nameBird = {props.nameBird}/>
      <div className = {classes.sections}>
        <div className = {`${classes.wrapper} ${classes.width50}`}>
          <AnswersBlock loading = {props.loading} answersArr = {answersArr} onClick = {props.onLiClick}/>
        </div>
        <div className = {`${classes.wrapper} ${classes.width50}`}>
          Тут тот ответ, который выбрали
        </div>
      </div>
      <div className = {classes.btn_wrapper}>
        <Button onClick = {props.onButtonClick} btnDisabled = {props.btnDisabled}/>
      </div>
    </div>
  )
}

export default Body;