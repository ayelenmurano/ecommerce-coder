import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../features/ui";
import { styles } from "./styles";

const ClassItem = ({ name, navigation }) => {
  const pathImage = "../../../assets/images/zumba.jpg";
  const dispatch = useDispatch();

  // const
  const getImage = () => {
    switch (name) {
      case "meditacion":
        return require("../../../assets/images/meditacion.jpg");
      case "funcional":
        return require("../../../assets/images/funcional.jpg");
      case "crossfit":
        return require("../../../assets/images/crossfit.jpg");
      case "yoga":
        return require("../../../assets/images/yoga.jpg");
      case "zumba":
        return require("../../../assets/images/zumba.jpg");
      default:
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          dispatch(setSelectedCategory(name));
          navigation.navigate("Calendar");
        }}
        style={styles.buttonContainer}
      >
        <ImageBackground
          source={getImage()}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default ClassItem;
