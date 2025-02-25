import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchScreen } from '../../components/Drink/SearchScreen';
import ProductCard from '../../components/ProductCard';
import { fetchAllProductsAPIs } from '../../apis';

const Stack = createNativeStackNavigator();

export const DrinkScreen = () => {
  const [products, setProducts] = useState([
    {
      _id: '1',
      name: 'Trà Sữa Hương Dừa',
      image: '',
      description: 'Trà sữa thơm lừng với vị dừa béo ngậy',
      rating: 4.5,
      price: '35K', // Đổi sang định dạng Việt Nam
      size: 'M',
    },
    {
      _id: '2',
      name: 'Sinh Tố Bơ',
      image: '',
      description: 'Sinh tố bơ tươi ngon, bổ dưỡng',
      rating: 4.7,
      price: '40K',
      size: 'L',
    },
    {
      _id: '3',
      name: 'Nước Mía Tươi',
      image: '',
      description: 'Nước mía nguyên chất, mát lành',
      rating: 4.2,
      price: '20K',
      size: 'M',
    },
    {
      _id: '4',
      name: 'Cà Phê Sữa Đá',
      image: '',
      description: 'Cà phê đậm vị, sữa béo ngọt',
      rating: 4.8,
      price: '30K',
      size: 'M',
    },
    {
      _id: '5',
      name: 'Trà Chanh',
      image: '',
      description: 'Trà chanh mát lạnh, chua ngọt vừa miệng',
      rating: 4.3,
      price: '25K',
      size: 'L',
    },
  ]);

  useEffect(() => {
    fetchAllProductsAPIs()
      .then(res => {
        console.log(res);
        setProducts(res);
      })
      .catch(err => console.log('Error fetching products:', err));
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer} // Thêm contentContainerStyle
      showsVerticalScrollIndicator={false} // Ẩn thanh cuộn
    >
      <SearchScreen navigation="" />
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <ProductCard product={item} onAddToCart={() => {}} />}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer} // Style riêng cho FlatList
        scrollEnabled={false} // Tắt cuộn riêng của FlatList, để ScrollView quản lý
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Trắng sữa đồng bộ với các màn hình khác
  },
  contentContainer: {
    paddingBottom: 20, // Padding dưới để không sát đáy
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15, // Khoảng cách giữa các hàng
  },
  listContainer: {
    paddingHorizontal: 15, // Padding ngang cho đồng bộ với ProductCard
    paddingTop: 10, // Cách SearchScreen một chút
  },
});