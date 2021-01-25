import React, { Component } from 'react';
import classes from './App.module.css';
import Header from './Blocks/Header/Header';
import Question from './Blocks/Question/Question';
import Footer from './Blocks/Footer/Footer';
import Answers from './Blocks/Answers/Answers';
import Loader from './components/Loader/Loader';
import Description from './Blocks/Desctiption/Description'
import Button from "./components/Button/Button";

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
      btnDisabled: true,
      loading: true,
      win: false,
      indexAnswer: -1,
      labels: [0, 0, 0, 0, 0, 0]
    }
    this.maxPoints = 5;
    this.arrPoints = [1, 1, 1, 1, 1, 1];
  };

  createQuestion = (data) => {
    this.trueAnswer = Math.floor(Math.random() * data.length);
    this.data = data;
    this.setState({
      loading: false
    })
  };

  getData = async (level) => {
    fetch(`https://songbirds-1cb24.firebaseio.com/${menuItems[level][1]}.json`)
      .then(response => response.json())
      .then(data => this.createQuestion(data))
      .catch(err => console.log(err))
  }

  async componentDidMount() {
    this.getData(this.state.level)
  }

   nextLevelClickHandler = async () => {
    this.maxPoints = 5;
    this.arrPoints = [1, 1, 1, 1, 1, 1];
    this.getData(this.state.level + 1);
    this.setState(preState => ({
      level: preState.level + 1,
      btnDisabled: true,
      win: false,
      indexAnswer: -1,
      labels: [0, 0, 0, 0, 0, 0],
      loading: true
    }));
  };

  renderDescription = (indexAnswer) => {
    return <Description data={this.data[indexAnswer]} />
  }

  onClickAnswer = (index, type) => {
    this.setState({ indexAnswer: index });
    if (this.state.win) return;
    if (this.trueAnswer === index) {
      this.setState(preState => ({
        score: preState.score + this.maxPoints,
        btnDisabled: false,
        win: true,
        labels: preState.labels.map((item, i) => index === i ? type : item)
      })
      )
    } else {
      this.maxPoints -= this.arrPoints[index];
      this.arrPoints[index] = 0;
      this.setState(preState => ({
        labels: preState.labels.map((item, i) => index === i ? type : item)
      })
      )
    }
  }

  render() {
    const { win, level, score, indexAnswer, btnDisabled, labels, loading } = this.state;
    return (
      <div className={classes.App}>
        <Header score={score} level={level} menu={menuItems} />
        <div className={classes.Body}>
          <div className={`${classes.section} ${loading ? classes.Loader : ''}`}>
            {loading ?
              <Loader /> :
              <Question data={this.data[this.trueAnswer]} win={win} hidden={true} hash='que' />
            }
          </div>
          <div className={classes.section}>
            <div className={classes.wrapper}>
              <div className={`${classes.wrapper_answers} ${classes.width50} ${loading ? classes.Loader : ''}`}>
                {loading ?
                  <Loader /> :
                  <Answers data={this.data} trueAnswer={this.trueAnswer} onClick={this.onClickAnswer} labels={labels} />
                }
              </div>
              <div className={`${classes.wrapper_description} ${classes.width50} ${loading ? classes.Loader : ''}`}>
                {indexAnswer === -1 ?
                  'Паслухайце плэер і абярыце птушку' :
                  loading ?
                    <Loader /> :
                    this.renderDescription(indexAnswer)}
              </div>
            </div>
          </div>
          <div className={classes.btn_wrapper}>
            <Button onClick={this.nextLevelClickHandler} btnDisabled={btnDisabled} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;