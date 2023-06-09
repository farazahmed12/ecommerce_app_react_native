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
import {removeUser} from '../store/userSlice';

// compoenets
import MenuItem from '../components/MenuItem';
import {useDispatch, useSelector} from 'react-redux';

const Menu = () => {
  const dispatch = useDispatch();
  const {colorScheme} = useColorScheme();

  const user = useSelector(state => state.user.user);

  const menuArray = [
    {name: 'My Products', navPath: 'Products'},
    {name: 'My Orders', navPath: 'My Orders'},
    {name: 'My WishList', navPath: 'WishList'},
    {
      name: 'Track your Order',
      navPath: 'TrackOrder',
      onClick: dispatch(removeUser),
    },
    {name: 'Sign Out', navPath: 'Login'},
  ];

  return (
    <View className="flex-1 bg-white dark:bg-[#36454F] ">
      <View className="flex-row my-5 items-center mx-3">
        <Image source={require('../assets/user.png')} className="w-20 h-20" />
        <View className="ml-5">
          <Text className="text-lg font-bold dark:text-white">
            {user?.user?.username}
          </Text>
          <Text className="text-sm dark:text-white">{user?.user?.email}</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={menuArray}
          renderItem={({item}) => (
            <MenuItem
              name={item.name}
              navPath={item.navPath}
              onClick={item.onClick}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Menu;
