import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColorScheme} from 'nativewind';
import {useDispatch, useSelector} from 'react-redux';
import {remove} from '../store/cartSlice';

const CartItemCard = ({title, image, price, id, category, quantity}) => {
  const {colorScheme} = useColorScheme();
  // redux
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remove(id));
  };
  return (
    <View className="flex-col bg-white dark:bg-[#36454F] rounded-lg my-4 mx-2 py-4 ">
      <View className=" flex-row items-center ">
        <Image
          source={{uri: image}}
          className="w-16 h-16 ml-2 rounded"
          resizeMode="contain"
        />
        <View className="flex-col ml-2">
          <Text className="text-sm font-bold text-start w-9/12 dark:text-white">
            {title}
          </Text>
          <Text className="text-xs text-start dark:text-white/70">
            {category}
          </Text>
        </View>
      </View>
      <View className="flex-row ml-2 mt-5 justify-between">
        <View className="flex-col">
          <Text className="dark:text-white">
            Price:<Text className="font-bold"> ${price * quantity}</Text>
          </Text>
          <Text className="dark:text-white">
            Qty: <Text className="font-bold"> {quantity}</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => handleDelete()}
          activeOpacity={0.7}
          className="border-[#36454F] border rounded  py-2 px-2 mr-3 dark:bg-[#36454F] dark:border-white">
          <Text className="font-bold dark:text-white">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemCard;
