import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes.js"
import CreateArea from "./CreateArea";

function App(){
    // return(<div>
    //     <Header/>
        //  {notes.map(note => <Note key={note.key} title={note.title} content={note.content}/>)}
    //     <Footer />
    // </div>);

    //Challenge 3
    const [notes, setNotes]= useState([]);

    function addNote(note){
      setNotes(prevNotes=>{
         return  [...prevNotes, note  ];
      });
    }

    function deleteNote(id){
        setNotes(prevNotes=>{
           return prevNotes.filter((prevNote,index)=>{
               return index !== id;
           })
        });
      }


    return (
        <div>
         <Header/>
         <CreateArea onAdd={addNote}/>
         {notes.map((note,index)=>{
            return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>;
         })}
         <Footer />   
        </div>);
    
}

export default App;



