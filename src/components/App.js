import React,{useState} from "react"
import {HashRouter, Route, Link, Redirect} from 'react-router-dom';
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"
import "../styles.css"


const App=()=>{
    const [notes,setNotes]=useState([]);
    const addNote=(newNote)=>{
        setNotes((previous)=>{
            return [...previous,newNote];
        });
    };

    const deleteNote=(id)=>{
        setNotes(previousNotes=>{
            return previousNotes.filter((noteItem,index)=>{
                return index!==id;
            });
        });
    };

    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem,index)=>{
                return (
                <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content} 
                    onRemove={deleteNote} />
                );
            })}
            <Footer />
        </div>
    )
}

export default App;


// {notes.map((n)=>{
//     return <Note 
//     key={n.key}
//     title={n.title}
//     content={n.content} />
// })}