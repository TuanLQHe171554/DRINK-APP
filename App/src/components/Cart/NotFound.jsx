import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export const NotFound = ({ }) => {
  return (
    <View style={styles.container}>
      <Image source={{
        uri: 'https://skoozo.com/assets/img/empty-cart.png',
      }}
        style={styles.image} />
      <Text style={styles.title}>Bạn chưa có đơn hàng</Text>
      <Text style={styles.subtitle}>
        Đặt hàng giao tận nơi trong vòng 1 giờ với nhiều khuyến mãi đang được áp dụng
      </Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: "100%",
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "red",
    fontSize: 16,
  },
});
