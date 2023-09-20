import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { StyleSheet } from "react-native";
import TabNavigator from "./src/Navigator/TabNavigator";
import { fonts } from "./src/utils/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (fontsLoaded === false) {
    console.log('i am here')
    return;
  }

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
