import React from "react";


function Editor(props){
    const handlerChangeEditor = (evt) =>{
        props.handlerChange(evt.target.value)
    }
    return(
        <>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">{props.text}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows={props.rows} onChange={handlerChangeEditor} value={props.value}></textarea>
                {props.comp}
            </div>
        </>
    )
}

export default Editor;