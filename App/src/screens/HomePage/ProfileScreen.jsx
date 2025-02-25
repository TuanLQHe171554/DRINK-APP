import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons as Icon } from '@expo/vector-icons';

export const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false} // Ẩn thanh cuộn
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>Tài khoản</Text>
        <Icon name="person" size={26} color="#FFF" /> {/* Đổi "stars" thành "person" */}
      </View>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://gamek.mediacdn.vn/133514250583805952/2024/9/24/yasuo-skin-1-1727148942603165090057.jpg',
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.username}>Lê Quốc Tuấn</Text> {/* Viết lại tên cho đúng tiếng Việt */}
          <Text style={styles.subtitle}>Dân ghiền đồ uống</Text> {/* Thêm subtitle cho vui */}
        </View>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.couponContainer}
        showsHorizontalScrollIndicator={false}
      >
        {[
          { value: '10K', text: 'Miễn phí ship' },
          { value: '20K', text: 'Giảm giá đơn' },
          { value: '15K', text: 'Ưu đãi mới' },
        ].map((coupon, index) => (
          <View key={index} style={styles.coupon}>
            <Text style={styles.couponValue}>{coupon.value}</Text>
            <Text style={styles.couponText}>{coupon.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="stars" size={24} color="#D35400" /> {/* Cam cháy cho icon */}
          <Text style={styles.menuText}>Điểm thưởng</Text> {/* Đổi "Cooky Coins" */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="payment" size={24} color="#D35400" />
          <Text style={styles.menuText}>Thanh toán</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="location-on" size={24} color="#D35400" />
          <Text style={styles.menuText}>Địa chỉ giao hàng</Text> {/* Cụ thể hơn */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="favorite" size={24} color="#E07C4A" /> {/* Nâu cam cho favorite */}
          <Text style={styles.menuText}>Món yêu thích</Text> {/* Đổi "Đã lưu" */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="description" size={24} color="#D35400" />
          <Text style={styles.menuText}>Giới thiệu app</Text> {/* Đổi "Introduction to Cooky" */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="#D35400" />
          <Text style={styles.menuText}>Cài đặt</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Login')}
        >
          <Ionicons name="log-out-outline" size={24} color="#D35400" /> {/* Đổi icon */}
          <Text style={styles.menuText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Trắng sữa đồng bộ
  },
  title: {
    backgroundColor: '#E07C4A', // Nâu cam thay đỏ
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  titleText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF', // Nền trắng cho header
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  avatar: {
    width: 60, // Tăng size avatar
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#D35400', // Viền cam cháy
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D2D2D', // Xám đậm nhẹ
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280', // Xám nhạt
  },
  couponContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  coupon: {
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 12,
    width: 100, // Đặt width cố định cho đồng đều
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  couponValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#D35400', // Cam cháy cho giá trị
  },
  couponText: {
    fontSize: 12,
    color: '#374151', // Xám đậm nhẹ
  },
  menuContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFF', // Nền trắng cho menu
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0', // Đường viền nhạt hơn
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#374151', // Xám đậm nhẹ
    fontWeight: '500',
  },
});