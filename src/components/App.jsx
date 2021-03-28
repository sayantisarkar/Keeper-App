import React from "react";
import Header from "./Header";
import Footer from "./Footer";
//import Note from "./Note";
//import notes from "../notes.js"
import CreateArea from "./CreateArea"

function App(){
    // return(<div>
    //     <Header/>
    //     {notes.map(note => <Note key={note.key} title={note.title} content={note.content}/>)}
    //     <Footer />
    // </div>);

    //Challenge 3
    return (
        <div>
         <Header/>
         <CreateArea />
         <Footer />   
        </div>);
    
}

export default App;



