import React from "react";
import { FlatList, Text, View } from "react-native";
import { calendarData } from "../../data/calendarData";
import { DayItem } from "../DayItem";
import { styles } from "./styles";

const DayList = ({ navigation, category, day }) => {
  return (
    <View style={styles.container}>
      <Text>Día: {day}</Text>
      <View style={styles.list}>
        <FlatList
          data={calendarData.filter(({ date, category: currentCategory }) => {
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
      </View>
    </View>
  );
};

export default DayList;
