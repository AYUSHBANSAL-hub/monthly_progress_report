import React from 'react';
import "./ProgressBar.css";
const ProgressBar = ({inside_text="",width="100%",height="7px" ,percent,bg_color="#404040",front_color="white" }) => (
  <div className="progress-bar-container" style={{width:`${width}`,backgroundColor:`${bg_color}`, height:`${height}`}}>
    <div className="progress-bar" style={{ width: `${percent}%` ,backgroundColor:`${front_color}`,color:"white", paddingLeft:"10px", fontSize:"13px"}}>{inside_text}%</div>
  </div>
);

export default ProgressBar;
