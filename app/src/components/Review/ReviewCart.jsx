import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReviewCard = ({ review }) => {
  const { avatar, name, rating, comment, date } = review;

  return (
    <View style={styles.container}>
      {/* Thông tin người dùng */}
      <View style={styles.header}>
        <FastImage source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </View>

      {/* Nội dung đánh giá */}
      <Text style={styles.comment}>{comment}</Text>

      {/* Xếp hạng sao */}
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="star"
            size={20}
            color={index < rating ? "#FFA500" : "#D3D3D3"}
          />
        ))}
      </View>

      {/* Ngày đánh giá */}
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

// **Styles**
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  comment: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default ReviewCard;
