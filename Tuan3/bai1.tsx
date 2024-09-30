import React from 'react';
import { Text, View, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

const YourApp = () =>{
  return(
    <View style={{flex:1}}>
      <View style={{flex: 3, backgroundColor: '#00CCF9' ,alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 100, width: 100, borderRadius: 90, borderColor: 'black', borderWidth: 9}}></View>
      </View>
      <View style={{flex:1, backgroundColor: '#00CCF9', alignItems: 'center'}}>
        <Text style={{backgroundColor: '#00CCF9', fontWeight: 700}}>GROW</Text>
        <Text style={{backgroundColor: '#00CCF9', fontWeight: 700}}>YOUR BUSINESS</Text>
      </View>
      <View style={{flex:1, backgroundColor: '#00CCF9', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{backgroundColor: '#00CCF9', fontWeight: 700,}}>We will help you to grow your business using online sever</Text>
        </View>   
      <View style={{flex:2, backgroundColor: '#00CCF9', flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
        <View View style={{backgroundColor: 'yellow', padding: 10, borderRadius: 10, marginRight: 10}}>Login</View>
        <View style={{backgroundColor: 'yellow', padding: 10, borderRadius: 10, marginLeft: 10 }}>Sigup</View>
      </View>
    </View>
  );
}; 
export default YourApp;
