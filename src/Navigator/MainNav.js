import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNav from "./AuthNav";
import DrawerNavigator from "./DrawerNavigator";

const MainNav = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;
