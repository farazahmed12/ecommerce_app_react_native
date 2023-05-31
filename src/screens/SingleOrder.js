import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useColorScheme} from 'nativewind';

const SingleOrder = ({navigation, route}) => {
  const {colorScheme} = useColorScheme();
  const data = route.params.orderItem;
  const products = data.products;
  console.log('products ==>', data.products);
  return (
    <View className="flex-1 bg-white dark:bg-[#36454F]">
      <View className="bg-[#36454F] py-5 flex-row">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            className="w-4 h-4 ml-3 mt-2"
            source={require('../assets/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text className="text-white text-center font-semibold text-2xl uppercase ml-5">
          {data.orderID}
        </Text>
      </View>
      <ScrollView className="mx-3 mt-5">
        <Text className="dark:text-white border-b my-3 p-2 dark:border-white">
          Order ID: <Text className="font-bold">{data.orderID}</Text>
        </Text>
        <Text className="dark:text-white border-b my-3 p-2 dark:border-white">
          Created At: <Text className="font-bold">{data.createdAt}</Text>
        </Text>
        <Text className="dark:text-white border-b my-3 p-2 dark:border-white">
          Status: <Text className="font-bold">{data.status}</Text>
        </Text>
        <Text className="dark:text-white border-b my-3 p-2 dark:border-white">
          Total: <Text className="font-bold">$ {data.grandTotal}</Text>
        </Text>
        <Text className="dark:text-white my-3 p-2 dark:border-white">
          Products{' '}
        </Text>
        <FlatList
          data={products}
          renderItem={({item, index}) => {
            console.log('item ==>', item.images[0]);
            return (
              <View className="m-3 bg-gray-200 p-4 rounded flex-row items-center">
                <View className="flex-grow">
                  <Text className="text-gray-500">
                    Product Name: {item.name}
                  </Text>
                  <Text className="text-gray-500">Quantity: {item.units}</Text>
                  <Text className="text-gray-500">
                    Price: {item.regularPrice}
                  </Text>
                </View>
                <View>
                  <Image
                    className="w-16 h-16"
                    source={item.images[0]}
                    key={index}
                  />
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default SingleOrder;
