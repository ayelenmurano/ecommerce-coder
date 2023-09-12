import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const CategoryItem = ({ name, setCategory }) => {
  const searchCategory = () => {
    console.log('la categoria ', name)
    setCategory(name);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          searchCategory();
        }}
        style={styles.textContainer}
      >
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
