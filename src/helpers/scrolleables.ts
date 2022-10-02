import { IconType } from "react-icons";
import { AiFillBook, AiFillFileText, AiFillHome, AiFillContacts } from "react-icons/ai";
const scrolleables : itemsNav[] = [
    {name :'Home', icon : AiFillHome  },
    { name :"Conocimientos", icon :AiFillBook},
    {name :"Proyectos",icon : AiFillFileText},
    {name : "Contacto", icon : AiFillContacts}
]

type itemsNav = {
    name : string,
    icon : IconType
}
export default scrolleables;