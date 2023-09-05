import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ListElem = ({ name, id, deleteProduct }) => {
  return (
    <View styles={styles.listContainer}>
      <Text styles={styles.text}>{name}</Text>

      <View styles={styles.icon}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            deleteProduct(id);
          }}
        >
          <FontAwesome name="trash-o" size={24} color="#9b9b9b" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListElem;
