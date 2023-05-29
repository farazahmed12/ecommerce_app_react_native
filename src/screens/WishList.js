import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useColorScheme} from 'nativewind';
import {removeWishList} from '../store/WishListSlice';

const WishList = ({navigation}) => {
  // theme color
  const {colorScheme} = useColorScheme();
  // state
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist);
  console.log('wish ===>', wishlistItems);

  // handle Delete Item
  const handleDeleteItem = id => {
    dispatch(removeWishList(id));
  };

  return (
    <SafeAreaView className=" dark:bg-[#36454F] flex-1">
      <View className="bg-[#36454F] py-5 flex-row">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            className="w-4 h-4 ml-3 mt-2"
            source={require('../assets/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text className="text-white text-center font-semibold text-2xl uppercase	ml-5">
          My WishList
        </Text>
      </View>
      <FlatList
        data={wishlistItems}
        renderItem={({item}) => {
          return (
            <View className="bg-white dark:bg-[#1e2c36] rounded-3xl w-full my-5 p-6">
              <View className="flex-row justify-between items-center">
                <Image
                  source={{uri: item.image}}
                  className="w-20 h-20 rounded-lg"
                />
                <View className=" space-y-6  w-3/6">
                  <Text className="dark:text-white w-full">{item.title}</Text>
                  <Text className="dark:text-white  font-bold">
                    $ {item.price}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                  <Image
                    source={require('../assets/bin.png')}
                    className="w-6 h-6"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default WishList;
