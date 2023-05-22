import React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// screens
import ProductsList from '../screens/ProductsList';
import Cart from '../screens/Cart';
Image;
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const cart = useSelector(state => state.cart);
  const cartItems = cart.length
  return (
    <Tab.Navigator initialRouteName={'Products'}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/product-range.png')}
              className="h-6 w-6"
            />
          ),
          tabBarLabelStyle: {
            color: '#36454F',
            fontWeight: 'bold',
          },
        }}
        name="Products"
        component={ProductsList}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/shopping-cart.png')}
              className="h-6 w-6"
            />
          ),
          tabBarLabelStyle: {
            color: '#36454F',
            fontWeight: 'bold',
          },
          tabBarBadge: cartItems,
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
