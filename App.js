import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import Splash from "./Screens/Splash";
import Home from "./Screens/Home";

const MyStack =()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}

const App =()=>{
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App ;