import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, Alert } from "react-native";
import LotteryInput from "./src/components/LotteryInput";
import ResultMessage from "./src/components/ResultMessage";
import ConfettiCannon from "react-native-confetti-cannon";

export default function App() {
  const [guess, setGuess] = useState("");
  const [bet, setBet] = useState("");
  const [result, setResult] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const placeBet = () => {
    if (!guess || guess.length !== 3 || isNaN(guess)) {
      Alert.alert("Error", "Please enter a valid 3-digit number.");
      return;
    }
    if (!bet || Number(bet) <= 0) {
      Alert.alert("Error", "Please enter a valid bet amount.");
      return;
    }
    const winningNumber = Math.floor(Math.random() * 900) + 100;
    // const winningNumber = 199;

    const won = Number(guess) === winningNumber;
    const message = won
      ? `🎉 You won! Winning number: ${winningNumber}. You win ₱${
          Number(bet) * 100
        }`
      : `😞 You lost. Winning number: ${winningNumber}`;
    if (won) {
      setShowConfetti(true);
    }
    setResult(message);
    setGuess("");
    setBet("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          fadeOut={true}
          autoStart={true}
          explosionSpeed={500}
        />
      )}
      <ResultMessage message={result} />
      <Text style={styles.title}> Lottery App</Text>
      <LotteryInput
        guess={guess}
        setGuess={setGuess}
        bet={bet}
        setBet={setBet}
        onPlaceBet={placeBet}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
