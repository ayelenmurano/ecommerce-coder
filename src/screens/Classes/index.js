import { View } from "react-native";
import { ClassesList } from "../../components/ClassesList";
import { styles } from "./styles";

export default function Classes({ navigation, route }) {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <ClassesList navigation={navigation} />
      {/* <Text>Hola</Text> */}
    </View>
    // </SafeAreaView>
  );
}
