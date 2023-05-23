import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import React from 'react';
import {useColorScheme} from 'nativewind';
import CartItemCard from '../components/CartItemCard';

const Home = ({navigation}) => {
  // redux
  const cart = useSelector(state => state.cart);
  console.log('cart ===>', cart);

  const {colorScheme} = useColorScheme();
  return (
    <View>
      <View className='bg-[#36454F] py-5 '>
        <Text className='text-white text-center font-semibold text-2xl uppercase'>Your shopping cart</Text>
      </View>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CartItemCard {...item} />}
      />
      <View className='flex-row justify-end my-2'>
        <TouchableOpacity className='border p-2 mr-4 rounded dark:bg-[#36454F]' onPress={() => navigation.navigate('Checkout')}>
          <Text className='uppercase font-bold dark:text-white dark:border-white '>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
