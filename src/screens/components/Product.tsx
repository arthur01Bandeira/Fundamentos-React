import { ProgressBarAndroidComponent, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props{
    name: string;
    onRemove: () => void;
}

export function Product({name, onRemove}: Props){

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: "white",
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5, 
    },
    button: {
        width: 56,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    
    name: {
        flex: 1,
        fontSize: 16,
        lineHeight: 19.2,
        marginLeft: 5,
        marginRight: 5,
    }, 

    buttonText: {
        fontSize: 24,
        color: "white",
    }
})