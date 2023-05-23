import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useColorScheme } from 'nativewind';


const PaymentSucess = ({navigation}) => {
  const {colorScheme} = useColorScheme()
  return (
    <View className="flex-1 bg-white dark:bg-[#36454F]">
      <View className="flex-col self-center justify-center items-center mt-14 flex-grow">
        <Image
          source={require('../assets/checked.png')}
          className="w-32 h-32 "
        />
        <Text className="text-2xl text-green-600 font-semibold">
          Payment successful
        </Text>
      <Text className='text-gray-400 text-center mt-4'>Your Order is #454545 is successfully posted</Text>

      </View>

      <TouchableOpacity
      activeOpacity={0.7}
        className="rounded border bg-black py-3 mx-3 mb-4 "
        onPress={() => navigation.navigate('Products')}>
        <Text className="font-bold uppercase text-center text-white">
           continue shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSucess;
