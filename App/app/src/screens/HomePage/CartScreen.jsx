import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export const CartScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: 'white' }}>Shopping Cart</Text>
        <Icon name="stars" size={24} color="#000" />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1, backgroundColor: '#dfe6e9'
  },
})