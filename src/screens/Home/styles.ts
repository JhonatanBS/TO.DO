import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Home: {
    flex: 1, 
    backgroundColor: "#EBEBEB",
  },
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
    alignItems: "flex-end",
    width: "100%",
    height: 100,
    marginBottom: 10
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
  },
  Main: {
    flex: 1,
    marginTop: 60
  },
  ContainerInput: {
    height: 56,
    width: "100%",
    backgroundColor: "#FFFFFF",
    position: "relative",
    top: 28,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row"
  },
  WriteTasks: {
    flex: 1,
    padding: 20,
    color: "#666666"
  },
  ButtonRight: {
    height: 55,
    width: 55,
    borderLeftWidth: 1,
    borderLeftColor: "#EBEBEB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  ContainerTasks: {
    flex: 1,
  }
});