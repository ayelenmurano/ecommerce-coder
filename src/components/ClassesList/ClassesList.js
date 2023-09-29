import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useGetClassesQuery } from "../../services/dataApi";
import { ClassItem } from "../ClassItem";
import { styles } from "./styles";

const ClassesList = ({ navigation }) => {
  const { data, isLoading, error } = useGetClassesQuery();
  const renderList = () => {
    if (isLoading) return <ActivityIndicator size="large" />;
    if (!error)
      return (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item: { name, image } }) => (
            <ClassItem
              name={name}
              key={name}
              image={image}
              navigation={navigation}
            />
          )}
        />
      );
    return null;
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Clases</Text>
      </View>

      <View style={styles.list}>{renderList()}</View>
    </View>
  );
};

export default ClassesList;
