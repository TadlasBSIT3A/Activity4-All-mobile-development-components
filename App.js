import { View, Text } from "react-native";
import React from "react";
import Others from "./screen/Others";
import Menu from "./screen/Menu";
import About from "./screen/About";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { PaperProvider } from "react-native-paper";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
      <Tab.Navigator>
        <Tab.Screen name="Components Content" component={About}  options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Google Map" component={Menu} options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color, size }) => (
              <Icon name="map" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="Profile" component={Others} options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}/>
      </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};