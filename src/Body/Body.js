import React, { Component} from "react";
import classes from "./Body.css";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";

const Body = props => {
  return (
    <div className={classes.Body}>
        <Container className = {'border'}>
          Тут рандомный вопрос
        </Container>
        <Container className = {'flex'}>
          <Container className = {'border half_field'}>
            Тут ответы
          </Container>
          <Container className = {'border half_field'}>
            Тут тот ответ, который выбрали
          </Container>
        </Container>
        <Container className = {'button_container'}>
          <Button onClick = {props.onClick}/>
        </Container>
    </div>
  )
}

export default Body;