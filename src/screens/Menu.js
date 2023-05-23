import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {useColorScheme} from 'nativewind';

// compoenets
import MenuItem from '../components/MenuItem';

const Menu = () => {
  const {colorScheme} = useColorScheme();

  const menuArray = [
    {name: 'My Products'},
    {name: 'My Orders'},
    {name: 'My WishList'},
    {name: 'Track your Order'},
    { name: 'Settings'},
    { name: 'Sign Out'},
  ];

  return (
    <View className="flex-1 bg-white dark:bg-[#36454F] ">
      <View className="flex-row my-5 items-center mx-3">
        <Image source={require('../assets/user.png')} className="w-20 h-20" />
        <View className="ml-5">
          <Text className="text-lg font-bold dark:text-white">John Doe</Text>
          <Text className="text-sm dark:text-white">ID: 0000304094</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={menuArray}
          renderItem={({item}) => <MenuItem name={item.name} />}
        />
      </View>
    </View>
  );
};

export default Menu;
