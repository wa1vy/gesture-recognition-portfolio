import React from "react";
import {Link} from "react-router-dom";
import Loader from "./Loader";
import Expire from "../utils/Expire";
export default function HomePage(){

        return(
        <div>
            <div className='testDiv'>
                <h1>Home Page</h1>
                <Link to='/gesture-mode'>
                    <button>Change mode to gestures!</button>
                </Link>
                <Expire delay="7500"><Loader/></Expire>
            </div>
        </div>

    )
}