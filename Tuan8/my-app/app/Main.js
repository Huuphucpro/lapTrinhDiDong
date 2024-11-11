import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Intro from './pages/Intro'

const Main = ({navigation}) => {
    return (
        <View  style={styles.container} >
            <StatusBar style="auto" />
            <Intro navigation={navigation}/>
        </View>
    )
}

export default Main


const styles = StyleSheet.create({
    container: {
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
});