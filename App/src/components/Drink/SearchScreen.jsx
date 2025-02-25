import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Checkbox, Button } from 'react-native-paper';

const DATA = [
  { id: '1', name: 'Cà Phê Cappuccino', price: '$3.99', image: 'https://chefjob.vn/wp-content/uploads/2020/07/cappuccino-cafe-cua-y.jpg' },
  { id: '2', name: 'Trà Xanh', price: '$2.50', image: 'https://image.tienphong.vn/w890/Uploaded/2025/rwbvhvobvvimsb/2021_12_16/uong-tra-xanh-moi-ngay-co-tot-khong-665x400-8524.jpg' },
  { id: '3', name: 'Sinh Tố Dứa', price: '$4.99', image: 'https://cdn.tgdd.vn/Files/2019/06/10/1172354/cach-lam-sinh-to-dua-ngon-ngat-ngay-uong-la-len-may-202201190929516504.jpg' },
  { id: '4', name: 'Nước Ép Cam', price: '$5.99', image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/2/19/cach-lam-nuoc-cam-ep-ngon-va-thom-ket-hop-voi-le-va-gung-5-1645248090817401855254.jpg' },
  { id: '5', name: 'Cà Phê Đen', price: '$2.99', image: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/https://cms-prod.s3-sgn09.fptcloud.com/bai_vietca_phe_den_bao_nhieu_calo_uong_nhieu_co_tot_khong_html_1_ebb28c9c42.png' }
];

const Stack = createNativeStackNavigator();

export const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const filteredData = DATA.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#000" style={{ marginRight: 10 }} />
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm thức uống"
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
          <Icon name="filter" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchBar: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 10, borderRadius: 8 },
  input: { flex: 1 },
  item: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  image: { width: 50, height: 50, marginRight: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  button: { marginTop: 20 }
});
