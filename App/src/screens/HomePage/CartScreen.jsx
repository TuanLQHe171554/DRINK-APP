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
  { key: 'first', title: 'Đang giao' }, // Đổi thành tiếng Việt cho hợp vibe
  { key: 'second', title: 'Lịch sử' },
];

export const CartScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Giỏ hàng</Text>
        <Icon name="shopping-cart" size={26} color="#FFF" /> {/* Đổi icon "stars" thành "shopping-cart" */}
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            activeColor="#D35400" // Cam cháy cho tab đang chọn
            inactiveColor="#6B7280" // Xám nhạt cho tab không chọn
            labelStyle={styles.tabLabel} // Style cho chữ trong tab
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Trắng sữa đồng bộ với HomeScreen
  },
  title: {
    backgroundColor: '#E07C4A', // Nâu cam thay cho đỏ, hợp vibe cà phê
    paddingVertical: 15, // Tăng padding dọc cho thoáng
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Thêm bóng đổ cho title nổi lên
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF', // Chữ trắng nổi trên nền nâu cam
  },
  tabBar: {
    backgroundColor: '#FFF', // Nền trắng cho TabBar
    elevation: 2, // Bóng nhẹ cho TabBar
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  indicator: {
    backgroundColor: '#D35400', // Cam cháy cho gạch dưới tab
    height: 3, // Tăng chiều cao gạch dưới cho nổi bật
  },
  tabLabel: {
    fontSize: 15, // Chữ to vừa đủ
    fontWeight: '600', // Đậm vừa phải
    textTransform: 'none', // Bỏ in hoa mặc định
  },
});