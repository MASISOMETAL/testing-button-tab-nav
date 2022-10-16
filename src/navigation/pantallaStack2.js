import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack2Pantalla1, Stack2Pantalla2, Stack2Pantalla3 } from "../screens";

const Stack = createNativeStackNavigator();

const PantallaStack2 = () =>{
    return(
        <Stack.Navigator initialRouteName="Pantallita 1">
            <Stack.Screen 
                name="Pantallita 1" 
                component={Stack2Pantalla1}
                options={{
                    title: "Stack 2 - Pantalla 1",
                }}
            />
            <Stack.Screen 
                name="Pantallita 2" 
                component={Stack2Pantalla2}
                options={{
                    title: "Stack 2 - Pantalla 2",
                }}
            />
            <Stack.Screen 
                name="Pantallita 3" 
                component={Stack2Pantalla3}
                options={{
                    title: "Stack 2 - Pantalla 3",
                }}
            />
        </Stack.Navigator>
    )
}

export default PantallaStack2;