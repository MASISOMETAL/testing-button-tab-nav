import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PantallaStack1 from "./pantallaStack1";
import PantallaStack2 from "./pantallaStack2";
import PantallaStack3 from "./pantallaStack3";
import { Colors } from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <BottomTab.Navigator 
            initialRouteName="p1"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontStyle: "Inter-Bold",
                }
            }}
        >
            <BottomTab.Screen 
                name="p1" 
                component={PantallaStack1}
                options={{
                    title: "Stack 1",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? "basket" : "basket-outline"}
                            size={22}
                            color={Colors.secondary}  
                        />
                    )
                }}
            />
            <BottomTab.Screen 
                name="p2" 
                component={PantallaStack2}
                options={{
                    title: "Stack 2",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? "battery-full-sharp" : "battery-full"}
                            size={24}
                            color={Colors.secondary}  
                        />
                    )
                }}
            />
            <BottomTab.Screen 
                name="p3" 
                component={PantallaStack3}
                options={{
                    title: "Stack 3",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? "beer" : "beer-outline"}
                            size={22}
                            color={Colors.secondary}  
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Tabs;