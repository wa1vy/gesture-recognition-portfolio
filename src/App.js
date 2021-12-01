// >>>>>>>>> HANDPOSE SETUP
//Setup webcam and canvas DONE
// Define references to those DONE
// Load hanpose DONE
// Detect function DONE
// Drawing utilities from tensorflow DONE
// Draw functions DONE

// >>>>>>>>> GESTURE RECOGNITION
// add Use State DONE
// Import emojis and finger pose import DONE

// upd detect function for gesture handling DONE
// setup hook and emoji object DONE
// add emoji display to the screen DONE


// Create new gesture definition DONE
// Import gesture to handpose

import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import "./App.css";
import GestureMode from "./gestureMode";
import {MyHardSkillsPage} from "./components/MyHardSkillsPage";
import MyProjectsPage from "./components/MyProjectsPage";
import PalmPage from "./components/PalmPage";
import BasePage from "./components/basePage";
import HomePage from "./components/homePage";

function App() {

    return(
        <div className="App">
            <Routes>
                <Route path = '/' element={<HomePage/>} />
                <Route path = '/base-page' element={<BasePage/>} />
                <Route path = '/gesture-mode' element={<GestureMode/>} />
                <Route path = '/hard-skills' element={<MyHardSkillsPage/>} />
                <Route path = '/projects' element={<MyProjectsPage/>} />
                <Route path = '/palm-page' element={<PalmPage/>} />
            </Routes>
        </div>
    )
}

export default App;