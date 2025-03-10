import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ProductDetail = ({ route }) => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} activeOpacity={0.7}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Image Section */}
      <Image source={{ uri: product?.image }} style={styles.image} />

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product?.name}</Text>
        <Text style={styles.subtitle}>{product?.unit}</Text>
        <Text style={styles.price}>Price: $4.99</Text>
      </View>

      {/* Quantity Selector */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}>
          <Icon name="minus" size={18} color="white" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
          <Icon name="plus" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Product Details */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Product Detail</Text>
        <Text style={styles.description}>Apples are nutritious and may be good for weight loss and heart health.</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.nutritionText}>Nutritions: 110gr</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.reviewText}>Review: 4.5k</Text>
        <Text style={styles.ratingText}>⭐ 4.8 / 5</Text>
      </View>

      {/* Add to Basket Button */}
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 16 },
  backButton: { position: 'absolute', top: 20, left: 20, zIndex: 10, padding: 10 },
  image: { width: '100%', height: 300, borderRadius: 15, backgroundColor: '#f0f0f0', marginBottom: 20 },
  infoContainer: { marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 16, color: 'gray' },
  price: { fontSize: 20, fontWeight: 'bold', color: 'green', marginTop: 5 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 20 },
  quantityButton: { backgroundColor: 'green', padding: 10, borderRadius: 8 },
  quantity: { fontSize: 18, fontWeight: 'bold', borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 10, minWidth: 50, textAlign: 'center' },
  sectionContainer: { borderTopWidth: 1, borderTopColor: '#ddd', paddingVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  description: { fontSize: 14, color: 'gray' },
  nutritionText: { fontSize: 16, color: '#555' },
  reviewText: { fontSize: 16, color: '#555' },
  ratingText: { fontSize: 18, fontWeight: 'bold', color: '#f39c12' },
  button: { backgroundColor: 'green', padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
