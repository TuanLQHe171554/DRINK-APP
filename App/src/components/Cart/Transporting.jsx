import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NotFound } from './NotFound';

export const Transporting = () => {
  return (
    <View style={styles.container}>
      <NotFound />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Trắng sữa đồng bộ
    justifyContent: 'center',
    alignItems: 'center',
  },
});