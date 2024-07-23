import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import Events from "./components/Events";
import PracticalInfo from "./components/PracticalInfo";
import Additional from "./components/AdditionalFeatures";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <UserProfile />
      <Events />
      <PracticalInfo />
      <Additional/>
    </div>
  );
}
  
export default App;
