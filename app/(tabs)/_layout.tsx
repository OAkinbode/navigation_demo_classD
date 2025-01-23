import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarLabel: "Calgary", tabBarIcon: () => null }}
      />
      <Tabs.Screen
        name="edmonton"
        options={{ tabBarLabel: "Edmonton", tabBarIcon: () => null }}
      />
    </Tabs>
  );
}
