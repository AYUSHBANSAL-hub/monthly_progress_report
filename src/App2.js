/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Find_user from "./Find_user";
function App2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sheet.best/api/sheets/11fcc4cb-a09d-4a67-ac4d-06974a57a7e0"
        );
        const result = await response.json();
        setData(result);
        localStorage.setItem("alldata",JSON.stringify(result));
        console.log(result);
        //console.log(result[0]["Submission ID"]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Find_user/>}/>
        {data.map((item) => (
          //console.log(item["Submission ID"])
          <Route path={`${item["user_email"]}/${item["Repeat COunt"]}`} element={<App data={item} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App2;
