import { FlatList, Button, StyleSheet, View } from "react-native";
import GoalInput from "./components/goalInput";
import { useState } from "react";
import GoalItem from "./components/goalItem";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  let index = 0;
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  function addGoalHandler(enteredGoalText) {
    setModalIsVisible(!modalIsVisible);
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      {
        text: enteredGoalText,
        id: Date.now().toString() + Math.random().toString(),
      },
    ]); //recommended way arrow function
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View style={styles.modalButton}>
          <Button
            title="Add new goal"
            color="blue"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          isVisible={modalIsVisible}
          changeState={() => setModalIsVisible(!modalIsVisible)}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteHandler={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "purple",
    flexDirection: "column",
    paddingTop: 40,
    padding: 20,
    flex: 1,
  },

  goalsContainer: {
    flex: 4,
  },
  modalButton:{
    paddingTop:10,
    
  }
});
