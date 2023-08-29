import { View, Image, Text } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={{flex: 1}}>
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

    </View>
  )
}