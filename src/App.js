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
import {useDispatch, useSelector} from 'react-redux';
import {fetchproducts} from './store/productsSlice.js';
import {Provider} from 'react-redux';
import store from './store/store.js';
import Toast from 'react-native-toast-message';

import BottomTabNavigator from './navigation/bottomTabNavigator.js';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsList from './screens/ProductsList.js';

import Home from './screens/Home.js';

const Stack = createNativeStackNavigator();

const App = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 bg-gray-200 dark:bg-black">
      {/* Modal */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} className='absolute bottom-0 w-full p-4 bg-red-300 h-3/4'>
          <View>
            <Text>Hello World!</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
      <View className="flex-row justify-between">
        <Text className="text-gray-700 text-2xl font-bold ml-2 dark:text-white/70">
          ShopStop
        </Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
        <Pressable onPress={() => setModalVisible(true)}>
          <Text>Show Modal</Text>
        </Pressable>
      </View>
      <NavigationContainer>

        <Stack.Navigator initialRouteName={'products'}>
          <Stack.Screen options={{headerShown: false}} name="home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="products" component={BottomTabNavigator} />
          
          
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
