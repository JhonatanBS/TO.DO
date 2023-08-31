import { TouchableOpacity, View, Text} from "react-native";

import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { styles } from "./styles";
import { ITodo } from "../../screens/Home";

import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  todo: ITodo,
  alterDone(todo: ITodo): void;
  removeTodo(id: string | number[]): void;
}

export function Todo({ todo, alterDone, removeTodo }: Props) {
  
  return(
      <LinearGradient colors={ todo.gradient ? ["#FFFFFF", "#FFFFFF"]: ["#E1E1E1", "#EBEBEB"]} start={{x: 0, y:1}} end={{x: 1, y: 2}} style={styles.Container}>
    
      { todo.done
        ?
        <>
          <TouchableOpacity style={styles.isDone} onPress={() => alterDone(todo)}>
            <FontAwesome 
              name="check" 
              size={12} 
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <Text style={styles.TextTaskDone}>
          {todo.title}
          </Text>
        </>
        :
        <>
          <TouchableOpacity 
            style={styles.isNotDone}
            onPress={() => alterDone(todo)}
            >
          </TouchableOpacity>
          <Text style={styles.TextTaskIsNotDone}>
          {todo.title}
          </Text>
        </>
      }

      <TouchableOpacity onPress={() => removeTodo(todo.id)}>
        <MaterialCommunityIcons 
          name="trash-can-outline" 
          size={25} 
          color="#B2B2B2"
        />
      </TouchableOpacity>
    
      </LinearGradient>
  )
}