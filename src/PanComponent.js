import React, { Component } from "react";
import { View, PanResponder, StyleSheet } from "react-native";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      // dx: 0
      // dy: 0
      // moveX: 0
      // moveY: 0
      // numberActiveTouches: 0
      // stateID: 0.40056668972202036
      // vx: 0
      // vy: 0
      // x0: 0
      // y0: 0

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
        const {
          dx,
          dy,
          moveX,
          moveY,
          numberActiveTouches,
          stateID,
          vx,
          vy,
          x0,
          y0
        } = gestureState;
        console.log(
          "onPanResponderGrant:",
          evt,
          "||",
          "dx:",
          dx,
          ",dy:",
          dy,
          ",moveX:",
          moveX,
          ",moveY:",
          moveY,
          ",numberActiveTouches:",
          numberActiveTouches,
          ",stateID:",
          stateID,
          ",vx:",
          vx,
          ",vy:",
          vy,
          ",x0:",
          x0,
          ",y0:",
          y0
        );
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        const {
          dx,
          dy,
          moveX,
          moveY,
          numberActiveTouches,
          stateID,
          vx,
          vy,
          x0,
          y0
        } = gestureState;
        console.log(
          "onPanResponderGrant:",
          evt,
          "||",
          "dx:",
          dx,
          ",dy:",
          dy,
          ",moveX:",
          moveX,
          ",moveY:",
          moveY,
          ",numberActiveTouches:",
          numberActiveTouches,
          ",stateID:",
          stateID,
          ",vx:",
          vx,
          ",vy:",
          vy,
          ",x0:",
          x0,
          ",y0:",
          y0
        );
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        const {
          dx,
          dy,
          moveX,
          moveY,
          numberActiveTouches,
          stateID,
          vx,
          vy,
          x0,
          y0
        } = gestureState;
        console.log(
          "onPanResponderGrant:",
          evt,
          "||",
          "dx:",
          dx,
          ",dy:",
          dy,
          ",moveX:",
          moveX,
          ",moveY:",
          moveY,
          ",numberActiveTouches:",
          numberActiveTouches,
          ",stateID:",
          stateID,
          ",vx:",
          vx,
          ",vy:",
          vy,
          ",x0:",
          x0,
          ",y0:",
          y0
        );
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        const {
          dx,
          dy,
          moveX,
          moveY,
          numberActiveTouches,
          stateID,
          vx,
          vy,
          x0,
          y0
        } = gestureState;
        console.log(
          "onPanResponderGrant:",
          evt,
          "||",
          "dx:",
          dx,
          ",dy:",
          dy,
          ",moveX:",
          moveX,
          ",moveY:",
          moveY,
          ",numberActiveTouches:",
          numberActiveTouches,
          ",stateID:",
          stateID,
          ",vx:",
          vx,
          ",vy:",
          vy,
          ",x0:",
          x0,
          ",y0:",
          y0
        );
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        const {
          dx,
          dy,
          moveX,
          moveY,
          numberActiveTouches,
          stateID,
          vx,
          vy,
          x0,
          y0
        } = gestureState;
        console.log(
          "onPanResponderGrant:",
          evt,
          "||",
          "dx:",
          dx,
          ",dy:",
          dy,
          ",moveX:",
          moveX,
          ",moveY:",
          moveY,
          ",numberActiveTouches:",
          numberActiveTouches,
          ",stateID:",
          stateID,
          ",vx:",
          vx,
          ",vy:",
          vy,
          ",x0:",
          x0,
          ",y0:",
          y0
        );
        return true;
      }
    });
  }

  render() {
    return (
      <View {...this._panResponder.panHandlers} style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  }
});
