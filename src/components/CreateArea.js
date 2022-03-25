import React,{useState} from "react";

const CreateArea=(props)=>{
    const [note,setNote]=useState({
        title:"",
        content:""
    });

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setNote((previousValue)=>{
            return{
                ...previousValue,
                [name]:value
            };
        });
    }

    const submitNote=(event)=>{
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()
    }
    return(
        <div>
            <form>
                <input name="title" onChange={handleChange} type="text" placeholder="Note Title..." value={note.title} />
                <textarea name="content" onChange={handleChange} placeholder="Note..." rows="3" value={note.content} />
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    )
}

export default CreateArea;