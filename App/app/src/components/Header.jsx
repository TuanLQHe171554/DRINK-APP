import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const image = { uri: 'https://gamek.mediacdn.vn/133514250583805952/2024/9/24/yasuo-skin-1-1727148942603165090057.jpg' }; // Giữ nguyên link ảnh của bạn

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Image
            source={{ uri: 'https://gamek.mediacdn.vn/133514250583805952/2024/9/24/yasuo-skin-1-1727148942603165090057.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.greeting}>Hello, Coffee Lover!</Text>
        </View>

        <MaterialCommunityIcons name="bell" size={24} color="#fff" />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.tagline}>Brewing the perfect cup of coffee, one <Text style={styles.highlight}>sip</Text> at a time.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 250,
    backgroundColor: '#EAB543'
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  tagline: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  highlight: {
    color: '#FFD700',
  },
  textContent: {
    alignItems: 'center'
  }
});
