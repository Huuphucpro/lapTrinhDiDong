import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = ({ route, navigation }) => {
    const { valueName } = route.params;

    const [text, setText] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAPI = async () => {
        try {
            const res = await fetch("https://64583af20c15cb14821a1b23.mockapi.io/api/cuoiKy");
            const jsonData = await res.json();
            setData(jsonData);
            setLoading(false);

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchAPI();
    }, []);

    useEffect(() => {

        if (route.params?.updated) {
            fetchAPI();
        }
    }, [route.params]);



    // ham them todo
    const addItem = async () => {
        if (text.trim() === "") return;
        try {
            const newItem = {
                text: text
            };
            const res = await fetch("https://64583af20c15cb14821a1b23.mockapi.io/api/cuoiKy", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(newItem)
            });

            const add = await res.json();

            setData([...data, add]);

            setText("");

        } catch (error) {
            console.error(error);
        }
    };


    // hàm xoá
    const deleteItem = async (id) => {
        Alert.alert(
            "Cảnh báo",
            "Bạn chắc chắn muốn xoá todo?",
            [
                {
                    text: "KHÔNG",
                    style: "cancel"
                },
                {
                    text: "XOÁ",
                    style: "destructive",
                    onPress:
                        async () => {

                            try {
                                await fetch(`https://64583af20c15cb14821a1b23.mockapi.io/api/cuoiKy/${id}`, {
                                    method: "DELETE"
                                });
                                setData(data.filter(item => item.id != id));
                            } catch (error) {
                                console.error(error);
                            }
                        }

                }
            ]
        )








    }





    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Text>Xin chào : {valueName}</Text>

            <ScrollView>
                <Text>
                    LIST TO DO
                </Text>
                <View>
                    {
                        loading ?
                            <Text>Loading...</Text>
                            :
                                data.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={styles.todo}
                                            onPress={() => { navigation.navigate("update", { item }) }}

                                        >
                                            <Text style={styles.text}>{index + 1}. {item.text}</Text>
                                            <View>
                                                <TouchableOpacity
                                                    style={styles.btnDel}
                                                    onPress={() => deleteItem(item.id)}
                                                >
                                                    <Text style={{ color: "#fff" }}>DELETE</Text>

                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                    }
                </View>
            </ScrollView>




            <View style={styles.boxAdd}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={(text) => setText(text)}
                    placeholder='nhap text'
                >

                </TextInput>
                <TouchableOpacity style={styles.btnAdd} onPress={addItem}>
                    <Text style={{ color: "#fff" }}>ADD</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
        paddingBottom: 50,
        position: "relative"
    },
    boxAdd: {
        width: "100%",
        position: "absolute",
        bottom: 10,
        left: 15,
        flexDirection: "row",
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 15
    },
    btnAdd: {
        width: 80,
        height: 40,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    todo: {
        padding: 10,
        width: "100%",
        backgroundColor: "#eaeaea",
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 19,
        fontWeight: "600",
    },
    btnDel: {
        padding: 10,
        backgroundColor: "red"
    }






})