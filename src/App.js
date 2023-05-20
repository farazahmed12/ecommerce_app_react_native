import {View, Text, StyleSheet, StatusBar, Switch} from 'react-native';
import {useColorScheme} from 'nativewind';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchproducts} from './store/productsSlice.js';
import {Provider} from 'react-redux';
import store from './store/store.js';
import Toast from 'react-native-toast-message';

import ProductsList from './components/ProductsList.js';

const App = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <View className="flex-1 bg-gray-200 dark:bg-black">
      <View className='flex-row justify-between'>
        <Text className="text-gray-700 text-2xl font-bold ml-2 dark:text-white/70">ShopStop</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>

      <ProductsList />
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
