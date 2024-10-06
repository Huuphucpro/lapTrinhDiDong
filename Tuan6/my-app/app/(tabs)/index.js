import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

// Component hiển thị từng sản phẩm
const Item = ({ title, shop, image }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text style={styles.shop}>{shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

// Component chính
const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Gọi API khi component được render lần đầu
    fetch('https://64583af20c15cb14821a1b23.mockapi.io/api/cuoiKy')
      .then(response => {
        console.log('API Response Status:', response.status); // Log trạng thái của response
        return response.json();
      })
      .then(data => {
        console.log('Fetched Data:', data); // In ra dữ liệu lấy được
        setProducts(data); // Lưu dữ liệu vào state
        setLoading(false); // Tắt trạng thái loading
      });
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Item title={item.title} shop={item.shop} image={item.image} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// Style cho component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: 'green',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  shop: {
    fontSize: 12,
    color: '#888',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  chatText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductList;