import React from 'react'
import { useNavigate } from 'react-router-dom';
import LogItem from './LogItem';

export default function LogRender({ views, logs, loggerId, logger }) {
    const navigate = useNavigate();

    return (
        <div className={views.style}>
            <div className={views.createBtn.style} onClick={() => navigate(`/log/editor/${loggerId}/x/`)}>{views.createBtn.icon}</div>
            {logs[loggerId] && logs[loggerId].map((log) => {
                return <LogItem key={log.id} {...{ logger, log, views: views.item }} />
            })}
        </div>
    )
}