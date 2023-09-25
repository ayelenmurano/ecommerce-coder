import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const DayItem = ({ category, time, places, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          // navigation.navigate("Calendar", { category: name });
        }}
        style={styles.textContainer}
      >
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.time}>Hora: {time}</Text>
        <Text style={styles.places}>Lugares disponibles: {places}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DayItem;
