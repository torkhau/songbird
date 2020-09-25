import React from 'react'
import Question from '../Question/Question';

const Description = (props) => {
  return(
    <div>
      <Question data = {props.data} win = {true} hidden = {false} hash = 'des'/>
      <p>{props.data.description}</p>
    </div>
  )
}

export default Description;