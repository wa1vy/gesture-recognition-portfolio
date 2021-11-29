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

// upd detect function for gesture handling
//setup hook and emoji object
// add emoji display to the screen


import React, {useRef, useState} from "react";
import * as tf from '@tensorflow/tfjs'
import * as fp from 'fingerpose'
import victory from './victory.png'
import thumbs_up from './thumbs_up.png'
import * as handpose from '@tensorflow-models/handpose'
import Webcam from 'react-webcam'
import './App.css';
import {drawHand} from "./utilities";

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () =>{
    const net = await handpose.load()
    console.log('Handpose model loaded.')
    //Loop and detect hands
    setInterval(()=>{
      detect(net)
    },100)
  }

  const detect = async (net)=>{
    // Check data is available
    if(
        typeof webcamRef.current !== 'undefined' &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
    ){
      // Get video properties
      const video = webcamRef.current.video
      const videoHeight = webcamRef.current.video.videoHeight
      const videoWidth = webcamRef.current.video.videoWidth

      // Set video height and width
      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      // Set canvas height and width
      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      // Make detections
      const hand = await net.estimateHands(video)
      console.log(hand)

        if (hand.length > 0) {
            const GE = new fp.GestureEstimator([
                fp.Gestures.VictoryGesture,
                fp.Gestures.ThumbsUpGesture,
            ]);
          const gesture = await GE.estimate(hand[0].landmarks,8)
          console.log(gesture)
      }
      // Draw mesh
      const ctx = canvasRef.current.getContext('2d')
      drawHand(hand, ctx)
    }

  }
  runHandpose()
  return (
      <div className="App">
        <header className="App-header">
          <Webcam ref={webcamRef}
                  style={{
                    position:'absolute',
                    marginLeft:'auto',
                    marginRight:'auto',
                    left:0,
                    right:0,
                    textAlign:'center',
                    zIndex:9,
                    width:640,
                    height:480
                  }}/>
          <canvas ref={canvasRef}
                  style={{
                    position:'absolute',
                    marginLeft:'auto',
                    marginRight:'auto',
                    left:0,
                    right:0,
                    textAlign:'center',
                    zIndex:9,
                    width:640,
                    height:480
                  }}/>
        </header>
      </div>
  );
}

export default App;
