import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#d1d1d1",
    },
    containerInput:{
        alignItems: "center",
    },
    input:{
        height: height * 0.06,
        width: width * 0.8,
        backgroundColor: Colors.white,
        marginVertical: 5,
        borderRadius: 10,
    },
    containerButton:{
        alignItems: "center",
        marginTop: height * 0.02,
    },
    button:{
        backgroundColor: Colors.stack1,
        padding: width * 0.03,
    },
    textButton:{
        fontFamily: "Inter-Bold",
    },
})