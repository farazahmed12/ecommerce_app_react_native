import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import React from 'react'
import { useColorScheme } from 'nativewind'

const Home = () => {


  // redux 
  const cart = useSelector(state => state.cart)

  const {colorScheme} = useColorScheme()
  return (
    <View >
      <Text className='text-red-700'>Home</Text>
    </View>
  )
}

export default Home