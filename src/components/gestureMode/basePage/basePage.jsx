import React from "react";
import './basePage.css'

import TopBar from "../../../navigation/topBar";
export default function BasePage(){
    return(
        <div>
                <TopBar/>
            <div className='testDiv'>
                <h1>Basic Page</h1>
            </div>
        </div>

    )
}