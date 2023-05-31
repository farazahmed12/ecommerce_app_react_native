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
import NetInfo from '@react-native-community/netinfo';

const Login = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isInternet, setisInternet] = useState([]);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  console.log('Conn2 ===>', isInternet);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setisInternet(state.isInternetReachable);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
            onChange={e => setemail(e.target.value)}
          />
          <TextInput
            placeholder="Password"
            className="border rounded  w-full p-2 my-4"
            secureTextEntry={true}
            value={password}
            onChange={e => setpassword(e.target.value)}
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
        {!isConnected && (
          <View className=" absolute bottom-0 w-full bg-green-400">
            <Text className="py-1 text-white text-center">
              No Internet Access
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Login;
