import {StatusBar} from "react-native";
import { Home } from "./src/screens/Home";
import { OpenApplication } from "./src/screens/OpenApplication";

export default function App() {
  

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
