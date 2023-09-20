import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Header = ({  }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuIcon}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.brand}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <Text>AyeFit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
