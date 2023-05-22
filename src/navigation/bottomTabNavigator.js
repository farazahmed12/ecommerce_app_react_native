import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// screens
import ProductsList from '../screens/ProductsList';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (

      <Tab.Navigator initialRouteName={'Products'}>
        <Tab.Screen options={{headerShown: false}} name="Products" component={ProductsList} />
      </Tab.Navigator>
   
  );
};

export default BottomTabNavigator;
