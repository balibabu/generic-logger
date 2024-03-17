import React, { useState } from 'react'

export default function Category({ views }) {
    const [category, setCategory] = useState(['all', 'recent', 'frequent', 'favorite']);
    const [selected, setSelected] = useState(0);

    return (
        <div className={views.style}>
            {category.map((cate, index) => <div key={index} className={views.item.style}>
                <span className={selected === index ? views.item.selected : views.item.unselected}
                    onClick={() => setSelected(index)}
                >{cate}</span>
            </div>)}
        </div>
    )
}
