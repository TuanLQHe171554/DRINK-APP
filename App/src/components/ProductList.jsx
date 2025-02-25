import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const products = [
  { id: '1', name: 'Cà Phê Sữa Đá', image: '', price: '35K' },
  { id: '2', name: 'Trà Sữa Đường Đen', image: '', price: '40K' },
  { id: '3', name: 'Trà Xanh Matcha', image: '', price: '28K' },
  { id: '4', name: 'Nước Ép Cam', image: '', price: '30K' },
];

export default function ProductList() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15, // Giảm padding tí cho card rộng hơn
    paddingVertical: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});