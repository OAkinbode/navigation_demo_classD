import React from "react";
import { Text, View } from "react-native";
import ButtonTemplate from "../../components/button_template";

const TabsScreen = () => {
  return (
    <View>
      <Text>Welcome to Tabs. Calgary is the best</Text>
      <ButtonTemplate link={"../"} text={"Go Home"} color="red" />
    </View>
  );
};

export default TabsScreen;
