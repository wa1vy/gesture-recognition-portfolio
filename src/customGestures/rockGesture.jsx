import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';
// Define Gesture Description
export const RockGesture = new GestureDescription('rock')

// Thumb
RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
RockGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
RockGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

// Index
RockGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
RockGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.35);

// Pinky
RockGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
RockGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.35);

for(let finger of [Finger.Middle, Finger.Ring]){
    RockGesture.addCurl(finger, FingerCurl.FullCurl, .75);
   // RockGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}