import React, { useEffect, useState } from 'react'
import GenericLogger from './components/GenericLogger/GenericLogger'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { VariableProvider } from './components/context/VariableContext';
import genericAppArchi from './components/GenericLogger/Architecture';

export default function App() {
    const [genericApp, setGenericApp] = useState(genericAppArchi);
    useEffect(() => {
        genericAppArchi.setState = setGenericApp;
    }, [])

    return (
        <VariableProvider>
            <HashRouter>
                <Routes >
                    <Route path="/*" element={<GenericLogger {...{ app: genericApp }} />} />
                </Routes>
            </HashRouter>
        </VariableProvider>
    )
}
