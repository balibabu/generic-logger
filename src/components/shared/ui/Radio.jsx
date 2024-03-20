import React from 'react'
import Chip from './Radio/Chip'

export default function Radio({ field, dumper, setDumper }) {

    function selectHandler(item) {
        setDumper((prev) => ({ ...prev, [field.fieldName]: item }));
    }

    return (
        <div className='text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900 bg-sky-100' >
            <div className='bg-sky-300 px-2 border-sky-900 p-1  text-sky-900 font-bold border-b-2 border-sky-900'>{field.fieldName}</div>
            <div className='m-2 flex flex-wrap'>
                {field.options && field.options.map((option, i) => <Chip key={i} {...{ option, selected: dumper[field.fieldName], selectHandler }} />)}
            </div>
        </div>
    )
}
