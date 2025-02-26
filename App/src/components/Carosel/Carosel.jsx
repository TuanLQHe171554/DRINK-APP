import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const Carosel = ({ DATA }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (DATA && DATA.length > 1) { // Kiểm tra DATA để tránh lỗi
      const interval = setInterval(() => {
        setImageIndex(prevIndex => 
          prevIndex < DATA.length - 1 ? prevIndex + 1 : 0 // Quay lại đầu khi hết
        );
      }, 3000); // 3 giây chuyển ảnh
      return () => clearInterval(interval);
    }
  }, [imageIndex, DATA]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: DATA[imageIndex] || 'https://via.placeholder.com/300' }} // Placeholder nếu DATA rỗng
          style={styles.image}
        />
        {imageIndex > 0 && (
          <MaterialIcons
            name="navigate-before"
            style={[styles.icon, styles.iconLeft]}
            size={28} // Tăng size icon
            color="#FFF"
            onPress={() => setImageIndex(prevIndex => Math.max(prevIndex - 1, 0))}
          />
        )}
        {imageIndex < DATA.length - 1 && (
          <MaterialIcons
            name="navigate-next"
            style={[styles.icon, styles.iconRight]}
            size={28}
            color="#FFF"
            onPress={() => setImageIndex(prevIndex => Math.min(prevIndex + 1, DATA.length - 1))}
          />
        )}
        {/* Chỉ số ảnh */}
        <View style={styles.dotsContainer}>
          {DATA.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === imageIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5', // Trắng sữa đồng bộ
    paddingVertical: 10, // Padding trên dưới cho thoáng
  },
  imageContainer: {
    width: '90%', // Giảm width tí để có viền
    height: 220, // Tăng height cho ảnh nổi bật hơn
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 15, // Bo góc cho đẹp
    overflow: 'hidden', // Ẩn phần thừa khi bo góc
    alignSelf: 'center', // Căn giữa container
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3, // Bóng nhẹ
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -14 }], // Điều chỉnh vị trí theo size icon
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Nền mờ cho icon nổi
    borderRadius: 20,
    padding: 8,
  },
  iconLeft: {
    left: 15,
  },
  iconRight: {
    right: 15,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#D35400', // Cam cháy cho dot active
  },
  inactiveDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Trắng mờ cho dot inactive
  },
});