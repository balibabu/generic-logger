import { useNavigate } from 'react-router-dom';
import LogItem from './LogItem';

export default function LogRender({ views, logs, loggerId, logger }) {
    const navigate = useNavigate();
    
    return (
        <div className={views.style}>
            <div className={views.createBtn.style} onClick={() => navigate(`/log/editor/${loggerId}/new/`)}>{views.createBtn.icon}</div>
            {logs.map((log) => <LogItem key={log.id} {...{ logger, log, views: views.item }} />)}
        </div>
    )
}