import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function MyClasses({ navigation, route }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Text> Clases </Text> */}
      </View>
    </SafeAreaView>
  );
}
