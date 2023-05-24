import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useColorScheme} from 'nativewind';

const WishList = () => {
  // theme color
  const {colorScheme} = useColorScheme();
  // state
  const wishlistItems = useSelector(state => state.wishlist);
  console.log('wish ===>', wishlistItems);
  return (
    <View>
      <Text>WishList</Text>
      <FlatList
        data={wishlistItems}
        renderItem={({item}) => {
          return (
            <View className="bg-white dark:bg-[#36454F] rounded-3xl w-full my-5 p-5">
              <Text className="dark:text-white">{item.title}</Text>
              <Text className="dark:text-white">{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default WishList;
