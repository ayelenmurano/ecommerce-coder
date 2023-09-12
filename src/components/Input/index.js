import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

const Input = ({ onChangeText, value }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder="Search product..."
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

export default Input;
