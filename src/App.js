import React, { Component} from "react";
import classes from "./App.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0, 
      lavel: 0
    }
  }

  nextLevelClickHandler = () => {
    this.setState({lavel : this.state.lavel + 1})
  }

  render() {
    return(
      <div className={classes.App}>
        <Header score = {this.state.score} level = {this.state.lavel}/>
        <Body />
        <Footer onClick = {this.nextLevelClickHandler}/>
      </div>
    );
  }
}

export default App;