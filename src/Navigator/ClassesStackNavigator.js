import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Classes from "../screens/Classes";

// const Stack = createNativeStackNavigator();
const ClassesStack = createNativeStackNavigator();

export default function ClassesStackNavigator() {
  return (
    <ClassesStack.Navigator
      initialRouteName="Classes"
      screenOptions={{ headerShown: false }}
    >
      {/* <ClassesStack.Screen name="Calendar" component={Calendar} /> */}
      <ClassesStack.Screen name="Classes" component={Classes} />
      {/* <ClassesStack.Screen name="MyClasses" component={MyClasses} />
      <ClassesStack.Screen name="Packages" component={Packages} /> */}
    </ClassesStack.Navigator>
  );
}
