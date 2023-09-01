import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import LogoSVG from "../../assets/to.do.svg";

export function OpenApplication() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogoandText}>
        <View style={styles.containerLogo}>
          <LogoSVG width={160} height={44}/>
        </View>
        <Text style={styles.title}> Seu aplicativo favorito de afarezes </Text>
      </View>

    </View>
  )
}