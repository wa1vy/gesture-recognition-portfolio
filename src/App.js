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

import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
import TestHeader from "./components/testHeader";
import Test2Header from "./components/test2Header";
import BasePage from "./components/basePage";
import {RockGesture} from "./customGestures/rockGesture";
import {PalmGesture} from "./customGestures/palm";
import Test3Header from "./components/test3Header";
function App() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [emoji, setEmoji] = useState('base');
    const images = { thumbs_up: thumbs_up, victory: victory };
    let a = 0

    const runHandpose = async () => {
        const net = await handpose.load();
        console.log("Handpose model loaded.");
        //  Loop and detect hands
        setInterval(() => {
            detect(net);
        }, 10);
    };

    const detect = async (net) => {
        // Check data is available
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // Make Detections
            const hand = await net.estimateHands(video);
            // console.log(hand);

            if (hand.length > 0) {
                const GE = new fp.GestureEstimator([
                    fp.Gestures.VictoryGesture,
                    fp.Gestures.ThumbsUpGesture,
                    RockGesture,
                    PalmGesture
                ]);
                const gesture = await GE.estimate(hand[0].landmarks, 4);
                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    console.log(gesture.gestures);

                    const confidence = gesture.gestures.map(
                        (prediction) => prediction.confidence
                    );
                    const maxConfidence = confidence.indexOf(
                        Math.max.apply(null, confidence)
                    );
                    setEmoji(gesture.gestures[maxConfidence].name);
                    console.log(gesture.gestures[maxConfidence].name)
                }
            }

            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };

    useEffect(()=>{runHandpose()},[]);

    if(emoji === 'victory'){
        return(
        <div className="App">
                    <header className="App-header">
                        <Webcam className = 'webcam'
                            ref={webcamRef}
                            style={{
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                               // zIndex: 7,
                                width: 640,
                                height: 480,
                            }}
                        />
                      <canvas
                            ref={canvasRef}
                            style={{
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                zIndex: -1,
                                width: 640,
                                height: 480,
                            }}
                        />
                        <TestHeader/>
                    </header>
                </div>
            );
    }else if(emoji === 'thumbs_up'){
        return(
            <div className="App">
                <header className="App-header">
                    <Webcam className = 'webcam'
                        ref={webcamRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            //zIndex: 7,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zIndex: -1,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <Test2Header/>
                </header>
            </div>
        );
    }else if (emoji === 'base'){
       return (
            <div className="App">
                <header className="App-header">
                    <Webcam className = 'webcam'
                        ref={webcamRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            //zIndex: 7,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zIndex: -1,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <BasePage/>
                </header>

            </div>
        );
    }else if (emoji === 'rock'){
        return (
            <div className="App">
                <header className="App-header">
                    <Webcam className = 'webcam'
                        ref={webcamRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                           // zIndex: 7,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zIndex: -1,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <BasePage/>
                </header>

            </div>
        );
    }else if (emoji === 'palm'){
        return (
            <div className="App">
                <header className="App-header">
                    <Webcam className = 'webcam'
                        ref={webcamRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            //zIndex: 7,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zIndex: -1,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <Test3Header/>
                </header>

            </div>
        );
    }
    else {
        return (
            <div className="App">
                <header className="App-header">
                    <Webcam className = 'webcam'
                        ref={webcamRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            //zIndex: 7,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zIndex: -1,
                            width: 640,
                            height: 480,
                        }}
                    />
                    <BasePage/>
                </header>

            </div>
        );
    }
}

export default App;