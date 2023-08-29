import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons'; 

import { styles } from "./styles";

export function Home() {
  return (
    <View style={{flex: 1, backgroundColor: "#EBEBEB"}}>
      {/* HEADER */}
      <View style={styles.Header}>
        <View style={styles.Container}>
          <View style={styles.ContainerImage}>

            <Image
              source={require("../../assets/to.do.png")}
              style={styles.Logo}
            />
          </View>

            <View>
              <Text style={styles.HighLight}>
                Você tem
                <Text style={styles.HighLightBold}> 3 tarefas</Text>
              </Text>
            </View>
        </View>
      </View>
      
      {/* MAIN */}

      <View style={styles.Main}>
        {/* INPUT */}
        <View style={styles.ContainerInput}>
          <TextInput
            placeholder="Adicione uma tarefa"
            style={styles.WriteTasks}
          />
          <TouchableOpacity style={styles.ButtonRight}>
            <AntDesign name="right" size={15} color="#B2B2B2"/>
          </TouchableOpacity>
        </View>
        {/* TASKS */}
      </View>
    </View>
  )
}