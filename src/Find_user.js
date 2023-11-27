import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Find_user = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  function findFirstByEmail(objectsArray, emailToFind) {
    for (let obj of objectsArray) {
      if (obj.user_email === emailToFind) {
        return obj;
      }
    }
    return null; // or return an appropriate message like 'Email not found'
  }
  function handleSubmit() {
    console.log(email);
    const data = JSON.parse(localStorage.getItem("alldata"));
    console.log(data);
    let userfound=findFirstByEmail(data, email);
    if(userfound){
        console.log("user found", userfound);
        localStorage.setItem("currentUser",JSON.stringify(userfound));
        const newPath = `/${userfound.user_email}/${userfound["Repeat COunt"]}`; // Constructing the new path
        navigate(newPath);
    }
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="bansal.ayush2002@gmail.com"
      ></input>
      <button onClick={handleSubmit}>Generate Report</button>
    </div>
  );
};

export default Find_user;
