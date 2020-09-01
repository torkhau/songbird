import React, { Component } from 'react';
import classes from './Answers.module.css';
import win from '../../assets/sound/win.mp3';
import fall from '../../assets/sound/fall.mp3';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.isFind = false;
  }
  
  componentDidMount() {
    this.win = document.getElementById('win');
    this.win.volume = 0.4;
    this.fall = document.getElementById('fall');
    this.fall.volume = 0.4;
  }

  onClick = (index) => {
    let type = 0;
    if (!this.isFind) {
      if (this.trueAnswer === index) {
        this.isFind = true;
        type = 2;
        this.win.play();
      } else {
        type = 1;
        this.fall.play()
      };
    };
    this.props.onClick(index, type);
  }

  addClassName = index => {
    const className = [];
    if (index !== 0) {
      className.push(classes.border_top);
    };
    const label = this.props.labels[index];
    if (label === 1) {
      className.push(classes.false)
    } else if (label === 2) {
      className.push(classes.true)
    } else {
      className.push(classes.normal)
    }
    return className.join(' ');
  }

  renderList = () => {
    return this.data.map((item, index) => (
        <li key = {index}
            className = {this.addClassName(index)}
            onClick = {() => this.onClick(index)}>
          { item.Name } {this.trueAnswer}
        </li>
      )
    )
  }

  render() {
    this.data = this.props.data;
    this.trueAnswer = this.props.trueAnswer;
    if (this.props.labels.reduce((summ, item) => summ + item) === 0) {
      this.isFind = false;
    } 
    return (
      <div className = {classes.Answers}>
        <audio id = 'win' src = {win} hidden></audio>
        <audio id = 'fall' src = {fall} hidden ></audio>
         <ul>
          { this.renderList() }
        </ul>
      </div>
    )
  }
}

export default Answers;