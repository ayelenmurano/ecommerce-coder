import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { ProductItem } from "../ProductItem";
import { styles } from "./styles";

const Products = ({ products, category, cleanCategory }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Productos</Text>
      </View>
      {category ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            cleanCategory();
          }}
          style={styles.selectedCategory}
        >
          <Text style={styles.title}>{category}</Text>
          <AntDesign name="close" size={15} color="white" />
        </TouchableOpacity>
      ) : null}

      <View style={styles.list}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { title, price, brand, images } }) => (
            <ProductItem
              name={title}
              price={price}
              brand={brand}
              image={images[0]}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Products;
