import React, { Fragment, useState } from "react";
import { SafeAreaView, StatusBar, ScrollView, Text, View } from "react-native";
import ExampleComponent from "./src/ExampleComponent";

const App = () => {
  const inputAccessoryViewID = "uniqueID";
  const [text, setText] = useState("");
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
      <SafeAreaView>
        <ScrollView
          onScrollEndDrag={_onScrollEndDrag}
          onScrollBeginDrag={_onScrollBeginDrag}
        >
          <View
            style={{ width: "100%", height: 2000, backgroundColor: "green" }}
          >
            <Text>1</Text>
          </View>
        </ScrollView>
        {show ? <ExampleComponent /> : null}
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
