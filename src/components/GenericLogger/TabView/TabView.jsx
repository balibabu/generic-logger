import React, { useState } from 'react'
import Close from '../../shared/icons/Close';
import Create from '../../shared/icons/Create';
import { useNavigate } from 'react-router-dom';

export default function TabView() {
    const [tabs, setTabs] = useState(['Loggers', 'Logger Editor']);
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    function newTabHandler() {
        setSelected(tabs.length);
        setTabs([...tabs, 'Loggers']);
        navigate('/');
    }

    function tabCloseHandler(index) {
        setTabs((prev) => {
            if ((tabs.length - 2) < selected) {
                setSelected(tabs.length - 2);
            }
            return prev.filter((_tab, i) => i !== index)
        });
    }

    function tabSlection(index){
        setSelected(index)
        console.log(tabs[index]);
        if(tabs[index]==='Logger Editor'){
            navigate('/logger/editor');
        }else if(tabs[index]==='Loggers'){
            navigate('/')
        }

    }

    return (
        <div className='overflow-hidden pt-1 text-sky-900'>
            <div className='flex overflow-x-scroll horizontalScrollbar'>
                {tabs.map((tab, index) => {
                    return <div key={index}
                        className={selected === index ? 'flex me-4 bg-sky-500 rounded-lg' : 'flex me-4 bg-sky-200 rounded-lg hover:bg-sky-400'}
                    >
                        <div className='ps-2 pe-5 cursor-grab py-1' onClick={() => tabSlection(index)}>{tab}</div>
                        <div className='cursor-pointer hover:bg-sky-400 rounded-full me-1 w-4' onClick={() => { tabCloseHandler(index) }}><Close /></div>
                    </div>
                })}
                {/* <div onClick={newTabHandler} className='px-2 cursor-crosshair hover:rounded-full hover:bg-sky-500 text-white'>+</div> */}
                <div onClick={newTabHandler} className=' cursor-crosshair hover:rounded-full hover:bg-sky-500 text-sky-300 w-8'><Create /></div>
            </div>
        </div>
    )
}
