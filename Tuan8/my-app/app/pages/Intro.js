import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const Intro = ({ navigation }) => {

    const [valueName, setValueName] = useState('')

    return (
        <View style={styles.container} >
            <Text>MANGAGER TODO </Text>

            <TextInput
                value={valueName}
                onChangeText={text => setValueName(text)}
                style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
            >

            </TextInput>

            <TouchableOpacity
                style={styles.btnGetStart}
                onPress={() => navigation.navigate("home", { valueName: valueName })}
            >
                <Text>
                    GET START
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Intro


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnGetStart: {
        padding: 20,
        backgroundColor: "green"
    }
});