import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createEntry(note) {
  return (
    <Note
      key={note.key}
      emoji={note.title}
      content={note.content}
    />
  );
}




function App() {
  return (
    <div>
      <Header />
      {notes.map(createEntry)}
      <Footer />
    </div>
  );
}

export default App;
