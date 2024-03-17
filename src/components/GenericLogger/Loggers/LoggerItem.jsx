import React from 'react'
import Dropdown from '../shared/Dropdown'
import { useNavigate } from 'react-router-dom';

export default function LoggerItem({ views, logger }) {
    const navigate = useNavigate();

    const menuItemsClick = (fun) => {
        fun(logger.id, navigate);
    }

    return (
        <div className={views.style}>
            <div className={views.title.style} onClick={() => navigate(`/logger/${logger.id}`)}>{logger.title}</div>
            <Dropdown {...{ views: views.dropdown, id: logger.id, onclick: menuItemsClick }} />
        </div>
    )
}
