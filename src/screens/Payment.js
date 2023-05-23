import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useColorScheme} from 'nativewind';


const Payment = ({navigation}) => {
  // color
  const {colorScheme} = useColorScheme();
  const [paypal, setPaypal] = useState(false);
  const [masterCard, setMasterCard] = useState(false);
  


  return (
    <View className="flex-1 dark:bg-[#36454F]">
      <View className="bg-[#36454F] py-5 flex-row">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            className="w-4 h-4 ml-3 mt-2"
            source={require('../assets/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text className="text-white text-center font-semibold text-2xl uppercase	ml-5">
          Payment
        </Text>
      </View>
      {/* Imaegs */}
      <View className="flex-row justify-around mb-5 items-center ">
        <TouchableOpacity
          className={`${
            paypal ? ' shadow' : 'opacity-30'
          } py-4 px-8 m-4 rounded bg-[#ddd]`}
          onPress={() => {
            setPaypal(!paypal);
            setMasterCard(false);
          }}>
          <View className="items-center">
            <Image
              source={require('../assets/paypal.png')}
              className="h-16 w-16"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className={`${
            masterCard ? ' shadow' : 'opacity-30'
          } py-4 px-8 m-4 rounded bg-[#ddd]`}
          onPress={() => {
            setMasterCard(!masterCard);
            setPaypal(false);
          }}>
          <View className="items-center">
            <Image
              source={require('../assets/credit-card.png')}
              className="h-16 w-16"
            />
          </View>
        </TouchableOpacity>
      </View>
      {paypal == true ? (
        <View className="w-10/12 mx-6 mt-5">
          <Text className="text-md dark:text-white">
            You will paying your bill using Paypal account. If you don't have
            one, feel free to create one. PayPal is the faster, safer way to
            send and receive money or make an online payment.
          </Text>
        </View>
      ) : masterCard == true ? (
        <View className="w-full mx-6 flex-row space-x-8 mt-5">
          <TextInput placeholder="CCV" className="border-b w-3/12" placeholderTextColor={colorScheme == 'dark' ? 'white' : ''} />
          <TextInput
            placeholder="Card Number"
            className="border-b w-6/12"
            placeholderTextColor={colorScheme == 'dark' ? 'white' : ''}
          />
        </View>
      ) : null}

      <View className="mx-6 my-8">
        <View className="flex-row justify-between border-b p-2 my-2 dark:border-[white]">
          <Text className='dark:text-white'>Shipping: </Text>
          <Text className="font-bold dark:text-white">$ 10 </Text>
        </View>
        <View className="flex-row justify-between border-b p-2 my-2 dark:border-[white]">
          <Text className='dark:text-white'>Subtotal: </Text>
          <Text className="font-bold dark:text-white">$ 5 </Text>
        </View>
        <View className="flex-row justify-between border-b p-2 my-2 dark:border-[white]">
          <Text className='dark:text-white'>Total: </Text>
          <Text className="font-bold dark:text-white">$ 15 </Text>
        </View>
      </View>
      <TouchableOpacity
      activeOpacity={0.7}
        className="rounded border bg-black py-3 mx-3 "
        onPress={() => navigation.navigate('PaymentSucess')}>
        <Text className="font-bold uppercase text-center text-white">
          confirm payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
