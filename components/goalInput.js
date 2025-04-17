import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(e) {
    setEnteredGoalText(e);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);

    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={() => {
                addGoalHandler();
              }}
            />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={props.changeState} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderBottomWidth: 1,
    backgroundColor: "purple",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 6,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 70,
    height: 80,
    margin: 20,
  },
});
