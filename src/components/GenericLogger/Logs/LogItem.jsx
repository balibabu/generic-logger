import React from 'react'
import Dropdown from '../shared/Dropdown'
import { useNavigate } from 'react-router-dom';
import getTitle from './utility/getTitle';

export default function LogItem({ views, logger, log }) {
    const navigate = useNavigate();

    const menuItemsClick = (fun) => {
        fun(log.id);
    }

    return (
        <div className='flex ms-2 bg-sky-300 rounded-xl cursor-pointer h-14 ps-5 mb-2'>
            <div onClick={() => navigate(`/log/editor/${logger.id}/${log.id}/`)}
                className='text-sky-950 font-semibold flex items-center mb-1 hover:text-sky-100'> {getTitle(logger, log)}
            </div>
            <Dropdown {...{ views: views.dropdown, onclick: menuItemsClick }} />
        </div>
    )
}