import React from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

function GoalItem(props) {
  return (
    
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#210644" }}
          onPress={props.onDeleteHandler.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 2,
    borderRadius: 3,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    font: "white",
    fontSize:20,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
