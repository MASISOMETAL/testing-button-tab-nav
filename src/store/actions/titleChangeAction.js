import { titleChangeTypes } from "../types";

const {NEW_TITLE} = titleChangeTypes;

export const ChangeTitle = ({title, saludo}) => ({
    type: NEW_TITLE,
    title: title,
    saludo: saludo,
})