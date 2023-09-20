import { FlatList, Text, View } from "react-native";
import { DayList } from "../../components/DayList";
import { styles } from "./styles";

export default function Calendar({ navigation, route }) {
  const category = route ? route.params?.category : undefined;
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text> Calendar </Text>
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
