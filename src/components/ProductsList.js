import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchproducts } from '../store/productsSlice';


const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);
  console.log('Products =>>>', products);
  
 // fetch from thunk 
  useEffect(() => {
    dispatch(fetchproducts());
  }, []);
  return (
    <SafeAreaView>
      <Text>ProductsList12</Text>
      <FlatList data={products} keyExtractor={products => products.id} renderItem={({item}) => <Text>{item.title}</Text> } />
    </SafeAreaView>
  );
};

export default ProductsList;
