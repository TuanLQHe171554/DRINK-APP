import { MaterialIcons as Icon } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Transporting } from '../../components/Cart/Transporting';
import ProductList from '../../components/ProductList';

const renderScene = SceneMap({
  first: Transporting,
  second: ProductList,
});

const routes = [
  { key: 'first', title: 'Transporting' },
  { key: 'second', title: 'History' },
];

export const CartScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: 'white' }}>Shopping Cart</Text>
        <Icon name="stars" size={24} color="#000" />
      </View>
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

    </View>
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
    flex: 1
  },
})