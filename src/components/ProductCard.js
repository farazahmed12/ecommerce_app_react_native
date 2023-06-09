import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {useColorScheme} from 'nativewind';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../store/cartSlice';
import {addWishList} from '../store/WishListSlice';

const ProductCard = ({
  title,
  price,
  description,
  category,
  image,
  wholeItem,
  id,
}) => {
  const {colorScheme} = useColorScheme();
  const [qty, setQty] = useState(1);

  // redux
  const STATUS = useSelector(state => state.products.status);
  const cartItems = useSelector(state => state.cart);
  const wishListItems = useSelector(state => state.wishlist);

  const dispatch = useDispatch();

  // Add to wishlist
  const handleAddWishList = () => {
    const itemIndex = wishListItems?.findIndex(item => item.id === id);

    if (itemIndex == -1) {
      dispatch(addWishList(wholeItem));
      Toast.show({
        type: 'success',
        text1: 'Product added to Wishlist',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Item Already Exist',
      });
    }
  };

  // Add to cart
  const handleAddProduct = () => {
    dispatch(add({...wholeItem, quantity: qty}));

    Toast.show({
      type: 'success',
      text1: 'Product added to cart',
    });
  };
  return (
    <View className="w-[95%] bg-white dark:bg-[#36454F] rounded-3xl p-5 my-5 shadow-lg">
      <View className="bg-white rounded-xl">
        <Image
          source={{uri: image}}
          className="w-full h-44"
          resizeMode="contain"
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="font-bold text-lg dark:text-white mb-4 ">{title}</Text>
        <View className="flex-row mb-4 items-center gap-4">
          <TouchableOpacity
            onPress={() => {
              if (qty === 1) {
                setQty(1);
              } else {
                setQty(qty - 1);
              }
            }}>
            <Image
              source={require('../assets/minus.png')}
              className="w-6 h-6"
            />
          </TouchableOpacity>
          <Text className="text-xl dark:text-white">{qty}</Text>
          <TouchableOpacity onPress={() => setQty(qty + 1)}>
            <Image source={require('../assets/plus.png')} className="w-6 h-6" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-extrabold dark:text-white">
            ${(price * qty).toFixed(2)}
          </Text>
          <TouchableOpacity
            onPress={handleAddWishList}
            className="p-2 bg-gray-100 rounded-full">
            <Image
              source={require('../assets/heart.png')}
              className="h-6 w-6"
            />
          </TouchableOpacity>
        </View>

        <Text
          numberOfLines={2}
          className="text-sm text-black/60 dark:text-white/70">
          {description}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleAddProduct}
          className="flex-row justify-center w-8/12 self-center rounded-full p-3 bg-black dark:bg-white my-5">
          <Text className="text-white font-bold dark:text-black">
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
