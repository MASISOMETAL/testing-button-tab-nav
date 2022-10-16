import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { ChangeTitle } from "../../store/actions";

const Stack2Pantalla2 = ({navigation}) =>{

    const title1 = useSelector((state) => state.mensagesReducer.title);
    const saludo1 = useSelector((state) => state.mensagesReducer.saludo);
    const descripcion1 = useSelector((state) => state.mensagesReducer.description);
    const cantidad1 = useSelector((state) => state.mensagesReducer.cantidad);

    const dispatch = useDispatch();

    const onHandleScreen = () =>{
        navigation.navigate("Pantallita 3")
        dispatch(ChangeTitle({title:"Stack 2 - Pantallita 3", saludo: "Venimos de la pantalla 2"}))
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onHandleScreen}
                >
                    <Text style={styles.textBoton}>Stack 2 Pantalla 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfoTitle}>{title1}</Text>
                <Text style={styles.textInfo}>{saludo1}</Text>
                <Text style={styles.textInfo}>{descripcion1}</Text>
                <Text style={styles.textInfo}>{cantidad1}</Text>
            </View>
        </View>
    )
}

export default Stack2Pantalla2;