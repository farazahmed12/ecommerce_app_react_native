import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColorScheme} from 'nativewind';

const TrackOrder = () => {
  const {colorScheme} = useColorScheme();
  return (
    <SafeAreaView className="bg-white dark:bg-[#36454F] flex-1">
      <View className="bg-[#36454F] py-5 flex-row">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            className="w-4 h-4 ml-3 mt-2"
            source={require('../assets/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text className="text-white text-center font-semibold text-2xl uppercase	ml-5">
          Track your Order
        </Text>
      </View>

      <View className="px-2">
        <View className=" flex-row justify-around mt-4 items-center space-x-6 py-3 border-b border-[#ddd]">
          <View className="flex-row space-x-4 items-center">
            <View className="bg-gray-300 rounded-full p-2">
              <Image
                source={require('../assets/box.png')}
                className="h-14 w-14"
              />
            </View>
            <View className="flex-col">
              <Text className="text-bold text-xl dark:text-white">#040430</Text>
              <Text className="text-bold text-sm text-gray-400">
                Men's Clothing
              </Text>
            </View>
          </View>

          <View className="flex-col">
            <Text className="text-bold text-xl dark:text-white">$ 499</Text>
            <Text className="text-bold text-sm text-gray-400">QTY: 2</Text>
          </View>
        </View>
        <View className="flex-col flex space-y-2 mt-4  py-3  ">
          <Text className="dark:text-white font-semibold text-lg">
            Delivery
          </Text>
          <View className="border-b  border-[#ddd]">
            <Text className="text-gray-400">Address</Text>
            <Text className="dark:text-white font-semibold text-sm">
              132, My Street, Kingston, New York 12401.
            </Text>
            <Text className="dark:text-white font-semibold text-sm mb-2">
              0300-23123123
            </Text>
          </View>

          <View className="border-b border-[#ddd] ">
            <Text className="text-gray-400">Delivery Method</Text>
            <Text className="dark:text-white font-semibold text-sm mb-2">
              Free (30 days)
            </Text>
          </View>
          <Text className="text-gray-400">Order Summary</Text>
          <Text className="dark:text-white font-semibold text-sm">
            SubTotal: $ 488
          </Text>
          <Text className="dark:text-white text-gray-400  font-semibold text-xs">
            Discount: (2%) - $ 20
          </Text>
          <Text className="dark:text-white font-semibold text-ms border-t border-[#ddd] border-dashed w-[30%] py-2">
            Total: $ 450
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TrackOrder;
