import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

import NotesContext from "./hooks/notesContext";

import { useState } from "react";

import { StickyNotes } from "./components/StickyNotes";

interface NotesProps {
  title: string,
  description: string
}

function App() {

  const [notes, setNotes] = useState<NotesProps[]>([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Header />
      <Hero />
      <StickyNotes />
    </NotesContext.Provider>
  );
}

export default App;
