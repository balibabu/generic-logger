import React from 'react'
import { useParams } from 'react-router-dom'
import LogRender from './LogRender';
import Category from '../Loggers/Category';
import Searchbar from '../../shared/utility/Searchbar';

export default function Logs({ views, models }) {
    const { id } = useParams();
    const logger = models.loggers.find((logger) => logger.id === parseInt(id));

    return (
        <div className={views.style}>
            <Category {...{ views: views.category }} />
            <Searchbar />
            <LogRender {...{ views: views.renderer, logs: models.logs, loggerId: id, logger }} />
        </div>
    )
}
