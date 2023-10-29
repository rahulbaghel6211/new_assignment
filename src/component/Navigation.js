import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../Screen/LoginScreen";
import ReporterTicketScreen from "../Screen/ReporterTicketScreen";
import AdminScreen from "../Screen/AdminScreen";
import ReportScreen from "../Screen/RepoterScreen";
import UserScreen from "../Screen/UserScreen";
import TicketScreen from "../Screen/TicketScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reporter Ticket"
          component={ReporterTicketScreen}
        />
        <Stack.Screen
          name="Admin"
          component={AdminScreen}
        />
        <Stack.Screen
          name="Reporter"
          component={ReportScreen}
        />
         <Stack.Screen
          name="User"
          component={UserScreen}
        />
          <Stack.Screen
          name="Ticket"
          component={TicketScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
