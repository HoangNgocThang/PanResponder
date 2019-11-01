import { View, Text, PanResponder } from "react-native";
import React, { useEffect } from "react";

const ExampleComponent = () => {
  useEffect(() => {
    const pan = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    });
    return () => {};
  }, []);

  const _onPanResponderMove = (a, b) => {
    console.log(a, b);
  };

  return (
    <View
      style={{
        width: "100%",
        height: 100,
        backgroundColor: "red",
        position: "absolute",
        bottom: 0,
        left: 0
      }}
      onPanResponderMove={_onPanResponderMove}
    >
      <Text>aaa</Text>
    </View>
  );
};

export default ExampleComponent;
