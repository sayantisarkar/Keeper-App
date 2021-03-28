import React from "react";

function CreateArea() {

    function addNote(){
      return console.log("added note");
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
