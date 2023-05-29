import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Switch,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import {useColorScheme} from 'nativewind';
import React, {useEffect, useState} from 'react';

import {Provider} from 'react-redux';
import store from './store/store.js';
import Toast from 'react-native-toast-message';

import BottomTabNavigator from './navigation/bottomTabNavigator.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// componenets
import ProductsList from './screens/ProductsList.js';

// screens
import Cart from './screens/Cart.js';
import Checkout from './screens/Checkout.js';
import Payment from './screens/Payment.js';
import PaymentSucess from './screens/PaymentSucess.js';
import SingleOrder from './screens/SingleOrder.js';
import WishList from './screens/WishList.js';
import TrackOrder from './screens/TrackOrder.js';
import Login from './screens/Login.js';

const Stack = createNativeStackNavigator();

const App = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="flex-1 bg-gray-200 dark:bg-black">
      <View className="flex-row justify-between">
        <Text className="text-gray-700 text-2xl font-bold ml-2 dark:text-white/70">
          ShopStop
        </Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'HomeProducts'}>
          <Stack.Screen
            options={{headerShown: false}}
            name="home"
            component={Cart}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="HomeProducts"
            component={BottomTabNavigator}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Checkout"
            component={Checkout}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Payment"
            component={Payment}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="PaymentSucess"
            component={PaymentSucess}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SingleOrder"
            component={SingleOrder}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="WishList"
            component={WishList}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="TrackOrder"
            component={TrackOrder}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </View>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
