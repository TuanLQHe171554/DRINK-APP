import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const DATA = [
    'https://chefjob.vn/wp-content/uploads/2020/07/cappuccino-cafe-cua-y.jpg',  
    'https://www.cafedumonde.co.uk/media/o3gkzmuy/iced-latte.png?width=540&height=540&v=1dac1797980aad0', 
    'https://static.wixstatic.com/media/64b42c_8f336462892749bf9b4b5ae0becd4905~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/64b42c_8f336462892749bf9b4b5ae0becd4905~mv2.jpg',
    'https://chefjob.vn/wp-content/uploads/2020/07/cappuccino-cafe-cua-y.jpg',  
    'https://www.cafedumonde.co.uk/media/o3gkzmuy/iced-latte.png?width=540&height=540&v=1dac1797980aad0', 
    'https://static.wixstatic.com/media/64b42c_8f336462892749bf9b4b5ae0becd4905~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/64b42c_8f336462892749bf9b4b5ae0becd4905~mv2.jpg'
];

export const Tips = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.gridContainer}>
        {DATA.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: item }} style={styles.image} />
            <Text style={styles.productName}>Product name</Text>
            <View>
              <Text style={{ fontSize: 12, color: 'gray' }}>
                3.5k view
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});