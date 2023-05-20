import { View, Text , Image } from 'react-native'
import React from 'react'
import {useColorScheme} from 'nativewind';

const ProductCard = ({title, price, description, category, image}) => {
    console.log('image =>>>', image);

    const {colorScheme} = useColorScheme()
  return (
    <View className='w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5'> 

    <View className='bg-white rounded-xl'>
        <Image source={{ uri: image}} className='w-full h-72' resizeMode='contain' />
    </View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>

    </View>
  )
}

export default ProductCard