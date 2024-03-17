import React from 'react'
import Dropdown from '../shared/Dropdown'
import { useNavigate } from 'react-router-dom';

export default function LogItem({ views, logger, log }) {
    const navigate = useNavigate();

    const menuItemsClick = (fun) => {
        fun(logger.id, log.id);
    }

    return (
        <div className={views.style}>
            <div className='flex'>
                <div onClick={() => navigate(`/log/editor/${logger.id}/${log.id}/`)}>
                    {logger.fields.map((field, index) => {
                        return <div key={index}>{field.fieldName}: {log[field.fieldName]}</div>
                    })}
                </div>
                <Dropdown {...{ views: views.dropdown, onclick: menuItemsClick }} />
            </div>
        </div>
    )
}
