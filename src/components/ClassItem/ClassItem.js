import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ClassItem = ({ name, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Calendar", { category: name });
        }}
        style={styles.textContainer}
      >
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClassItem;
