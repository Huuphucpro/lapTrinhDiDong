import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const Update = ({route, navigation}) => {
    
    const { item }= route.params;

    const [valueUp, setValueUp] = useState(item.text);

    const updateItem = async () => {
        if (valueUp.trim() === "") {
            Alert.alert("Lỗi", "Vui lòng nhập giá trị hợp lệ");
            return;
        }

        try {
            const updatedItem =  { text: valueUp };

            const res = await fetch(`https://64583af20c15cb14821a1b23.mockapi.io/api/cuoiKy/${item.id}`, {
                method: "PUT", 
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(updatedItem)
            });

            if (res.ok) {
                navigation.navigate("home",{updated : true});
            } else {
                Alert.alert("Lỗi", "Cập nhật không thành công");
            }

        } catch (error) {
            console.error( error);
        }
    };


    return (
        <View style={styles.container}>
            <Text>Update</Text>

            <View>
                <TextInput
                    value={valueUp}
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={setValueUp}
                >

                </TextInput>

                <TouchableOpacity style={styles.btnGetUpdate} onPress={updateItem}>
                    <Text style={styles.textupdate}>UPDATE</Text>
                </TouchableOpacity>
            </View>




        </View>
    )
}

export default Update;

const styles = StyleSheet.create({
    container: {
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnGetUpdate: {
        padding: 20,
        backgroundColor: "#c1b02e",
        marginTop:50,
    },
    textupdate:{
        fontSize:18,
        fontWeight:"500",
        textAlign:"center",
        color:"#fff"
    }
});