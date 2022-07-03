import React, { useState } from "react";
import Congratulations from "./Congratulations";
import Plans from "./Plans";
import Steps from "./Steps";
import UserDetails from "./UserDetails";
import WorkspaceDetails from "./WorkspaceDetails";
import logo from "../../assets/media/images/edenlogo.png";

function Onboarding(){
  const [currentScreen, setcurrentScreen] = useState(1);

  const Header = () => {
    return (
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex justify-center">
        <img
          className="h-6 w-auto"
          src={logo}
          alt="Workflow"
        />
        <span className="ml-2 text-xl font-bold">Eden</span>
      </div>
    )
  }

  const handleCurrentScreen = (value) => {
    setcurrentScreen(value)
  }

  const DispalyCurrentScreen = () => {
    switch (currentScreen) {
      case 1:
        return <UserDetails handleCurrentScreen={handleCurrentScreen}/>
      case 2:
        return <WorkspaceDetails handleCurrentScreen={handleCurrentScreen}/>
      case 3:
        return  <Plans handleCurrentScreen={handleCurrentScreen}/>
      case 4:
        return  <Congratulations handleCurrentScreen={handleCurrentScreen}/>
      default:
        return <UserDetails handleCurrentScreen={handleCurrentScreen}/>
    }
  }

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Header />
      <Steps currentScreen={currentScreen}/>
      <DispalyCurrentScreen />
    </div>
  )
}

export default Onboarding