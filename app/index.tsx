import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import ButtonTemplate from "../components/button_template";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Howdi! Welcome to my farm</Text>
      <ButtonTemplate link={"/about"} text={"Go About"} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
