import React from "react";
import { FlatList, Text, View } from "react-native";
import { categories } from "../../data/categories";
import { CategoryItem } from "../CategoryItem";
import { styles } from "./styles";

const Categories = ({setCategory}) => {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Categorías</Text>
      </View>

      <View style={styles.list}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CategoryItem name={item.name} setCategory={setCategory} />}
        />
      </View>
    </View>
  );
};

export default Categories;
