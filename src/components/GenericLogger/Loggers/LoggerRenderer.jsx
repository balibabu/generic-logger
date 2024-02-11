import React from 'react'

export default function LoggerRenderer(props) {
    return (
        <div className='flex flex-wrap'>
            {props.loggers.map((logger) => {
                return <div key={logger.id}>
                    <div className='mx-2 mb-4 p-2 px-9 bg-gray-300 rounded-xl'>
                        <div>{logger.title}</div>
                        <div className='text-gray-500 text-sm'>others</div>
                    </div>
                </div>
            })}
        </div>
    )
}
