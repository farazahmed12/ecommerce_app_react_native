import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 bg-red-300">
        <View className=" self-center mt-16 mb-3">
          <Image
            source={require('../assets/buy-now.png')}
            className="w-36 h-36"
            resizeMode="contain"
          />
        </View>
        <View
          style={{borderTopRightRadius: 50, borderTopLeftRadius: 50}}
          className="flex-1 p-4 bg-red-100">
          <TextInput
            placeholder="Email"
            className="border rounded  w-full p-2 my-4"
          />
          <TextInput
            placeholder="Password"
            className="border rounded  w-full p-2 my-4"
            secureTextEntry={true}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            className="rounded border bg-black p-3 my-8 "
            onPress={() => navigation.navigate('Products')}>
            <Text className="font-bold uppercase text-center text-white">
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
