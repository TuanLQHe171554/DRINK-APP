import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Feather } from '@expo/vector-icons';
import { Drinks } from '../../components/Drinks/Drinks';
import { CoffeeTutorial } from '../../components/Drinks/CoffeeTutorial';
import { Tips } from '../../components/Drinks/Tips';

const renderScene = SceneMap({
  first: Drinks,
  second: CoffeeTutorial,
  third: Tips,
});

const routes = [
  { key: 'first', title: 'Thức Uống' },
  { key: 'second', title: 'Video Hướng Dẫn' },
  { key: 'third', title: 'Mẹo Hay' }, // Đổi "Mẹo" thành "Mẹo Hay" cho thân thiện hơn
];

export const CafeScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.title}>
        <Feather name="search" size={22} color="#6B7280" /> {/* Tăng size icon, màu xám nhạt */}
        <Text style={styles.titleText}>300+ Món Nước Ngon</Text> {/* Đổi text cho hợp vibe */}
      </TouchableOpacity>
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
            labelStyle={styles.tabLabel} // Style cho chữ tab
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Trắng sữa đồng bộ với các màn hình trước
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12, // Tăng padding dọc cho thoáng
    paddingHorizontal: 15,
    borderRadius: 10, // Bo góc mềm hơn
    marginHorizontal: 20,
    marginVertical: 15, // Thêm margin để cách đều
    shadowColor: '#000',
    shadowOpacity: 0.08, // Bóng nhẹ cho nổi
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  titleText: {
    marginHorizontal: 10, // Giảm margin ngang cho gọn
    color: '#374151', // Xám đậm nhẹ, dễ đọc
    fontSize: 16,
    fontWeight: '500',
  },
  tabBar: {
    backgroundColor: '#FFF',
    elevation: 2, // Bóng nhẹ cho TabBar
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  indicator: {
    backgroundColor: '#D35400', // Cam cháy nổi bật
    height: 3, // Gạch dưới dày hơn tí
  },
  tabLabel: {
    fontSize: 15,
    fontWeight: '600', // Chữ đậm vừa phải
    textTransform: 'none', // Bỏ in hoa mặc định
  },
});