import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="MyHome"
      screenOptions={{ headerShown: false }}
    >
      {/* <HomeStack.Screen name="Calendar" component={Calendar} />
      <HomeStack.Screen name="Classes" component={Classes} />
      <HomeStack.Screen name="MyClasses" component={MyClasses} />
      <HomeStack.Screen name="Packages" component={Packages} /> */}
      <HomeStack.Screen name="MyHome" component={Register} />
    </HomeStack.Navigator>
  );
}
