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
import {Routes, Route} from 'react-router-dom'
import "./App.css";
import GestureMode from "./components/gestureMode/gestureMode";
import {HardSkillsPage} from "./components/hardSkillsPage";
import ProjectsPage from "./components/projectsPage";
import PalmPage from "./components/PalmPage";
import BasePage from "./components/gestureMode/basePage/basePage";
import HomePage from "./components/homePage";

function App() {

    return(
        <div className="App">
            <Routes>
                <Route path = '/' element={<HomePage/>} />
                <Route path = '/base-page' element={<BasePage/>} />
                <Route path = '/gesture-mode' element={<GestureMode/>} />
                <Route path = '/hard-skills' element={<HardSkillsPage/>} />
                <Route path = '/projects' element={<ProjectsPage/>} />
                <Route path = '/palm-page' element={<PalmPage/>} />
            </Routes>
        </div>
    )
}

export default App;