import React from "react";
import "./App.css";
import Adress from "./profile/Adress";
import FullName from "./profile/FullName";
import ProfilePhoto from "./profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
       
        <ProfilePhoto></ProfilePhoto>
      <div> <FullName></FullName>
      
      <Adress />
      </div>
    </div>
  );
}

export default App;
