import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColorScheme} from 'nativewind';
import {useNavigation} from '@react-navigation/native';

const MenuItem = ({name, navPath, onClick}) => {
  const {colorScheme} = useColorScheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        onClick;
        navigation.navigate(navPath);
      }}
      className="mx-3 my-2"
      activeOpacity={0.7}>
      <Text className="border-b p-2 dark:text-white dark:border-[white]">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
