import * as React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Feather } from '@expo/vector-icons';
import { Drinks } from '../../components/Drinks/Drinks';  // Cập nhật component để phù hợp với thức uống
import { CoffeeTutorial } from '../../components/Drinks/CoffeeTutorial';  // Video pha chế
import { Tips } from '../../components/Drinks/Tips';  // Mẹo về cà phê, nước

// Các cảnh đổi tên phù hợp với bán nước
const renderScene = SceneMap({
  first: Drinks,  // Hiển thị các loại nước, cà phê
  second: CoffeeTutorial,  // Video pha chế, giới thiệu thức uống
  third: Tips,  // Mẹo về cà phê, trà, nước ép, v.v.
});

// Các tab được cập nhật cho quán cà phê
const routes = [
  { key: 'first', title: 'Thức Uống' },
  { key: 'second', title: 'Video Hướng Dẫn' },
  { key: 'third', title: 'Mẹo' },
];

export const CafeScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.title}>
        <Feather name='search' size={20} color='gray' />
        <Text style={{ marginHorizontal: 20, color: 'gray' }}>300+ Thức Uống</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{ backgroundColor: '#fff' }}
              indicatorStyle={{ backgroundColor: '#ff7979', height: 2 }}
              activeColor={'black'}
              inactiveColor={'#4b4b4b'}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
  },
  container: {
    flex: 1
  },
});
