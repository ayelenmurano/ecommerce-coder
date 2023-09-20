import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity } from "react-native";
import CalendarStackNavigator from "./CalendarStackNavigator";
import ClassesStackNavigator from "./ClassesStackNavigator";
import HomeStackNavigator from "./HomeStackNavigator";
import { styles } from "./styles";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const getIcon = (name) => {
  switch (name) {
    case "HomeTab":
      return "home";
    case "ClassesTab":
      return "app-registration";
    case "CalendarTab":
      return "fitness-center";
    default:
      return "home";
  }
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialIcons name={getIcon(route.name)} size={30} color={color} />
        ),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        title: "",
        headerLeft: () => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={styles.headerItems}
          >
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={styles.headerItems}
          >
            <Text>AyeFit</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen name="CalendarTab" component={CalendarStackNavigator} />
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="ClassesTab" component={ClassesStackNavigator} />
    </Tab.Navigator>
  );
}
