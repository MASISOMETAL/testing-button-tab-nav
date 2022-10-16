import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Stack3Pantalla2 = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Pantallita 3")}
                >
                    <Text style={styles.textBoton}>Stack 2 Pantalla 3</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Stack3Pantalla2;