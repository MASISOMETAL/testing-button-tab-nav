import React, {useState} from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { AddItemsFireBase } from "../../store/actions";

const Stack1Pantalla1 = ({navigation}) =>{

    const [state, setState] = useState({
        name: "",
        mail: "",
        cel: "",
    })

    const dispatch = useDispatch();

    const test = () =>{
        dispatch(AddItemsFireBase(state));
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Ingresa tu nombre"
                    onChangeText={(text) => setState({...state, name : text})}
                    value={state.name}

                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Ingresa tu Correo"
                    onChangeText={(text) => setState({...state, mail : text})}
                    value={state.mail}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Ingresa tu Numero de cel"
                    onChangeText={(text) => setState({...state, cel : text})}
                    value={state.cel}
                />
            </View>
            
            <View style={styles.containerButton}>
                <TouchableOpacity 
                    style={styles.button}
                    //onPress={() => null}
                    onPress={test}
                >
                    <Text style={styles.textButton}>Ingresa</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Stack1Pantalla1;