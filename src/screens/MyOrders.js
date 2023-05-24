import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const MyOrder = ({navigation}) => {
  const orderData = [
    {
      orderID: '#0020090',
      address: 'flat 105, ABC Apartments',
      grandTotal: 87,
      products: [
        {
          images: [require('../assets/phone.jpg')],
          name: 'Apple',
          offer: 10,
          salePrice: 2.7,
          regularPrice: 3,
          units: 10,
        },
        {
          images: [require('../assets/phone.jpg')],
          name: 'Biryani',
          offer: 20,
          salePrice: 12,
          regularPrice: 15,
          units: 5,
        },
      ],
      status: 'Delivered',
      createdAt: 'Nov 3, 2020 3:49 PM',
    },
    {
      orderID: '#0034340',
      address: 'flat 105, ABC Apartments',
      grandTotal: 44,
      products: [
        {
          images: [require('../assets/phone.jpg')],
          name: 'Apple',
          offer: 10,
          salePrice: 2.7,
          regularPrice: 3,
          units: 10,
        },
        {
          images: [require('../assets/phone.jpg')],
          name: 'Biryani',
          offer: 20,
          salePrice: 12,
          regularPrice: 15,
          units: 5,
        },
        {
          images: [require('../assets/phone.jpg')],
          name: 'Biryani',
          offer: 20,
          salePrice: 12,
          regularPrice: 15,
          units: 5,
        },
      ],
      status: 'Pending',
      createdAt: 'Nov 3, 2020 3:49 PM',
    },
    {
      orderID: '#0020455',
      address: 'flat 105, ABC Apartments',
      grandTotal: 87,
      products: [
        {
          images: [require('../assets/phone.jpg')],
          name: 'Apple',
          offer: 10,
          salePrice: 2.7,
          regularPrice: 3,
          units: 10,
        },
        {
          images: [require('../assets/phone.jpg')],
          name: 'Biryani',
          offer: 20,
          salePrice: 12,
          regularPrice: 15,
          units: 5,
        },
      ],
      status: 'Delivered',
      createdAt: 'Nov 3, 2020 3:49 PM',
    },
  ];
  return (
    <View className="flex-1">
      <FlatList
        data={orderData}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('SingleOrder', {orderItem: item});
            }}
            className="rounded bg-white mx-3 my-4 p-4 flex-row items-center">
            <View className="flex-grow">
              <Text className="text-lg font-bold my-3">{`Order No ${item.orderID}`}</Text>
              <View className="flex-row space-x-4">
                <Text>{item.createdAt}</Text>
                <Text>{`${item.products.length} items`}</Text>
              </View>
            </View>
            <View
              className={
                item.status == 'Delivered'
                  ? 'bg-green-400 p-2 rounded'
                  : 'bg-red-400 p-2 rounded'
              }>
              <Text>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MyOrder;
