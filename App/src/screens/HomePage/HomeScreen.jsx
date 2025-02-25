import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import CategorySelector from '../../components/CategorySelector';
import ProductList from '../../components/ProductList';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <CategorySelector />
      <ProductList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});
