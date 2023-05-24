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
            console.log('item ==>', item);
            return (
              <View className="m-3 bg-[#848482] p-4 rounded">
                <Text className="text-white">Product Name: {item.name}</Text>
                <Text className="text-white">Quantity: {item.units}</Text>
                <Text className="text-white">Price: {item.regularPrice}</Text>
                <Image
                 source={item.images}
                  key={index}
                  style={{
                    width: 260,
                    height: 300,
                    borderWidth: 2,
                    borderColor: '#d35647',
                    resizeMode: 'contain',
                    margin: 8,
                  }}
                />
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default SingleOrder;
