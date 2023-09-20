import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Home({ navigation }) {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/logo.png")}
      />
      <Text style={styles.title}>Bienvenido al club</Text>
    </View>
    // </SafeAreaView>
  );
}
