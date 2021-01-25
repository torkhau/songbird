import React from 'react';
import classes from './Question.module.css';
import Img from "../../components/Img/img"
import Audio from "../../components/Audio/Audio";
import emptyBerd from "../../assets/images/emptybird.jpg";

const Question = props => {
  const srcImg = props.win ? props.data.img : emptyBerd;
  const nameBird = props.win ? props.data.Name : '?????????????????';
  const nameLat = !props.hidden ? props.data.NameLat : '';
  return (
    <div className={classes.Question}>
      <div>
        <Img src={srcImg} />
      </div>
      <div className={classes.block_discription}>
        <p>{nameBird}</p>
        <hr hidden={!props.hidden} />
        <div hidden={props.hidden}>
          <hr />
          <p>{nameLat}</p>
          <hr />
        </div>
        <Audio song={props.data.song} hash={props.hash} win={props.win} />
      </div>
    </div>
  )
}

export default Question;