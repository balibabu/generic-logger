import React from 'react'
import Loggers from './Loggers/Loggers'
import { Route, Routes } from 'react-router-dom'
import Logs from './Logs/Logs'
import LogEditor from './Logs/LogEditor'
import LoggerEditor from './Loggers/Editor/LoggerEditor'
import MyFireStore from './Database/MyFireStore/MyFireStore'

export default function GenericLogger({ app }) {

    return (
        <>
            <MyFireStore {...{ app }} />
            <Routes>
                <Route path="/" element={<Loggers {...{ views: app.views.loggers, model: app.models.loggers }} />} />
                <Route path="/logger/editor/:loggerId" element={<LoggerEditor {...{ views: app.views.loggerEditor, loggers: app.models.loggers }} />} />
                <Route path="/logger/:id" element={<Logs {...{ views: app.views.logs, models: app.models }} />} />
                <Route path="/log/editor/:loggerId/:logId" element={<LogEditor {...{ views: app.views.logEditor, models: app.models }} />} />
            </Routes>
        </>
    )
}
