import { View, Image, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { AntDesign, Entypo } from '@expo/vector-icons';

import { styles } from "./styles";
import { Todo } from "../../components/Todo";
import { useState } from "react";

import uuid from "react-native-uuid";

import LogoSVG from "../../assets/to.doHome.svg";

export interface ITodo {
  id: string | number[];
  done: boolean,
  title: string,
  gradient?: boolean,
}

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<ITodo[]>([]);

  function handleNewTask() {
    if (newTask.trim().length === 0) {
      return Alert.alert("Todo Vazio!", "Você não pode adicionar um todo vazio!");
    }

    if (handleNotEqualsTasks(newTask)) {
      setNewTask("");
      return Alert.alert("Task já existe");
    }

    if (tasks.length % 2 !== 0) {
      const task: ITodo = {
        id: uuid.v4(),
        done: false,
        title: newTask,
        gradient: false
      }

      setTasks([...tasks, task]);
    } else {
      const task: ITodo = {
        id: uuid.v4(),
        done: false,
        title: newTask,
        gradient: true
      }

      setTasks([...tasks, task]);
    }

    setNewTask("");
  }

  function handleNotEqualsTasks(verifyTask: string) {
    const taskAlreadyExists = tasks.some((task) => task.title === verifyTask);

    return taskAlreadyExists;
  }

  function handleTaskIsDone(ITodo: ITodo) {
    const alterTodo = tasks.map((todo) => {
      if (todo.id === ITodo.id) todo.done = !todo.done

      return todo;
    });

    setTasks(alterTodo);
  }

  function handleRemoveTodo(id: string) {
    const removeTodo = tasks.filter((todo) => todo.id !== id);

    setTasks(removeTodo);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#EBEBEB" }}>
      {/* HEADER */}
      <View style={styles.Header}>
        <View style={styles.Container}>
          <View style={styles.ContainerImage}>

            <LogoSVG width={64} height={26}/>
          </View>

          <View>
            <Text style={styles.HighLight}>
              Você tem
              <Text style={styles.HighLightBold}> {tasks.length} tarefas</Text>
            </Text>
          </View>
        </View>
        {/* INPUT */}
        <View style={styles.ContainerInput}>
          <TextInput
            placeholder="Adicione uma tarefa"
            style={styles.WriteTasks}
            onChangeText={setNewTask}
            value={newTask}
          />
          <TouchableOpacity style={styles.ButtonRight} onPress={handleNewTask}>
            <AntDesign name="right" size={15} color="#B2B2B2" />
          </TouchableOpacity>
        </View>
      </View>

      {/* MAIN */}
      <View style={styles.Main}>
        {/* TASKS */}
        <View style={styles.ContainerTasks}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Todo
                todo={item}
                alterDone={handleTaskIsDone}
                removeTodo={handleRemoveTodo}
              />
            )}
            keyExtractor={item => item.title}
            ListEmptyComponent={() => (
              <View style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#8257E5", fontWeight: "bold", marginBottom: 10 }}>Você não tem nenhuma tarefa!</Text>
                <Entypo name="emoji-sad" size={70} color="#8257E5" />
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}