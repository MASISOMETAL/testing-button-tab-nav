import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack1Pantalla1, Stack1Pantalla2, Stack1Pantalla3 } from "../screens";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const PantallaStack1 = () =>{
    return(
        <Stack.Navigator initialRouteName="Pantallita 1">
            <Stack.Screen 
                name="Pantallita 1" 
                component={Stack1Pantalla1}
                options={({navigation}) => ({
                    title: "Stack 1 - Pantalla 1",
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Pantallita 2")}>
                            <Ionicons name="arrow-forward-circle" size={36} color={Colors.black} />
                        </TouchableOpacity>
                    )
                })}
            />
            <Stack.Screen 
                name="Pantallita 2" 
                component={Stack1Pantalla2}
                options={({navigation}) => ({
                    title: "Stack 1 - Pantalla 2",
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Pantallita 3")}>
                            <Ionicons name="arrow-forward-circle" size={36} color={Colors.black} />
                        </TouchableOpacity>
                    )
                })}
            />
            <Stack.Screen 
                name="Pantallita 3" 
                component={Stack1Pantalla3}
                 options={{
                    title: "Stack 1 - Pantalla 3",
                }}
            />
        </Stack.Navigator>
    )
}

export default PantallaStack1;