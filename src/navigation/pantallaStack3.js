import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack3Pantalla1, Stack3Pantalla2, Stack3Pantalla3 } from "../screens";

const Stack = createNativeStackNavigator();

const PantallaStack3 = () =>{
    return(
        <Stack.Navigator initialRouteName="Pantallita 1">
            <Stack.Screen 
                name="Pantallita 1" 
                component={Stack3Pantalla1}
                options={{
                    title: "Stack 3 - Pantalla 1",
                }}
            />
            <Stack.Screen 
                name="Pantallita 2" 
                component={Stack3Pantalla2}
                options={{
                    title: "Stack 3 - Pantalla 2",
                }}
            />
            <Stack.Screen 
                name="Pantallita 3" 
                component={Stack3Pantalla3}
                options={{
                    title: "Stack 3 - Pantalla 3",
                }}
            />
        </Stack.Navigator>
    )
}

export default PantallaStack3;