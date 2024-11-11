import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.imageContainer}>
      <Image
          source = {require('../assets/pngsc1.png')} 
          style={styles.image}
        />
      </View>
      <Text style={styles.shopName}>POWER BIKE SHOP</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SC2')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  titleText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    backgroundColor: '#FDEDE8',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  shopName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
