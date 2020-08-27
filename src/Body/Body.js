import React, { Component} from "react";
import classes from "./Body.css";
import Container from "../components/Container/Container"

const Body = props => {
  return (
    <div className={classes.Body}>
        <Container className = {'border'}>
          Тут рандомный вопрос
        </Container>
        <Container className = {'flex'}>
          <Container className = {'border'}>
            Тут ответы
          </Container>
          <Container className = {'border'}>
            Тут тот ответ, который выбрали
          </Container>
        </Container>
    </div>
  )
}

export default Body;