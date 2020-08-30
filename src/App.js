import React, { Component } from "react";
import classes from "./App.css";
import Header from "./Blocks/Header/Header";
import Body from "./Blocks/Body/Body";
import Footer from "./Blocks/Footer/Footer";

const menuItems = [
  ['Хатнiя', 'Home'],
  ['Лясныя', 'Forest'],
  ['Драпежныя', 'Predator'],
  ['Вадаплаўныя', 'Water'],
  ['З Чырвонай кнігі', 'RedBook'],
  ['Рэдкія', 'Rare']
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0, 
      level: 0,
      btnDisabled: false,
      trueAnswer: -1,
      data: [],
      loading: true
    }
  };

  createQuestion = (data) => {
    const trueAnswer = Math.floor(Math.random() * Math.floor(data.length));
    this.setState({
      trueAnswer,
      data,
      loading: false
    })
  };

  getData = async (level) => {
    fetch(`https://songbirds-1cb24.firebaseio.com/${menuItems[level][1]}.json`)
    .then(response => response.json())
    .then(data => this.createQuestion(data))
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData(this.state.level)
  }
  
  nextLevelClickHandler = () => {
    const level = this.state.level + 1;
    this.setState({ level });
    this.getData(level);
  };

  render() {
    return(
      <div className={classes.App}>
        <Header score = {this.state.score} level = {this.state.level} menu = {menuItems}/>
        <Body 
          onClick = {this.nextLevelClickHandler}
          btnDisabled = {this.state.btnDisabled}
          level = {this.state.level}
          trueAnswer = {this.state.trueAnswer}
          data = {this.state.data}
          loading = {this.state.loading}
          />
        <Footer />
    </div>
    );
  }
}

export default App;