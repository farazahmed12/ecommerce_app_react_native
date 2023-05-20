import {View, Text, StyleSheet, StatusBar, Switch} from 'react-native';
import {useColorScheme} from 'nativewind';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from './store/productsSlice.js';
import { Provider } from "react-redux";
import store from './store/store.js';

import ProductsList from './components/ProductsList.js';

const App = () => {
    
  const {colorScheme, toggleColorScheme} = useColorScheme();

  
  return (
    <View className="flex-1 bg-gray-200 dark:bg-black">
        <Switch value={colorScheme === 'dark' } onChange={toggleColorScheme} />
      <Text className="text-red-300 text-4xl">App</Text>

      <ProductsList />
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