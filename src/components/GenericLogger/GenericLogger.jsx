import React, { useEffect, useState } from 'react'
import TabView from './TabView/TabView'
import Loggers from './Loggers/Loggers'
import LoggerEditor from './Loggers/LoggerEditor'
import { Route, Routes, useLocation } from 'react-router-dom'
import Logs from './Logs/Logs'
import LogEditor from './Logs/LogEditor'

export default function GenericLogger() {
    const [currentRoute, setCurrentRoute] = useState('');
    const location = useLocation();
    useEffect(() => {
        setCurrentRoute(location);
    }, [location])


    return (
        <>
            <TabView {...{ currentRoute }} />
            <Routes>
                <Route path="/" element={<Loggers />} />
                <Route path="/logger/editor" element={<LoggerEditor />} />
                <Route path="/logger/:id" element={<Logs />} />
                <Route path="/log/editor" element={<LogEditor />} />
            </Routes>
        </>
    )
}
