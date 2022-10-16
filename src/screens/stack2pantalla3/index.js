import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Stack2Pantalla3 = () =>{

    const title1 = useSelector((state) => state.mensagesReducer.title);
    const saludo1 = useSelector((state) => state.mensagesReducer.saludo);
    const descripcion1 = useSelector((state) => state.mensagesReducer.description);
    const cantidad1 = useSelector((state) => state.mensagesReducer.cantidad);

    return(
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfoTitle}>{title1}</Text>
                <Text style={styles.textInfo}>{saludo1}</Text>
                <Text style={styles.textInfo}>{descripcion1}</Text>
                <Text style={styles.textInfo}>{cantidad1}</Text>
            </View>
        </View>
    )
}

export default Stack2Pantalla3;