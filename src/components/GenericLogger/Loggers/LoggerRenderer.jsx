import React from 'react'
import Create from '../../shared/icons/Create'
import { useNavigate } from 'react-router-dom'
import DropdownDots from '../../shared/icons/DropdownDots';
import Dropdown from '../shared/Dropdown';
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
