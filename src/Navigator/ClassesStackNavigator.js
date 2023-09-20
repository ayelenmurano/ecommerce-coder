import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "../screens/Calendar";
import Classes from "../screens/Classes";
import MyClasses from "../screens/MyClasses";
import Packages from "../screens/Packages";

// const Stack = createNativeStackNavigator();
const ClassesStack = createNativeStackNavigator();

export default function ClassesStackNavigator() {
  return (
    <ClassesStack.Navigator
      initialRouteName="Classes"
      screenOptions={{ headerShown: false }}
    >
      <ClassesStack.Screen name="Calendar" component={Calendar} />
      <ClassesStack.Screen name="Classes" component={Classes} />
      <ClassesStack.Screen name="MyClasses" component={MyClasses} />
      <ClassesStack.Screen name="Packages" component={Packages} />
    </ClassesStack.Navigator>
  );
}
