import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { DayList } from "../../components/DayList";
import { styles } from "./styles";

export default function Calendar({ navigation, route }) {
  const category = useSelector((state) => state.ui.selectedCategory);
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.title}> Calendar </Text>
      <FlatList
        style={styles.flatList}
        data={[{ day: "09" }, { day: "10" }, { day: "11" }, { day: "12" }]}
        keyExtractor={(item) => item.day}
        horizontal
        renderItem={({ item }) => (
          <DayList day={item.day} category={category} navigation={navigation} />
        )}
      />
    </View>
    // </SafeAreaView>
  );
}
