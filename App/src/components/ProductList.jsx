import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const products = [
  { id: '1', name: 'Cappuccino', image: '', price: '$3.5' },
  { id: '2', name: 'Iced Latte', image: '', price: '$4.0' },
  { id: '3', name: 'Green Tea', image: '', price: '$2.8' },
  { id: '4', name: 'Fresh Lemonade', image: '', price: '$3.0' },
];

export default function ProductList() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
      columnWrapperStyle={styles.row}
    />
  );
}
    
const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
