import React from 'react';
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';
// Define Gesture Description
export const PalmGesture = new GestureDescription('palm')

// Thumb
PalmGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
PalmGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
PalmGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
PalmGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
PalmGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Pinky
PalmGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
PalmGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for(let finger of [Finger.Middle, Finger.Ring]){
    PalmGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    PalmGesture.addDirection(finger, FingerDirection.VerticalUp, 0.45);
}