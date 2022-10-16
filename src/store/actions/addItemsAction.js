import { addItemsTypes } from "../types";
import { URL_API } from "../../constants/firebase";

export const AddItemsFireBase = (state) => {
    const { name, mail, cel} = state;
    return async () => {
        try {
            const response = await fetch(`${URL_API}/register.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: Date.now(),
                    name: state.name,
                    mail: state.mail,
                    cel: state.cel,
                })
            })

            const result = await response.json();
            //console.warn(result);
            /*dispatch({
                result: result,
            })*/
        } catch (error) {
            console.log(error.message);
        }
    }
}