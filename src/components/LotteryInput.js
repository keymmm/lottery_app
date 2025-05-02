import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LotteryInput({
  guess,
  setGuess,
  bet,
  setBet,
  onPlaceBet,
}) {
  const onChangeGuess = (text) => {
    setGuess(text);
  };

  const onChangeBet = (text) => {
    setBet(text);
  };

  return (
    <View>
      <Text style={styles.label}>3-digit Number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={3}
        value={guess}
        onChangeText={onChangeGuess}
        placeholder="please input 3-digit number"
        placeholderTextColor="#999"
      />
      <Text style={styles.label}>Bet Amount (₱):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={bet}
        onChangeText={onChangeBet}
        placeholder="Bet amount"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={onPlaceBet}>
        <Text style={styles.buttonText}>Place Bet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    color: "#333",
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
