import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutChickenFarm: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Our Chicken Farm</Text>
      <Text style={styles.description}>
        Welcome to our chicken farm! We are dedicated to raising healthy and
        happy chickens. Our farm provides a natural and sustainable environment
        for our chickens to thrive. We believe in ethical farming practices and
        ensure that our chickens are well-cared for. Thank you for supporting
        our farm!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default AboutChickenFarm;
