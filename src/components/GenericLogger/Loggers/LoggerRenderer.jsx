import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoggerItem from './LoggerItem';

export default function LoggerRenderer({ views, loggers }) {
    const navigate = useNavigate();

    return (
        <div className={views.style}>

            <div className={views.createBtn.style} onClick={() => navigate(views.createBtn.navigate)}>
                {views.createBtn.icon}
            </div>
            {loggers.map((logger) => {
                return <LoggerItem key={logger.id} {...{ views: views.item, logger }} />
            })}

        </div>
    )
}
