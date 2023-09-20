import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "../screens/Calendar";
import Classes from "../screens/Classes";
import Home from "../screens/Home";
import MyClasses from "../screens/MyClasses";
import Packages from "../screens/Packages";

// const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Calendar" component={Calendar} />
      <HomeStack.Screen name="Classes" component={Classes} />
      <HomeStack.Screen name="MyClasses" component={MyClasses} />
      <HomeStack.Screen name="Packages" component={Packages} />
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
