import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useColorScheme} from 'nativewind';

const Checkout = ({navigation}) => {
  // color scheme
  const {colorScheme} = useColorScheme();
  console.log(colorScheme);

  const [free, setFree] = useState(false);
  const [pickUp, setPickUp] = useState(false);
  const [normal, setNormal] = useState(false);

  return (
    <View className="bg-white dark:bg-[#36454F] flex-1">
      <View className="bg-[#36454F] py-5 flex-row">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            className="w-4 h-4 ml-3 mt-2"
            source={require('../assets/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text className="text-white text-center font-semibold text-2xl uppercase	ml-5">
          Delivery
        </Text>
      </View>

      <Text className="text-black/60 dark:text-white font-semibold mt-2 ml-2 text-md">
        shipping method
      </Text>
      <View className="flex-row justify-around mb-5">
        <TouchableOpacity
          style={{
            backgroundColor:
              free && pickUp == false && normal == false ? '#525050' : '#FAF9F6',
          }}
          className="p-2 border m-4 rounded"
          onPress={() => {
            setFree(!free);
            setPickUp(false);
            setNormal(false);
          }}>
          <View className="items-center">
            <Text
              style={{color: free ? 'white' : 'black'}}
              className="text-xl font-semibold">
              $ 0
            </Text>

            <Text style={{color: free ? 'white' : 'black'}}>Free Shipping</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              free == false && pickUp == true && normal == false
                ? '#525050'
                : '#FAF9F6',
          }}
          className="p-2 border m-4 rounded"
          onPress={() => {
            setPickUp(!pickUp);
            setFree(false);
            setNormal(false);
          }}>
          <View className="items-center">
            <Text
              style={{color: pickUp ? 'white' : 'black'}}
              className="text-xl font-semibold">
              $ 10
            </Text>

            <Text style={{color: pickUp ? 'white' : 'black'}}>
              Local Pickup
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              free == false && pickUp == false && normal == true
                ? '#525050'
                : '#FAF9F6',
          }}
          className="p-2 border m-4 rounded"
          onPress={() => {
            setNormal(!normal);
            setFree(false);
            setPickUp(false);
          }}>
          <View className="items-center">
            <Text
              style={{color: normal ? 'white' : 'black'}}
              className="text-xl font-semibold">
              $ 15
            </Text>

            <Text style={{color: normal ? 'white' : 'black'}}>
              Normal Delivery
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text className="text-black/60 dark:text-white font-semibold mt-2 ml-2 text-md">
        Your Address Details
      </Text>
      <View className="mx-3 flex-row justify-between flex-wrap space-x-1">
        <TextInput
          placeholder="First Name"
          className="border-0 border-b w-5/12"
          placeholderTextColor={colorScheme == 'dark' ? '#949292' : null}
        />
        <TextInput
          placeholder="Last Name"
          className="border-0 border-b w-5/12 placeholder:text-white"
          placeholderTextColor={colorScheme == 'dark' ? '#949292' : null}
        />
        <TextInput
          placeholder="Address line 1"
          className="border-0 border-b w-full"
          placeholderTextColor={colorScheme == 'dark' ? '#949292' : null}
        />
        <TextInput
          placeholder="Address line 2"
          className="border-0 border-b w-full"
          placeholderTextColor={colorScheme == 'dark' ? '#949292' : null}
        />
        <TextInput
          placeholder="City"
          className="border-0 border-b w-5/12"
          placeholderTextColor={colorScheme == 'dark' ? '#949292' : null}
        />
        <TextInput
          placeholder="Number"
          className="border-0 border-b w-5/12"
          placeholderTextColor={colorScheme == 'dark' ? '#949292' : null}
        />
      </View>
      <TouchableOpacity className="rounded border bg-black py-3 mx-3 mt-14" onPress={() => navigation.navigate("Payment") }>
        <Text className="font-bold uppercase text-center text-white">
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
