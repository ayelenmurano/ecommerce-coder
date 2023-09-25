import React from "react";
import { FlatList, Text, View } from "react-native";
import { classes } from "../../data/classes";
import { ClassItem } from "../ClassItem";
import { styles } from "./styles";

const ClassesList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Clases</Text>
      </View>

      <View style={styles.list}>
        <FlatList
          data={classes}
          keyExtractor={(item) => item.id}
          renderItem={({
            item: {
              name: { name, image },
            },
          }) => <ClassItem name={name} image={image} navigation={navigation} />}
        />
      </View>
    </View>
  );
};

export default ClassesList;
