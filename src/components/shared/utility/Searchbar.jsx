import React from 'react'
import Search from '../icons/Search'

export default function Searchbar({ text, onTextChange }) {
    return (
        <div className='flex my-3 border-2 border-sky-900 rounded-full overflow-hidden w-1/3 bg-sky-100 text-sky-900 py-1'>
            <input type="text" className='text-xl font-semibold bg-sky-100 ps-3 w-full py-1 outline-none'
                value={text} onChange={onTextChange} />
            <div className='py-2 pe-3 hover:text-green-500' onClick={() => console.log(text)}><Search /></div>
        </div>
    )
}
