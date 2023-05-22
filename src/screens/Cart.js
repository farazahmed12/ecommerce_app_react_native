import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import React from 'react';
import {useColorScheme} from 'nativewind';
import CartItemCard from '../components/CartItemCard';

const Home = () => {
  // redux
  const cart = useSelector(state => state.cart);
  console.log('cart ===>', cart);

  const {colorScheme} = useColorScheme();
  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CartItemCard {...item} />}
      />
    </View>
  );
};

export default Home;
