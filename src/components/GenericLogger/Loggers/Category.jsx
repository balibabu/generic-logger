import React, { useState } from 'react'

export default function Category() {
    const [category, setCategory] = useState(['all', 'recent', 'frequent', 'favorite']);
    const [selected, setSelected] = useState(0);
    return (
        <div className='m-3 flex text-sky-100'>
            {category.map((cate, index) => <div key={index} className='px-3 cursor-pointer '>
                <span className={selected === index ? 'underline text-sky-300' : 'hover:text-sky-300'}
                    onClick={() => setSelected(index)}
                >{cate}</span>
            </div>)}
        </div>
    )
}
