import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="magnify" size={22} color="#6B7280" />
      <TextInput
        placeholder="Tìm món nước yêu thích của bạn..."
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB', // Màu xám trắng nhẹ, thanh thoát
    borderRadius: 12, // Bo góc mềm hơn
    paddingHorizontal: 12,
    paddingVertical: 8, // Thêm padding dọc cho thoáng
    marginHorizontal: 20,
    marginVertical: 15, // Giảm margin cho gọn
    shadowColor: '#000',
    shadowOpacity: 0.08, // Bóng đổ nhẹ nhàng hơn
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, // Đổ bóng xuống dưới
    elevation: 3, // Cho Android
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#374151', // Màu chữ đậm hơn tí cho dễ đọc
    fontWeight: '400',
  },
});