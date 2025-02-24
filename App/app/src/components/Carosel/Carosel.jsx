import React, { useEffect, useState } from 'react'
import { Image, ScrollView, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export const Carosel = ({ DATA }) => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    if (imageIndex < DATA.length - 1) {
      const interval = setInterval(() => {
        setImageIndex(prevIndex => prevIndex + 1)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [imageIndex])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: DATA[imageIndex] }} style={styles.image} />
        {
          imageIndex > 0 && (
            <MaterialIcons
              name='navigate-next'
              style={[styles.icon, { right: 10 }]}
              size={24}
              color='#fff'
              onPress={() => setImageIndex(prevIndex => prevIndex + 1)}
            />
          )
        }

        {
          imageIndex < DATA.length - 1 && (
            <MaterialIcons
              name='navigate-before'
              style={[styles.icon, { left: 10 }]}
              size={24}
              color='#fff'
              onPress={() => setImageIndex(prevIndex => prevIndex - 1)}
            />
          )
        }

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  icon: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -12 }],
  },
})


