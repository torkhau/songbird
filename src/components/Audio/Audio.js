import React, { Component } from "react"
import classes from "./Audio.css"

class Audio extends Component {
  constructor(props){
    super(props)
    this.state = {
      isTogglePlay: true,
      positionPlayhead: 0
    }
  }

  componentDidMount() {
    this.audio = document.getElementById('audio');
    this.btnPlay = document.getElementById('btn_play');
    this.btnPlay.addEventListener('click', this.onClick);
    this.audio.addEventListener('canplaythrough', this.onCanPlayThrought);
    this.audio.addEventListener('timeupdate', this.onTimeUpdate)
  }

  componentWillUnmount() {
    this.btnPlay.removeEventListener('click', this.onClick);
    this.audio.removeEventListener('canplaythrough', this.onCanPlayThrought)
    this.audio.removeEventListener('timeupdate', this.onTimeUpdate)
  }

  onClick = () => {
    let isTogglePlay;
    if (this.state.isTogglePlay) {
      this.audio.play();
      isTogglePlay = false;
    } else {
      this.audio.pause();
      isTogglePlay = true;
    }
    this.setState({ isTogglePlay });
  }

  onCanPlayThrought = () => {
    this.duration = this.audio.duration
  }

  onTimeUpdate = () => {
    const playPercent = 100 * (this.audio.currentTime / this.duration);
    const state = {positionPlayhead: playPercent};
    if (playPercent === 100) {
      state.isTogglePlay = true;
      state.positionPlayhead = 0
    }
    this.setState(state);
  }

  render() {
    return (
      <div className = {classes.Audio}>
        <audio 
        id = 'audio' 
        hidden
        src = {this.props.song}
        onClick = {this.onClick}
        controls
        />
        <div className = {classes.audio_wrapper}>
          <div id = 'btn_play' className = {classes.btn_play}>
            <span className = {this.state.isTogglePlay ? classes.icon_play3 : classes.icon_pause2}></span>
          </div>
          <div className = {classes.timeline}  
                style = {{ background: `linear-gradient(to right,
                  red 0%, 
                  red ${this.state.positionPlayhead}%,
                  rgb(255, 115, 115) ${this.state.positionPlayhead}%,
                  rgb(255, 115, 115) 100%)` }}>
            <div className = {classes.playhead} style = {{ marginLeft: `calc(${this.state.positionPlayhead}% - 18px)` }}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Audio