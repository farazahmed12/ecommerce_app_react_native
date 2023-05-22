import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchproducts } from '../store/productsSlice';


// components 
import ProductCard from '../components/ProductCard';


const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data);
  
 // fetch from thunk 
  useEffect(() => {
    dispatch(fetchproducts());
  }, []);
  return (
    <SafeAreaView>
      <FlatList data={products} keyExtractor={products => products.id} renderItem={({item}) => <ProductCard {...item} /> } />
    </SafeAreaView>
  );
};

export default ProductsList;
