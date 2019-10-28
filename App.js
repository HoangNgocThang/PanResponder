import React, { Fragment, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  TextInput,
  InputAccessoryView,
  Button
} from "react-native";
import ExampleComponent from "./src/ExampleComponent";

const App = () => {
  const inputAccessoryViewID = "uniqueID";
  const [text, setText] = useState("");

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ExampleComponent />
        <TextInput
          style={{
            padding: 10,
            paddingTop: 50
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={text => setText(text)}
          value={text}
        />
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button onPress={() => setText("aaaa")} title="Reset Text" />
        </InputAccessoryView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
