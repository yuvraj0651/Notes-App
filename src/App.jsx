import { useEffect, useState } from 'react'
import './App.css'
import NotesForm from './components/NotesForm'
import NotesList from './components/NotesList'
import Search from './components/Search/Search';

function App() {

  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("STORAGE_NOTES")) || [];
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSelectingValue, setIsSelectingValue] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const filteredNotesItems = notes.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.content.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {

    if (isSelectingValue) {
      setIsSelectingValue(false);
      return;
    }

    if (search.trim() === "") {
      setSuggestions([]);
      return;
    }
    setSuggestions(filteredNotesItems);
  }, [search, isSelectingValue , filteredNotesItems])

  const handleSelect = (value) => {
    setIsSelectingValue(true);
    setSearch(value);
    setSuggestions([]);
  };

  useEffect(() => {
    localStorage.setItem("STORAGE_NOTES", JSON.stringify(notes))
  }, [notes]);

  const addNoteHandler = () => {
    if (!title || !content) {
      alert("Please Fill Both Fields");
      return;
    }

    let newNote = {
      id: Date.now(),
      title: title,
      content: content
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  const deleteNotes = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  }

  const updateNotes = () => {
    setNotes(
      notes.map((item) => {
        return item.id === editingId ? { ...item, title, content } : item;
      })
    );

    setEditingId(null);
    setTitle("")
    setContent("")
  };

  return (
    <>
      <div className="notes-app section-padding">
        <div className="notes-app--heading border border-[#ccc] shadow-sm shadow-[#ccc] bg-white py-2 inline-block flex justify-center w-[15rem] mx-auto rounded-[7px]">
          <h4 className='uppercase text-center font-[500] m-0 text-[1.4rem] tracking-wide'>Notes App</h4>
        </div>
        <Search
          search={search}
          setSearch={setSearch}
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          handleSelect={handleSelect}
          isSelectingValue={isSelectingValue}
          setIsSelectingValue={setIsSelectingValue}
        />
        <NotesForm
          addNoteHandler={addNoteHandler}
          updateNotes={updateNotes}
          title={title}
          setTitle={setTitle}
          setContent={setContent}
          content={content}
          editingId={editingId}
        />
        <NotesList
          notes={notes}
          deleteNotes={deleteNotes}
          updateNotes={updateNotes}
          handleEdit={handleEdit}
          filteredNotesItems={filteredNotesItems}
        />
      </div>
    </>
  )
}

export default App
