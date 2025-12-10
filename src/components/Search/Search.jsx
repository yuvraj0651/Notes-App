import React from 'react'

const Search = ({ search, setSearch, suggestions, handleSelect, isSelectingValue, setIsSelectingValue }) => {

    const searchChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="search-section">
                <div className="search-section__inner">
                    <form>
                        <div className="search-bar--group">
                            <label htmlFor="search">search notes :-</label>
                            <input
                                type="search"
                                className='search-bar'
                                id='search'
                                placeholder='search notes here....'
                                name='search'
                                value={search}
                                onChange={searchChangeHandler}
                            />
                        </div>
                        {
                            suggestions.length > 0 && (
                                <div className='suggestions-box mt-[0.1rem]'>
                                    <ul className="bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                                        {suggestions.map((item) => (
                                            <li
                                                key={item.id}
                                                onClick={() => handleSelect(item.title)}
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition-all duration-200 text-gray-700 capitalize"
                                            >{item.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search