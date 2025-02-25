import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';

export const FilterScreen = ({ navigation }) => {
  const [categories, setCategories] = useState({
    'Cà phê': true,
    'Trà': false,
    'Sinh tố': false,
    'Nước ép': false,
  });

  const [brands, setBrands] = useState({
    'BaristaCoffee': true,
    'GreenTeaCo': false,
    'JuicyFresh': false,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Danh mục</Text>
      {Object.keys(categories).map(cat => (
        <Checkbox.Item
          key={cat}
          label={cat}
          status={categories[cat] ? 'checked' : 'unchecked'}
          onPress={() => setCategories({ ...categories, [cat]: !categories[cat] })}
          color="#D35400" // Cam cháy cho checkbox
          uncheckedColor="#6B7280" // Xám nhạt khi chưa chọn
          labelStyle={styles.checkboxLabel}
          style={styles.checkboxItem}
        />
      ))}

      <Text style={styles.sectionTitle}>Thương hiệu</Text>
      {Object.keys(brands).map(brand => (
        <Checkbox.Item
          key={brand}
          label={brand}
          status={brands[brand] ? 'checked' : 'unchecked'}
          onPress={() => setBrands({ ...brands, [brand]: !brands[brand] })}
          color="#D35400" // Cam cháy cho checkbox
          uncheckedColor="#6B7280" // Xám nhạt khi chưa chọn
          labelStyle={styles.checkboxLabel}
          style={styles.checkboxItem}
        />
      ))}

      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.applyButton}
        labelStyle={styles.buttonLabel}
        color="#E07C4A" // Nâu cam cho nút
      >
        Áp dụng bộ lọc
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Trắng sữa đồng bộ
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D2D2D', // Xám đậm nhẹ
    marginVertical: 15, // Tăng khoảng cách trên dưới
  },
  checkboxItem: {
    backgroundColor: '#FFF', // Nền trắng cho mỗi checkbox
    borderRadius: 8,
    marginVertical: 4, // Giảm khoảng cách giữa các item
    paddingVertical: 5, // Padding dọc để thoáng
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1, // Bóng nhẹ
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#374151', // Xám đậm nhẹ cho chữ
    fontWeight: '500',
  },
  applyButton: {
    marginTop: 25,
    borderRadius: 10, // Bo góc mềm hơn
    paddingVertical: 5, // Tăng chiều cao nút
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Bóng nhẹ cho nút
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF', // Chữ trắng trên nền nâu cam
  },
});