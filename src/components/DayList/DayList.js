import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useGetCalendarQuery } from "../../services/dataApi";
import { DayItem } from "../DayItem";
import { styles } from "./styles";

const DayList = ({ navigation, category, day }) => {
  const { data, isLoading, error } = useGetCalendarQuery();

  const renderList = () => {
    if (isLoading) return <ActivityIndicator size="large" />;
    if (!error && data)
      return (
        <FlatList
          data={data.filter(({ date, category: currentCategory }) => {
            return (
              date.slice(8, 10) === day.toString() &&
              (category ? category === currentCategory : true)
            );
          })}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DayItem
              category={item.category}
              time={item.time}
              places={item.places}
              navigation={navigation}
            />
          )}
        />
      );
    return null;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.day}>Día: {day}</Text>
      <View style={styles.list}>{renderList()}</View>
    </View>
  );
};

export default DayList;
