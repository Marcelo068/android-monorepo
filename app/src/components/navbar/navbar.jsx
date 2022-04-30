import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

/* COMPONENTS */
import Login from '../../pages/login'
import Home from '../../pages/home'

const NavBar = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerStyle={{
          backgroundColor: "#313131",
          paddingVertical: 20
        }}
        screenOptions={{
          activeBackgroundColor: "#fff",
          inactiveTintColor: "#fff"
        }}>
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default NavBar