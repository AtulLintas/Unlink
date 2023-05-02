import React from 'react';
import Header from './BasicBody/Header';
import Footer from './BasicBody/Footer';
import Hero from './Components/Hero';
import Process from './Components/Workingprocess/Process';
import Benefits from './Components/VideoFrame/Benefits';
import Feedback from './Components/Feedback/Feedback';
import MoneyTime from './Components/MoneyTime/MoneyTime';
import ScrollBack from './ScrollBackBtn/ScrollBack';


const AppSuccessor = () => {
  return (
    <>
       <Header/>
       <Hero/>
       <Process/>
       <Benefits/>
       {/* <Feedback/> */}
       <MoneyTime/>
       <ScrollBack/>
       <Footer/>
    </>
  )
}

export default AppSuccessor;