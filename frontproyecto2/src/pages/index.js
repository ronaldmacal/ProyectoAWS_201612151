import React, { useState } from "react";
import NavBar from "../components/NavBar.js";
import Editor from "../components/Editor.js";

function Index(){
    const [ value, setValue ] = useState("")

    const changeText = (valueA) => {
        setValue(valueA)
    }

    const buttonTraducir = <button type="button" class="btn btn-success">Traducir</button>
    const buttonLimpiar = <button type="button" class="btn btn-dark">Limpiar</button>

    return(
        <>
            <NavBar />
            <h1>Proyecto 2 - MIA</h1>
            <Editor text={"Editor entrada"} handlerChange={changeText} rows={10} comp= {buttonTraducir}/>
            <Editor text={"Consola "} value={value} rows={5} comp= {buttonLimpiar}/>
        </>
    )
}

export default Index;