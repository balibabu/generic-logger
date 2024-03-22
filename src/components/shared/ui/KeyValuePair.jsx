import React, { useState } from 'react'

export default function KeyValuePair({ field, dumper, setDumper }) {
    const [keyValue, setKeyValue] = useState({});

    function addKeyValue() {
        setDumper((prev) => ({ ...prev, [field.fieldName]: { ...prev[field.fieldName], [keyValue.key]: keyValue.value } }));
        setKeyValue({});
    }

    function keyValueClick(key) {
        setKeyValue({ key, value: dumper[field.fieldName][key] });
        setDumper((prev) => {
            const keyValues = { ...prev[field.fieldName] };
            delete keyValues[key];
            return { ...prev, [field.fieldName]: keyValues };
        })
    }

    return (
        <div className='text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900 bg-sky-100' >
            <div className='bg-sky-300 px-2 border-sky-900 p-1  text-sky-900 font-bold border-b-2 border-sky-900'>{field.fieldName}</div>
            <div className='p-2 bg-sky-300 border-b-2 border-sky-900 flex'>
                <input type="text" className='rounded-xl mx-1 ps-2 border-2 border-sky-900' placeholder='key' value={keyValue.key || ''} onChange={(e) => setKeyValue((prev) => ({ ...prev, key: e.target.value }))} />
                <input type="text" className='rounded-xl mx-1 ps-2 border-2 border-sky-900' placeholder='value' value={keyValue.value || ''} onChange={(e) => setKeyValue((prev) => ({ ...prev, value: e.target.value }))} />
                <button className='rounded-xl flex-grow bg-sky-500 text-sky-100 font-semibold hover:opacity-50 border-2 border-sky-900' onClick={addKeyValue}>add</button>
            </div>
            <div className='m-2 flex flex-wrap'>
                {dumper[field.fieldName] && Object.entries(dumper[field.fieldName]).map((keyValue, i) => <div key={i}
                    className='border-2 border-sky-900 bg-sky-300 rounded-xl mx-1 px-2'
                    onClick={() => keyValueClick(keyValue[0])}
                >{keyValue[0]}: {keyValue[1]}</div>)}
            </div>
        </div>
    )
}
