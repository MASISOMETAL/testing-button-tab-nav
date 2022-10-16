import React from "react";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack2Pantalla1, Stack2Pantalla2, Stack2Pantalla3 } from "../screens";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { ChangeTitle } from "../store/actions";

const Stack = createNativeStackNavigator();

const PantallaStack2 = () =>{

    const title1 = useSelector((state) => state.mensagesReducer.title);
    const dispatch = useDispatch();

    return(
        <Stack.Navigator initialRouteName="Pantallita 1">
            <Stack.Screen 
                name="Pantallita 1" 
                component={Stack2Pantalla1}
                options={{
                    title: title1,
                }}
            />
            <Stack.Screen 
                name="Pantallita 2" 
                component={Stack2Pantalla2}
                options={({navigation}) => ({
                    title: title1,
                    headerLeft: () => ( 
                        <TouchableOpacity onPress={() => {dispatch(ChangeTitle({title:"Stack 2 - Pantallita 1", saludo: "Volvimos a la pantalla 1"})), navigation.goBack()}}>
                            <Ionicons name="arrow-back" size={36} color={Colors.black} />
                        </TouchableOpacity>
                    )
                })}
            />
            <Stack.Screen 
                name="Pantallita 3" 
                component={Stack2Pantalla3}
                options={({navigation}) => ({
                    title: title1,
                    headerLeft: () => ( 
                        <TouchableOpacity onPress={() => {dispatch(ChangeTitle({title:"Stack 2 - Pantallita 2", saludo: "Volvimos a la pantalla 2"})), navigation.goBack()}}>
                            <Ionicons name="arrow-back" size={36} color={Colors.black} />
                        </TouchableOpacity>
                    )
                })}
            />
        </Stack.Navigator>
    )
}

export default PantallaStack2;