import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const NotFound = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://skoozo.com/assets/img/empty-cart.png',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Bạn chưa có đơn hàng</Text>
      <Text style={styles.subtitle}>
        Đặt ngay để nhận giao hàng tận nơi trong 1 giờ kèm nhiều ưu đãi hấp dẫn!
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5', // Trắng sữa thay trắng tinh
  },
  image: {
    width: 120, // Tăng size ảnh cho nổi bật
    height: 120,
    marginBottom: 25,
  },
  title: {
    fontSize: 20, // Tăng size cho rõ ràng
    fontWeight: '600',
    color: '#2D2D2D', // Xám đậm nhẹ thay đen mặc định
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15, // Tăng size tí cho dễ đọc
    color: '#6B7280', // Xám nhạt thay gray mặc định
    textAlign: 'center',
    paddingHorizontal: 10, // Padding ngang để chữ không sát mép
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#E07C4A', // Nâu cam thay viền đỏ
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10, // Bo góc mềm hơn
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Bóng nhẹ cho nút
  },
  buttonText: {
    color: '#FFF', // Chữ trắng trên nền nâu cam
    fontSize: 16,
    fontWeight: '600', // Đậm vừa đủ
  },
});