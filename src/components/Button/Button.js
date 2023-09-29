import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Button = ({ onPress, label }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
