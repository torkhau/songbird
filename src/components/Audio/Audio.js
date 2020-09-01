import React, { Component } from "react"
import classes from "./Audio.css"

class Audio extends Component {
  constructor(props){
    super(props)
    this.state = {
      isTogglePlay: true,
      positionPlayhead: 0,
      currentTime: 0,
      duration: 0,
    };
    this.won = false;
    this.id_audio = `audio_${props.hash}`;
    this.id_btn = `btn_play_${props.hash}`;
  }

  componentDidMount() {
    this.audio = document.getElementById(this.id_audio);
    this.btnPlay = document.getElementById(this.id_btn);
    this.btnPlay.addEventListener('click', this.onClick);
    this.audio.addEventListener('canplaythrough', this.onCanPlayThrought);
    this.audio.addEventListener('timeupdate', this.onTimeUpdate);
  }

  componentWillUnmount() {
    this.btnPlay.removeEventListener('click', this.onClick);
    this.audio.removeEventListener('canplaythrough', this.onCanPlayThrought)
    this.audio.removeEventListener('timeupdate', this.onTimeUpdate)
  }

  // componentWillUpdate() {
  //   if (this.won) {
  //     if (this.props.win) {
  //       this.audio.stop();
  //       this.won = true;
  //       this.setState({
  //         isTogglePlay: true,
  //         positionPlayhead: 0,
  //         currentTime: 0,
  //         duration: 0
  //       })
  //     }
  //   }
  // }

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

  onCanPlayThrought = () => this.setState({ duration: this.audio.duration});

  onTimeUpdate = () => {
    this.setState(preState => {
      const currentTime = this.audio.currentTime;
      const playPercent = 100 * (currentTime / preState.duration);
      const state = {
        positionPlayhead: playPercent,
        currentTime: currentTime
      };
      if (playPercent === 100) {
        state.isTogglePlay = true;
        state.positionPlayhead = 0;
        state.currentTime = 0;
      }
      return state;
    });
  }

  timeFormatter = time => {
    const h = Math.floor(time / 3600);
    const m = Math.floor(time / 60) - h * 60;
    const s = Math.floor(time % 60);
    const hms = [m.toString().padStart(2, '0'), s.toString().padStart(2, '0')];
    if (h > 0) {
      hms.unshift(h.toString().padStart(2, '0'))
    };
    return hms.join(':');
  }

  render() {
    
    return (
      <div className = {classes.Audio}>
        <audio 
        id = {this.id_audio} 
        hidden
        src = {this.props.song}
        onClick = {this.onClick}
        controls
        />
        <div className = {classes.audio_wrapper}>
          <div id = {this.id_btn} className = {classes.btn_play}>
            <span className = {this.state.isTogglePlay ? classes.icon_play3 : classes.icon_pause2}></span>
          </div>
          <div className = {classes.timeline_wrapper}>
            <div className = {classes.timeline}  
                  style = {{ background: `linear-gradient(to right,
                    red 0%, 
                    red ${this.state.positionPlayhead}%,
                    rgb(255, 115, 115) ${this.state.positionPlayhead}%,
                    rgb(255, 115, 115) 100%)` }}
                  >
              <div className = {classes.playhead} 
                  style = {{ marginLeft: `calc(${this.state.positionPlayhead}% - 4.5px)` }}>
              </div>
            </div>
            <div className = {classes.indicator}> 
              <span>{this.timeFormatter(this.state.currentTime)}</span>
              <span>{this.timeFormatter(this.state.duration)}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Audio