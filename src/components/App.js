import React from 'react';
import Header from "./Header";
import StartForm from "./StartForm";
import Pitch from "./Pitch";
import Warning from "./Warning";
import Previous from "./Previous";
import About from "./About";

const App = () => (
    <>
        <Header/>
        <Previous/>
        <About/>
        <Warning /> 
        <StartForm />
        <Pitch /> 
    </>
);


export default App;