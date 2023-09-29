import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import MainNav from "./src/Navigator/MainNav";
import { store } from "./src/redux/store";
import { fonts } from "./src/utils/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (fontsLoaded === false) {
    return;
  }

  return (
    <Provider store={store}>
      {/* <SafeAreaView> */}
      <MainNav />
      {/* </SafeAreaView> */}
    </Provider>
  );
}

const styles = StyleSheet.create({});
