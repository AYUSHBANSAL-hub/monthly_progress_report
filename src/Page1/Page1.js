import React, { useState, useEffect } from "react";
import toplogo from "../assets/logos.svg";
import "./Page1.css";
import ProgressBar from "../Progressbar/ProgressBar.js";
import RadarChart from "../RadarChart/RadarChart";
import ScoreCard from "../score-card/ScoreCard";
import CustomSegmentLabels from "../LabelMeter";
import { StudentDataProcessor } from "../StudentDataProcessor";
import LineGraph from "../LineGraph.js";

const Page1 = () => {
  const [attendanceObject, setAttendanceObject] = useState({});
  const [data, setData] = useState({});
  const [avgUserData, setAvgUserData] = useState({});
  // const dataObject1 = { Jan: 65, Feb: 59, Mar: 80, Apr: 81, May: 56 };
  // const dataObject2 = { Jan: 28, Feb: 48, Mar: 40, Apr: 19, May: 86 };
  const questionKeys = [
    "Day 1", "Day 2", "Day 3", "Day 4", "Day 5",
    "Day 6", "Day 7", "Day 8", "Day 9", "Day 10",
    "Day 11", "Day 12", "Day 13", "Day 14", "Day 15",
    "Day 16", "Day 17", "Day 18", "Day 19", "Day 20",
    "Day 21", "Day 22", "Day 23",
    // Add more days if needed
  ];
  const tickStyle = {
    color: "green",
    border: "1px solid black",
    display: "inline-block",
    paddingLeft: "5px",
    width: "15px",
    marginBottom: "2px",
    marginRight: "5px",
  };
  const crossStyle = {
    color: "red",
    border: "1px solid black",
    display: "inline-block",
    paddingLeft: "5px",
    width: "15px",
    marginBottom: "2px",
    marginRight: "5px",
  };

  useEffect(() => {
    // Initialize data processing and retrieval
    StudentDataProcessor();
    const averageData = JSON.parse(localStorage.getItem("averages"));
    const userData = JSON.parse(localStorage.getItem("currentUser"));
    
    // Set state
    setData(userData);
    setAvgUserData(findAverageUserData(averageData, userData));
    setAttendanceObject(extractDays(userData, questionKeys));
  }, []);

  // Function to extract days
  function extractDays(data, keysToKeep) {
    let filteredData = {};
    keysToKeep.forEach((key) => {
      if (data.hasOwnProperty(key)) {
        filteredData[key] =Math.ceil(parseFloat(data[key]));
        // filteredData[key] = parseInt(data[key].split("|")[0]);
      }
    });
    return filteredData;
  }

  // Function to find average user data
  function findAverageUserData(averageData, userData) {
    // Logic to find and return average user data
    console.log(averageData.find(item => 
      item.current_job_status === userData.current_job_status &&
      item.background === userData.background));
    // Update as per your data structure and requirement
    return averageData.find(item => 
      item.current_job_status === userData.current_job_status &&
      item.background === userData.background
    );
  }

  return (
    <div className="Page-1">
      <div className="top-header">
        <img src={toplogo} height={175} alt="Top Logo" />
        <div className="box-1">
          <p className="style-1">Hello,</p>
          <h2 className="style-1">{data.Name}</h2>
          <p className="horizontal-line"></p>
          <p>Monthly Progress Report</p>
          <p className="horizontal-line"></p>
          <h4>{data.course_title}</h4>
          {/* <div className="roller-container">
            <div className="text-container">
              <h1 className="text">{Math.floor((parseInt(data.someValue, 10) * 100) / 500)}%</h1>
              <h1 className="text">{data.someValue}/500</h1>
            </div>
          </div>
          <ProgressBar percent={Math.floor((parseInt(data.someValue, 10) * 100) / 500)} /> */}
        </div>
      </div>

      <div className="page-1-bottom-row">
        <div className="checkbox-div">
          <h4 style={{ fontWeight: "800" }}>Psychometric</h4>
          <div className="psycho-scores">
            {/* Loop through psychometric properties if they are dynamic */}
            <p style={{ fontSize: "13px", fontWeight: "100", color: "#404040" }}>
              {data.logical ? (
                <span style={tickStyle}>&#10004;</span>
              ) : (
                <span style={crossStyle}>&#10008;</span>
              )}
              Logical
            </p>
            {/* Repeat for other psychometric properties */}
          </div>
          <div className="score-div psychometric">
            Score - {data.psychometric_score}/10
          </div>
        </div>
        <LineGraph 
          dataObject1={attendanceObject} 
          dataObject2={extractDays(avgUserData, questionKeys)}
        />
        {/* Add other components as required */}
      </div>
    </div>
  );
};

export default Page1;
