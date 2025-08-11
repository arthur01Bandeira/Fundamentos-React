import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export  function Home() {
    
    
    return (

        <View style={style.container}>
            <Text style={style.title}>Lista de Compras</Text>
            <Text style={style.todaysDate}>Quarta-feira, 17 de Julho de 2025</Text>

            <View style={style.form}>
             <TextInput 
                style={style.input} 
                placeholder="Nome do Produto"
                placeholderTextColor="#BDBABA"
                keyboardType="default"
            ></TextInput>

            <TouchableOpacity   
                style={style.button}>
                <Text style={style.textButton}>+</Text>
            </TouchableOpacity>
            </View>
            <Text style={style.listTitle}>Compras Pendentes</Text>
            <View style={style.list}>
                <Text style={style.listEmptyText}>Comprou todos os produtos? Adicione produtos a sua lista de compras</Text>
            </View>
        </View>

    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA",
        padding: 24,
    },
    title: {
        color:"#000",
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 28.8,
        marginTop: 48,
    },

    listTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom:16,
    },
    listEmptyText: {
        fontSize: 16,
        lineHeight: 19.2,
        fontWeight: "normal",
    },

    todaysDate: {
        color:"#000",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 28.8,
    },

    input: {
        flex: 1,
        height: 56,
        padding: 16,
        borderRadius: 5,            
        backgroundColor: "#FFF",
        marginRight: 16, 
    },
    form: {
        width: "100%",
        marginBottom:36,
        flexDirection: "row",
        marginTop: 18,
    },

    button: { 
        height: 56,
        width: 56,
        backgroundColor: "#31C667",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"

    },

    textButton: {
        color: "#fff",
        fontSize: 24,
    },
    list: {
        flex:1, 
        justifyContent: "center"

    }
})