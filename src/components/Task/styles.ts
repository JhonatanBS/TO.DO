import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    height: 48,
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  isNotDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderColor: "#B2B2B2",
    borderWidth: 1.5,
    marginRight: 15
  },
  isDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: "#1DB863",
    marginRight: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  TextTask: {
    color: "#666666",
    fontSize: 14,
    width: 295,
   
  }
});