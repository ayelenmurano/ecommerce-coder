import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Header = ({ activeSearch, handleSearchBox, switchPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.leftHeader}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              switchPage("home");
            }}
          >
            <Entypo name="home" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              handleSearchBox();
            }}
          >
            {activeSearch ? (
              <AntDesign name="close" size={24} color="white" />
            ) : (
              <Feather name="search" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
