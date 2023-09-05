import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "../../utils/colors";
import { styles } from "./styles";

const ListElem = ({ name, id, deleteProduct }) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>

      <View style={styles.icon}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            deleteProduct(id);
          }}
        >
          <FontAwesome name="trash-o" size={24} color={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListElem;
