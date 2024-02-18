import React from 'react'
import Edit from '../../shared/icons/Edit';
import Bin from '../../shared/icons/Bin';
import MoveDown from '../../shared/icons/MoveDown';
import MoveUp from '../../shared/icons/MoveUp';

export default function Fields({ fields, setFields }) {
    const onDelete = (indexToDelete) => {
        setFields(prevFields => prevFields.filter((_, index) => index !== indexToDelete));
    };

    const onMoveUp = (currentIndex) => {
        if (currentIndex === 0) return;
        setFields(prevFields => {
            const newFields = [...prevFields];
            [newFields[currentIndex - 1], newFields[currentIndex]] = [newFields[currentIndex], newFields[currentIndex - 1]];
            return newFields;
        });
    };

    const onMoveDown = (currentIndex) => {
        if (currentIndex === fields.length - 1) return;
        setFields(prevFields => {
            const newFields = [...prevFields];
            [newFields[currentIndex], newFields[currentIndex + 1]] = [newFields[currentIndex + 1], newFields[currentIndex]];
            return newFields;
        });
    };
    return (
        <>
            {fields.map((field, index) => {
                return <div key={index} className='flex mt-2 text-center'>
                    <div className='flex-grow flex text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900 me-2'>
                        <div className='flex-1 bg-sky-300 px-2 border-r-2 border-sky-900 p-1'>{field.fieldName}</div>
                        <div className='flex-1 bg-sky-300 px-2 p-1'>{field.fieldType}</div>
                    </div>
                    <div className='flex-shrink flex'>
                        <div className='w-11 hover:bg-sky-700 hover:border-4 border-sky-900'><Edit /></div>
                        <div className='w-11 hover:bg-sky-700 hover:border-4 border-sky-900' onClick={() => onDelete(index)}><Bin /></div>
                        <div className='h-11 hover:bg-sky-700 hover:border-4 border-sky-900' onClick={() => onMoveUp(index)}><MoveUp /></div>
                        <div className='h-11 hover:bg-sky-700 hover:border-4 border-sky-900' onClick={() => onMoveDown(index)}><MoveDown /></div>
                    </div>
                </div>
            })}
        </>
    )
}