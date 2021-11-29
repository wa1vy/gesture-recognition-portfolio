// Install dependencies  DONE
// Import Dependencies DONE
//Setup webcam and canvas DONE
// Define references to those DONE
// Load hanpose DONE
// Detect function
// Drawing utilities from tensorflow
// Draw functions
import React, {useRef} from "react";
import * as tf from '@tensorflow/tfjs'
import * as handpose from '@tensorflow-models/handpose'
import Webcam from 'react-webcam'
import './App.css';

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
      // Draw mesh
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
