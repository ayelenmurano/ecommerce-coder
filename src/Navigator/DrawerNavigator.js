import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Profiler } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MyClasses from "../screens/MyClasses";
import Packages from "../screens/Packages";
import TabNavigator from "./TabNavigator";
import { styles } from "./styles";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("HomeTab")}
      />
      <DrawerItem
        name="CalendarTab"
        label="Calendario"
        onPress={() => props.navigation.navigate("CalendarTab")}
      />
      <DrawerItem
        label="Clases"
        onPress={() => props.navigation.navigate("ClassesTab")}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      // initialRouteName={"App"}
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={styles.headerItems}
          >
            <Text>AyeFit</Text>
          </TouchableOpacity>
        ),
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="App" component={TabNavigator} />
      <Drawer.Screen name="MyClasses" component={MyClasses} />
      <Drawer.Screen name="Packages" component={Packages} />
      <Drawer.Screen name="Profile" component={Profiler} />
    </Drawer.Navigator>
  );
}
