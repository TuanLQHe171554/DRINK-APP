import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import CategorySelector from '../../components/CategorySelector';
import ProductList from '../../components/ProductList';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer} // Thêm contentContainerStyle
      showsVerticalScrollIndicator={false} // Ẩn thanh cuộn cho đẹp
    >
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
    backgroundColor: '#F5F5F5', // Trắng sữa nhẹ hơn #F9F9F9, thanh thoát hơn
  },
  contentContainer: {
    paddingBottom: 20, // Thêm padding dưới để danh sách không sát đáy
  },
});