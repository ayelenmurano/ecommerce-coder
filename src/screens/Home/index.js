import { View } from "react-native";
import { List } from "../../components/List";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
}