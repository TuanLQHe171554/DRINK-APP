import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const categories = ['Tất cả', 'Cà phê', 'Trà', 'Nước ép', 'Sinh tố']; // Đổi "All" thành "Tất cả" cho đúng tiếng Việt

export default function CategorySelector() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryText}>All</Text>
      </TouchableOpacity>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton}>
          <Text style={styles.categoryText}>{category?.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10, // Thêm margin dọc cho thoáng
  },
  categoryButton: {
    backgroundColor: '#E07C4A', // Nâu cam nhẹ, gợi vibe cà phê sữa
    borderRadius: 25, // Bo góc tròn hơn cho mềm mại
    paddingHorizontal: 18, // Tăng padding ngang cho rộng rãi
    paddingVertical: 8, // Padding dọc nhẹ nhàng
    marginRight: 12, // Giãn cách giữa các nút
    shadowColor: '#000',
    shadowOpacity: 0.1, // Bóng đổ nhẹ
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // Cho Android
  },
  categoryText: {
    color: '#FFF', // Chữ trắng nổi trên nền nâu cam
    fontSize: 15, // Tăng nhẹ cỡ chữ cho dễ đọc
    fontWeight: '500', // Chữ đậm vừa đủ, thanh thoát
  },
});