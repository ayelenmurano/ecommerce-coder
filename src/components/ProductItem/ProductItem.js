import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ name, price, brand, image }) => {
  const searchCategory = () => {};
  console.log("la image ", image);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          searchCategory();
        }}
        style={styles.itemContainer}
      >
        <View style={styles.leftBox}>
          <View style={styles.description}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.brand}>{brand}</Text>
          </View>

          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
