import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Product } from "../components/Product";

export  function Home() {
    function handleAddProduct(){

    }

    const products = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Farinha de Trigo",
    "Açúcar",
    "Sal",
    "Óleo de Soja",
    "Leite",
    "Ovos",
    "Pão",
    "Café",
    "Chá",
    "Manteiga",
    "Queijo",
    "Presunto",
    "Frango",
    "Carne Bovina",
    "Peixe",
    "Frutas",
    "Legumes",
    "Verduras",
    "Batata",
    "Cebola",
    "Alho",
    "Tomate",
    "Cenoura",
    "Banana",
    "Maçã",
    "Laranja",
    "Uva",
    "Refrigerante",
    "Suco",
    "Água Mineral",
    "Biscoitos",
    "Cereais",
    "Molho de Tomate",
    "Condimentos",
    "Iogurte",
    "Sorvete",
    "Chocolate"
  ];

    function handleProductRemove(name: String){
        console.log(`Você cliclou no botão de remover ${name}` )
    }
    
    
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
            />

            <TouchableOpacity   
                style={style.button} 
                onPress={handleAddProduct}>
                <Text style={style.textButton}>+</Text>
            </TouchableOpacity>
        </View>
    
        <Text style={style.listTitle}>Compras Pendentes</Text>
        
        <View style={style.list}>
            <FlatList
                data={[]} // Substitua por "products" se for sua lista de produtos
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Product 
                        name={item} 
                        onRemove={() => handleProductRemove(item)} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={style.listEmptyText}>
                        Comprou todos os produtos? Adicione produtos à sua lista de compras
                    </Text>
                )}
            />
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
        justifyContent: "center",

    },

    textButton: {
        color: "#fff",
        fontSize: 24,
    },
    list: {
        flex:1, 
        justifyContent: "center",
    }
})