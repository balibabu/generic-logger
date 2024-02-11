import React, { useState } from 'react'

export default function TabView() {
    const [tabs, setTabs] = useState(['tab1', 'tab2', 'tab3']);
    const [selected, setSelected] = useState(0);

    function newTabHandler() {
        setSelected(tabs.length);
        setTabs([...tabs, `tab${tabs.length + 1}`]);
    }

    function tabCloseHandler(index) {
        setTabs((prev) => {
            if ((tabs.length - 2) < selected) {
                setSelected(tabs.length - 2);
            }
            return prev.filter((_tab, i) => i !== index)
        });

    }

    return (
        <div className='overflow-hidden pt-1' style={{ height: '28px' }}>
            <div className='flex overflow-x-scroll'>
                {tabs.map((tab, index) => {
                    return <div key={index}
                        className={selected === index ? 'flex px-2 me-4 bg-slate-400 rounded-lg' : 'flex px-2 me-4 bg-gray-200 hover:bg-slate-300 rounded-lg'}
                    >
                        <div className='pe-2 cursor-grab' onClick={() => setSelected(index)}>{tab}</div>
                        <div className='cursor-pointer' onClick={() => { tabCloseHandler(index) }}>x</div>
                    </div>
                })}
                <div onClick={newTabHandler} className='px-2 cursor-crosshair hover:rounded-full hover:bg-gray-300'>+</div>
            </div>
        </div>
    )
}
