import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [bikes, setBikes] = useState([]);
  const [newBike, setNewBike] = useState({ name: '', price: '', image: '' });

  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    try {
      const response = await axios.get('https://64583af20c15cb14821a1b23.mockapi.io/api/cuoiKy');
      setBikes(response.data);
    } catch (error) {
      console.error('Error fetching bikes:', error);
    }
  };

  const addBike = async () => {
    if (!newBike.name || !newBike.price || !newBike.image) {
      Alert.alert('Please fill all fields');
      return;
    }

    try {
      const response = await axios.post('https://64583af20c15cb14821a1b23.mockapi.io/api/cuoiKy', newBike);
      setBikes([...bikes, response.data]);
      setNewBike({ name: '', price: '', image: '' });
    } catch (error) {
      console.error('Error adding bike:', error);
    }
  };

  const renderBikeItem = ({ item }) => (
    <View style={styles.bikeItem}>
      <TouchableOpacity style={styles.favoriteIcon}>
        <Text>♡</Text>
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>The world's Best Bike</Text>
      <Text style={styles.headerText}>Tran Huu Phuc</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Bike Name"
          value={newBike.name}
          onChangeText={(text) => setNewBike({ ...newBike, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={newBike.price}
          onChangeText={(text) => setNewBike({ ...newBike, price: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Image URL"
          value={newBike.image}
          onChangeText={(text) => setNewBike({ ...newBike, image: text })}
        />
        <Button title="Add Bike" onPress={addBike} />
      </View>
      
      <FlatList
        data={bikes}
        renderItem={renderBikeItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.bikeList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF007F',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  bikeList: {
    paddingBottom: 20,
  },
  bikeItem: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
  },
  bikeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bikePrice: {
    fontSize: 14,
    color: '#FF7F00',
  },
});
