import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ product }) => {
  const navigater = useNavigation();
  return (
    <View style={styles.card} onClick={() => navigater.navigate("ProductDetail", { product })}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.size}>{product.size || "M"}, Giá</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAddToCart(product)}
          activeOpacity={0.7} // Hiệu ứng nhấn
        >
          <Ionicons name="add" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 12, // Giảm padding tí cho gọn
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08, // Bóng nhẹ hơn cho thanh thoát
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // Giảm elevation cho nhẹ
    borderWidth: 0, // Bỏ borderColor cho tối giản
  },
  image: {
    width: "100%",
    height: 90, // Tăng tí để ảnh nổi bật hơn
    resizeMode: "contain",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "600", // Giảm bold tí cho thanh thoát
    textAlign: "center",
    color: "#2D2D2D", // Xám đậm nhẹ, không quá đen
  },
  size: {
    fontSize: 13, // Giảm tí cho tinh tế
    color: "#6B7280", // Xám nhạt, nhẹ nhàng
    marginBottom: 8,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5, // Giảm marginTop cho gọn
  },
  price: {
    fontSize: 20, // Tăng size để nổi bật
    fontWeight: "700",
    color: "#D35400", // Cam cháy cho giá thật sự nổi
  },
  addButton: {
    backgroundColor: "#E07C4A", // Nâu cam hợp vibe cà phê
    width: 40, // Tăng size nút cho dễ nhấn
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2, // Bóng nhẹ cho nút nổi
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
});
export default ProductCard;
