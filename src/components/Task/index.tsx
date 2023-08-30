import { TouchableOpacity, View, Text} from "react-native";

import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { styles } from "./styles";

interface Props {
  done: boolean,
  text: string,
}

export function Task({ done, text }: Props) {
  return(
    <View style={styles.Container}>
      { done 
        ?
        <TouchableOpacity style={styles.isNotDone}>

        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.isDone}>
          <FontAwesome name="check" size={12} color="#FFFFFF" />
        </TouchableOpacity>
        }

      <Text style={styles.TextTask}>{text}</Text>

      <MaterialCommunityIcons name="trash-can-outline" size={25} color="#B2B2B2" />
    </View>
  )
}