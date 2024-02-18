import React from 'react'
import Create from '../../shared/icons/Create'
import { useNavigate } from 'react-router-dom'

export default function LoggerRenderer(props) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-wrap'>
            <div className='ms-2 bg-sky-300 rounded-full hover:opacity-50 w-14 mb-2' onClick={() => navigate('/logger/editor')}>
                <Create />
            </div>
            {props.loggers.map((logger, index) => {
                return <div key={index}>
                    <div className='ms-2 p-2 px-9 bg-sky-300 rounded-xl mb-2 hover:opacity-50 cursor-pointer' onClick={() => navigate(`/logger/${index}`)}>
                        <div className='text-sky-900'>{logger.title}</div>
                        <div className='text-sky-500 text-sm'>others</div>
                    </div>
                </div>
            })}

        </div>
    )
}
