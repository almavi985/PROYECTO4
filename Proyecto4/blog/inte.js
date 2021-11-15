import { useState } from "react";
import "./style.css";
import { blog } from "./blog";
import { dato } from "./blog";
export default function inte() {
    const[msj,setmsj]=useState("Hola amigos");
    const changed=(e)=>{
        setmsj(e.target.value);
    };

    return (
        <div className="inte">
            <input type="text" onChange={changed} value={msj}/>
            <dato msj={msj}/>

            <dato msj="Aloo"></dato>
        </div>
    )
}


