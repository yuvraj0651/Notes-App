import React from 'react'

const NotesForm = ({ addNoteHandler, title, content, setTitle, setContent, editingId , updateNotes }) => {

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const contentChangeHandler = (e) => {
        setContent(e.target.value);
    }

    return (
        <>
            <div className="notes-form-section border border-[#ccc] shadow-sm shadow-[#ccc] mt-[2rem] bg-white rounded-[5px] py-4 px-4">
                <div className="notes-form__inner">
                    <div className="notes-form__inner--heading text-center">
                        <h4 className='uppercase tracking-wide font-[500] text-[1.1rem]'>add a new note</h4>
                    </div>
                    <div className="notes-form-section__content">
                        <form>
                            <div className="notes-form-group">
                                <label htmlFor="title">add title :-</label>
                                <input
                                    type="text"
                                    id='title'
                                    name='title'
                                    value={title}
                                    className='title-box'
                                    placeholder='add title here...'
                                    onChange={titleChangeHandler}
                                />
                            </div>
                            <div className="notes-form-group">
                                <label htmlFor="content">add content :-</label>
                                <textarea
                                    type="content"
                                    id='content'
                                    name='content'
                                    value={content}
                                    className='title-box w-full'
                                    placeholder='add content here...'
                                    rows={6}
                                    onChange={contentChangeHandler}
                                />
                            </div>
                            {
                                editingId ? (
                                    <div className="notes-form--add-button-block">
                                        <button type='button' className='border border-[#ccc] shadow-sm shadow-[#ccc] py-[0.6rem] px-6 rounded-[7px] uppercase tracking-wide font-[500] text-[1rem] w-full bg-gradient-to-r from-red-600 to-amber-600 text-white cursor-pointer' onClick={updateNotes}>edit note</button>
                                    </div>
                                ) : (
                                    <div className="notes-form--add-button-block">
                                        <button type='button' className='border border-[#ccc] shadow-sm shadow-[#ccc] py-[0.6rem] px-6 rounded-[7px] uppercase tracking-wide font-[500] text-[1rem] w-full bg-gradient-to-r from-red-600 to-amber-600 text-white cursor-pointer' onClick={addNoteHandler}>add note</button>
                                    </div>
                                )
                            }
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default NotesForm