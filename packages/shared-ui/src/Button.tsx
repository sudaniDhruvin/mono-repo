import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: any;
}

export const Button = ({ title, onPress, style }: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => {
      // onPress?.();
    }}
    activeOpacity={0.8}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
