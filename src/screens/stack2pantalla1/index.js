import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Stack2Pantalla1 = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Pantallita 2")}
                >
                    <Text style={styles.textBoton}>Stack 2 Pantalla 2</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Stack2Pantalla1;