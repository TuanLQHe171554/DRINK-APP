import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const profileImage = { uri: 'https://gamek.mediacdn.vn/133514250583805952/2024/9/24/yasuo-skin-1-1727148942603165090057.jpg' };

export default function Header() {
  return (
    <ImageBackground
      source={profileImage}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.headerTop}>
          <View style={styles.profileContainer}>
            <Image
              source={profileImage}
              style={styles.profileImage}
            />
            <Text style={styles.greeting}>Chào, Dân Nghiện Nước!</Text>
          </View>
          <MaterialCommunityIcons name="bell" size={28} color="#F4D03F" />
        </View>
        <View style={styles.textContent}>
          <Text style={styles.tagline}>
            Pha chế chuẩn gu, đậm vị{' '}
            <Text style={styles.highlight}>Việt</Text>!
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
  },
  backgroundImage: {
    opacity: 0.15, // Mờ nền để nội dung rõ hơn
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(74, 44, 42, 0.9)', // Nâu cà phê đậm, hơi trong
    padding: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#F4D03F', // Viền vàng nhạt
  },
  greeting: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  tagline: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 30,
    marginTop: 15,
  },
  highlight: {
    color: '#F4D03F',
    fontWeight: '800',
  },
  textContent: {
    flex: 1,
    justifyContent: 'center',
  },
});