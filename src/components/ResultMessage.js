import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function ResultMessage({ message }) {
  if (!message) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#eef",
    borderRadius: 5,
  },
  text: { fontSize: 16 },
});
