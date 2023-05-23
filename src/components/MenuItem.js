import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useColorScheme} from 'nativewind';


const MenuItem = ({name}) => {
  const {colorScheme} = useColorScheme();


  return (
    <TouchableOpacity className='mx-3 my-2'>
      <Text className='border-b p-2 dark:text-white dark:border-[white]'>{name}</Text>
    </TouchableOpacity>
  )
}

export default MenuItem