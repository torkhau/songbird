import React, { Component } from "react"
import classes from "./Audio.css"

class Audio extends Component {
  constructor(props){
    super(props)
    this.state = {
      isTogglePlay: false
    }
  }

  componentDidMount() {
    this.audio = document.getElementById('audio');
    this.btnPlay = document.getElementById('btn_play');
    this.btnPlay.addEventListener('click', this.onClick)
  }

  componentWillUnmount() {
    this.btnPlay.removeEventListener('click', this.onClick)
  }

  onClick = () => {
    let isTogglePlay;
    if (!this.state.isTogglePlay) {
      this.audio.play();
      isTogglePlay = true;
    } else {
      this.audio.pause();
      isTogglePlay = false;
    }
    this.setState({isTogglePlay});
  }

  render() {
    return (
      <div className = {classes.Audio}>
        <audio 
        id = 'audio' 
        hidden
        src = {'https://www.xeno-canto.org/sounds/uploaded/WZCOFQXSWJ/XC437780-sitta%20ledanti%20%C3%A0%20djimla%202018%2010%2007%20028.mp3'}
        onClick = {this.onClick}
        controls
        />
        <div id = 'btn_play' className = {classes.btn_play}>

        </div>
      </div>
    )
  }
}

export default Audio