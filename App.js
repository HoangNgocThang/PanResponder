import React, { Fragment, useState } from "react";
import { SafeAreaView, StatusBar, ScrollView, Text, View } from "react-native";
import ExampleComponent from "./src/ExampleComponent";
import PanComponent from "./src/PanComponent";

const App = () => {
  const [show, setShow] = useState(true);

  const _onScrollEndDrag = () => {
    setShow(true);
  };

  const _onScrollBeginDrag = () => {
    setShow(false);
  };
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {/* <ScrollView
          onScrollEndDrag={_onScrollEndDrag}
          onScrollBeginDrag={_onScrollBeginDrag}
        >
          <View
            style={{ width: "100%", height: 2000, backgroundColor: "green" }}
          >
            <Text>1</Text>
          </View>
        </ScrollView>
        {show ? <ExampleComponent /> : null} */}
        {/* <ExampleComponent /> */}
        <PanComponent />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
