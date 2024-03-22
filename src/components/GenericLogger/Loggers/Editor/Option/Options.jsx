import React, { useState } from 'react'
import Edit from '../../../../shared/icons/Edit';
import Bin from '../../../../shared/icons/Bin';
import MoveUp from '../../../../shared/icons/MoveUp';
import MoveDown from '../../../../shared/icons/MoveDown';

export default function Options({ field, setField }) {
    const [optionItem, setOptionItem] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

    function addOption() {
        if (!optionItem.trim()) { return }
        setField((prev) => {
            const options = prev.options || [];
            return { ...prev, options: [...options, optionItem] }
        })
        setOptionItem('');
        setIsUpdating(false);
    }

    function updateOption() {
        setField((prev) => {
            const options = prev.options.map((op, i) => i === isUpdating-1 ? optionItem : op);
            return { ...prev, options }
        })
        setOptionItem('');
        setIsUpdating(false);
    }

    const onDelete = (indexToDelete) => {
        setField((prev) => ({ ...prev, options: prev.options.filter((_, i) => i !== indexToDelete) }));
    };

    const onMoveUp = (currentIndex) => {
        if (currentIndex === 0) return;
        setField((prev) => {
            const options = [...prev.options];
            [options[currentIndex - 1], options[currentIndex]] = [options[currentIndex], options[currentIndex - 1]];
            return { ...prev, options };
        })
    };

    const onMoveDown = (currentIndex) => {
        if (currentIndex === field.options.length - 1) return;
        setField((prev) => {
            const options = [...prev.options];
            [options[currentIndex + 1], options[currentIndex]] = [options[currentIndex], options[currentIndex + 1]];
            return { ...prev, options };
        })
    };

    function onEdit(index) {
        setIsUpdating(index+1); // here using index+1 to avoid, position 0th 0 is false but not others
        setOptionItem(field.options[index]);
    }

    return (
        <div className='text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900 bg-sky-100' >
            <div className='bg-sky-300 px-2 border-sky-900 p-1  text-sky-900 font-bold border-b-2 border-sky-900'>Set some options</div>
            <div className='m-2'>
                <div className='flex text-2xl rounded-md overflow-hidden border-2 border-sky-900 mb-2'>
                    <input className='flex-grow outline-none p-1 bg-sky-100' type="text" value={optionItem} onChange={(e) => setOptionItem(e.target.value)} />
                    <button className='bg-sky-500 px-3 hover:bg-sky-600 text-sky-100 border-s-2 border-sky-900 w-3/12' onClick={isUpdating ? updateOption : addOption}>{isUpdating ? 'update' : 'add'}</button>
                </div>
                {field.options && field.options.map((op, index) => <div key={index} className='flex mt-2 text-center'>
                    <div className='flex-grow text-2xl rounded-md border-2 border-sky-900 me-2 bg-sky-300'>
                        {/* <div className='bg-sky-300 m-1 px-2 rounded-md border-2 border-sky-900'>{op}</div> */}{op}
                    </div>
                    {!isUpdating &&
                        <div className='flex-shrink flex'>
                            <div className='w-11 hover:bg-sky-700 hover:border-4 border-sky-900' onClick={() => onEdit(index)}><Edit /></div>
                            <div className='w-11 hover:bg-sky-700 hover:border-4 border-sky-900' onClick={() => onDelete(index)}><Bin /></div>
                            <div className='h-11 hover:bg-sky-700 hover:border-4 border-sky-900' onClick={() => onMoveUp(index)}><MoveUp /></div>
                            <div className='h-11 hover:bg-sky-700 hover:border-4 border-sky-900' onClick={() => onMoveDown(index)}><MoveDown /></div>
                        </div>
                    }
                </div>
                    // <div key={i} className='bg-sky-300 m-1 px-2 rounded-md border-2 border-sky-900'>{op}</div>
                )}
            </div>
        </div>
    )
}
