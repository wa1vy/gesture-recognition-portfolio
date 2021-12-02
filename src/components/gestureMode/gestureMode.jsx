import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../../utils/utilities";
import * as fp from "fingerpose";
import victory from "../../assets/victory_emoji.png";
import thumbs_up from "../../assets/thumbs_up_emoji.png";
import {RockGesture} from "../../customGestures/rockGesture";
import {PalmGesture} from "../../customGestures/palm";
import {HangTenGesture} from '../../customGestures/hangTen'
import {SpecificGesturePage} from "./conditionalRendering";

export default function GestureMode(){
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [emoji, setEmoji] = useState('base');
    const images = { thumbs_up: thumbs_up, victory: victory };
    const [conf, setConf] = useState()
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

            // // Set canvas height and width
            // canvasRef.current.width = videoWidth;
            // canvasRef.current.height = videoHeight;

            // Make Detections
            const hand = await net.estimateHands(video);
            // console.log(hand);

            if (hand.length > 0) {
                const GE = new fp.GestureEstimator([
                    fp.Gestures.VictoryGesture,
                    fp.Gestures.ThumbsUpGesture,
                    RockGesture,
                    PalmGesture,
                    HangTenGesture
                ]);
                const gesture = await GE.estimate(hand[0].landmarks, 4);
                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    //console.log(gesture.gestures);

                    const confidence = gesture.gestures.map(
                        (prediction) => prediction.confidence
                    );
                    const maxConfidence = confidence.indexOf(
                        Math.max.apply(null, confidence)
                    );
                    setEmoji(gesture.gestures[maxConfidence].name);
                    // console.log(gesture.gestures[maxConfidence].name)
                    setConf(gesture.gestures[maxConfidence])
                    //console.log(gesture.gestures[maxConfidence].name , 'confidence:',conf)
                }
            }

            // // Draw mesh
            // const ctx = canvasRef.current.getContext("2d");
            // drawHand(hand, ctx);
        }
    };

    useEffect(()=>{runHandpose()},[]);
    if((emoji !== 'base')) {
        return (

                <div className='gestureMode'>
                    <Webcam className='webcam'
                            ref={webcamRef}
                            audio={false}
                    />
                    {/*<canvas className='canvas'*/}
                    {/*        ref={canvasRef}*/}
                    {/*/>*/}
                    {SpecificGesturePage(emoji)}
                </div>


        );
    }
    return (

                <div className='gestureMode'>
                    <Webcam className='webcam'
                            ref={webcamRef}
                            audio={false}
                    />
                    {/*<canvas className='canvas'*/}
                    {/*        ref={canvasRef}*/}
                    {/*/>*/}
                    {SpecificGesturePage('base')}
                </div>


    )
}