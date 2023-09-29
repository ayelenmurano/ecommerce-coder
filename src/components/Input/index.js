import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

const Input = ({ onChangeText, value, name }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={name}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

export default Input;
