import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Header: {
    height: 150,
    width: "100%",
    backgroundColor: "#8257E5",
    paddingLeft: 24,
    paddingRight: 24,
    
  },
  Container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
  ContainerImage: {
    height: 26,
    width: 64,
  },
  Logo: {
    height: "100%",
    width: "100%",
  },
  HighLight: {
    color: "#FFFFFF"
  },
  HighLightBold: {
    fontWeight: "bold"
  }
});