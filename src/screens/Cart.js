import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import React from 'react';
import {useColorScheme} from 'nativewind';
import CartItemCard from '../components/CartItemCard';

const Home = ({navigation}) => {
  // redux
  const cart = useSelector(state => state.cart);
  //  console.log('cart ===>', cart);
  const user = useSelector(state => state);

  console.log('PROD ===> ', user);

  const {colorScheme} = useColorScheme();
  return (
    <View className="flex-1 bg-white">
      <View className="bg-[#36454F] py-5 ">
        <Text className="text-white text-center font-semibold text-2xl uppercase">
          Your shopping cart
        </Text>
      </View>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CartItemCard {...item} />}
      />
      {cart.length > 0 ? (
        <View className=" my-2">
          <TouchableOpacity
            activeOpacity={0.7}
            className="rounded border bg-black py-3 mx-3 mt-14"
            onPress={() => navigation.navigate('Checkout')}>
            <Text className="font-bold uppercase text-center text-white ">
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="absolute top-32 left-6 m-3">
          <Text className="text-black text-md mx-3">Your Cart is Empty</Text>
          <TouchableOpacity
            className="rounded border bg-black py-3 mx-3 mt-7 w-full"
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Products')}>
            <Text className="font-bold uppercase text-center text-white">
              Back to shopping
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Home;
