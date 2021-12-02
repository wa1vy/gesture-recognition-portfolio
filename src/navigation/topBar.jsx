import React from 'react';
import palm from '../assets/palm.png'
import hangTen from '../assets/hang-ten.png'
import rockAndRoll from '../assets/rock-and-roll.png'
import victory from '../assets/victory.png'
import thumbsUp from '../assets/thumbs_up.png'
import './topBar.css'
function TopBar(props) {
    const gestures = {
        palm: palm,
        hangTen: hangTen,
        rockAndRoll: rockAndRoll,
        victory: victory,
        thumbsUp: thumbsUp,

    }
    return (
        <div>
            <div className='instructionsContainer'>
                <img alt = 'palm-img' src={gestures.palm}/>
                <img alt = 'hang-ten-img' src={gestures.hangTen}/>
                <img alt = 'rock-and-roll-img' src={gestures.rockAndRoll}/>
                <img alt = 'victory-img' src={gestures.victory}/>
                <img alt = 'thumbs-up img' src={gestures.thumbsUp}/>
            </div>
            <div className='gestureNames'>
                <span>Palm Page</span>
                <span>Contacts</span>
                <span>Base Page</span>
                <span>Hard Skills</span>
                <span>Projects</span>
            </div>
        </div>

    );
}

export default TopBar;

// victory: HardSkillsPage,
//     thumbs_up: ProjectsPage,
//     base: BasePage,
//     rock: BasePage,
//     palm: PalmPage,