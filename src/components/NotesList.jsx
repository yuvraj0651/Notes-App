import { FaThumbtack } from "react-icons/fa";

const NotesList = ({ notes, deleteNotes, handleEdit, filteredNotesItems }) => {

    if (notes.length === 0) return <h2 className="mt-6 tracking-wide text-center text-white text-lg font-[500]">Sorry No Notes Found....</h2>

    if(filteredNotesItems.length === 0){
        return(
            <h2 className="mt-6 tracking-wide text-center text-white text-lg font-[500]">No Data Found...</h2>
        )
    }

    return (
        <>
            <div className="notes-app-list mt-6">
                <div className="notes-app-list__inner">
                    <div className="notes-list__inner--heading border border-[#ccc] shadow-sm shadow-[#ccc] rounded-[4px] inline-block w-[10rem] py-2 bg-white">
                        <h4 className='text-center uppercase tracking-wide text-[0.9rem] font-[500]'>your notes</h4>
                    </div>
                    <div className="notes-app__inner--content mt-6">
                        {
                            filteredNotesItems.map((note) => (
                                <div key={note.id} className="single-note--card relative border border-[#ccc] shadow-sm shadow-[#ccc] rounded-[5px] py-4 px-4 bg-white/85 backdrop-blur-xl  transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    <div className="single-note--title border-b border-[#ccc] pb-2">
                                        <span className="absolute top-2 right-1 text-[1.5rem] rotate-12 cursor-pointer">
                                            🧷
                                        </span>
                                        <h4 className='text-[1rem] text-center capitalize tracking-wide font-[400] border border-[#ccc] shadow-sm shadow-[#ccc] py-2 rounded-[5px] bg-white flex items-center justify-center gap-[0.4rem]'>
                                            <FaThumbtack className="text-red-500 rotate-12" />
                                            <span>title :- {note.title}</span>
                                        </h4>
                                    </div>
                                    <div className="single-note--content border-b border-[#ccc] py-2 px-1">
                                        <p className='border border-[#ccc] shadow-sm shadow-[#dcc] py-4 px-3 rounded-[5px] bg-white font-[400] tracking-wide text-[0.95rem] h-[4.5rem] overflow-y-auto'>{note.content}.</p>
                                    </div>
                                    <div className="single-note--cta-block flex items-end justify-end gap-3 mt-3">
                                        <div className="single-note--edit-button">
                                            <button type='button' className="px-4 py-2 rounded-lg bg-blue-500/90 text-white font-medium hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg" onClick={() => handleEdit(note)}> ✏️ Edit</button>
                                        </div>
                                        <div className="single-note--edit-button">
                                            <button type='button' className='px-4 py-2 rounded-lg bg-red-500/90 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg' onClick={() => deleteNotes(note.id)}>🗑 Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesList