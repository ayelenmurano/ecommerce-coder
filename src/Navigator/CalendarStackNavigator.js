import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "../screens/Calendar";
import Classes from "../screens/Classes";
import MyClasses from "../screens/MyClasses";
import Packages from "../screens/Packages";

// const Stack = createNativeStackNavigator();
const CalendarStack = createNativeStackNavigator();

export default function CalendarStackNavigator() {
  return (
    <CalendarStack.Navigator screenOptions={{ headerShown: false }}>
      <CalendarStack.Screen name="Calendar" component={Calendar} />
      <CalendarStack.Screen name="Classes" component={Classes} />
      <CalendarStack.Screen name="MyClasses" component={MyClasses} />
      <CalendarStack.Screen name="Packages" component={Packages} />
    </CalendarStack.Navigator>
  );
}
