import React from "react";
import { View } from "react-native";
import { Button } from "../Button";
import Input from "../Input";
import { styles } from "./styles";

const SearchBox = ({ input, setInput, searchProduct }) => {

  return (
    <View style={styles.container}>
      <Input onChangeText={setInput} value={input} />
      <Button onPress={searchProduct} />
    </View>
  );
};

export default SearchBox;
