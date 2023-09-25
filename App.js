import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import TabNavigator from "./src/Navigator/TabNavigator";
import { store } from "./src/store";
import { fonts } from "./src/utils/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  
  if (fontsLoaded === false) {
    return;
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
