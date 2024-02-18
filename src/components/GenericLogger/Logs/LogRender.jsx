import React from 'react'
import Create from '../../shared/icons/Create'
import { useNavigate } from 'react-router-dom';

export default function LogRender() {
    const navigate = useNavigate();

    return (
        <div className='flex flex-wrap'>
            <div>log1</div>
            <div>log1</div>
            <div>log1</div>
            <div className='ms-2 bg-sky-300 rounded-full hover:opacity-50 w-14' onClick={() => navigate('/log/editor')}>
                <Create />
            </div>
        </div>
    )
}
