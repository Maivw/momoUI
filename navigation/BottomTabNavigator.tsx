import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Foundation, Octicons,Entypo  } from '@expo/vector-icons'; 
import * as React from 'react';
import {styles} from "./BottomTabstyles";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ labelStyle: {fontSize: 13, fontFamily: 'Roboto_500Medium', lineHeight: 
      15.23}, activeTintColor: '#5171BD', inactiveTintColor: '#D5E0E8', tabStyle :{backgroundColor: '#fff', height: 56, width: 375,   shadowOffset: { width: -2, height: 4},
      shadowColor: 'rgba(80, 117, 173, 0.05)',
      shadowOpacity: 0.5,
      shadowRadius: 0}
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Analysis"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Analysis',
          tabBarIcon: ({ color }) => <Foundation name="graph-pie" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Utility"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Utility',
          tabBarIcon: ({ color }) => <Octicons name="tools" size={24} color={color} /> ,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => <Entypo name="user" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
