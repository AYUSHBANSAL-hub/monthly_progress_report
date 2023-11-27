import React from 'react'
import "./ScoreCard.css"
import Speedometer from '../Speedometer'
const ScoreCard = ({heading,max,score,slot}) => {
  return (
    <div className='score-card'>
        <h4>{heading}</h4>
        <div className='meter-div'>
            <Speedometer value={score} maxvalue={max} slot={slot}/>
            <p>Score - {score}/{max}</p>
        </div>
        <div className='percentage-score'>{Math.floor(score*100/max)}%</div>
    </div>
  )
}

export default ScoreCard;