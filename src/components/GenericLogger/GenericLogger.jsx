import React, { useEffect, useState } from 'react'
import TabView from './TabView/TabView'
import Loggers from './Loggers/Loggers'
import { Route, Routes, useLocation } from 'react-router-dom'
import Logs from './Logs/Logs'
import LogEditor from './Logs/LogEditor'
import LoggerEditor from './Loggers/Editor/LoggerEditor'

export default function GenericLogger({ app }) {
    // const [currentRoute, setCurrentRoute] = useState('');
    // const location = useLocation();
    // useEffect(() => {
    //     setCurrentRoute(location);
    // }, [location])


    return (
        <>
            {/* <TabView {...{ currentRoute }} /> */}
            <Routes>
                <Route path="/" element={<Loggers {...{ views: app.views.loggers, model: app.models.loggers }} />} />
                <Route path="/logger/editor/:loggerId" element={<LoggerEditor {...{ views: app.views.loggerEditor, loggers: app.models.loggers }} />} />
                <Route path="/logger/:id" element={<Logs {...{ views: app.views.logs, models: app.models }} />} />
                <Route path="/log/editor/:loggerId/:logId" element={<LogEditor {...{ views: app.views.logEditor, models: app.models }} />} />
            </Routes>
        </>
    )
}
