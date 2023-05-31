import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../store/userSlice';
import axios from 'axios';

import {BASE_URL} from '../constants';

const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleLoginSumbit = () => {
    let params = {
      identifier: email,
      password: password,
    };
    console.log('params ===>', params);
    axios
      .post(`${BASE_URL}/api/auth/local`, params)
      .then(res => {
        console.log('LOGIN ==>', res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View className="flex-1 bg-red-300">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="flex-1 self-center mt-16 mb-3">
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
            value={email}
            onChangeText={e => setemail(e)}
          />
          <TextInput
            placeholder="Password"
            className="border rounded  w-full p-2 my-4"
            secureTextEntry={true}
            value={password}
            onChangeText={e => setpassword(e)}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            className="rounded border bg-black p-3 my-8 "
            onPress={() => handleLoginSumbit()}>
            <Text className="font-bold uppercase text-center text-white">
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
