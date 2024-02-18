import React from 'react'
import GenericLogger from './components/GenericLogger/GenericLogger'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { VariableProvider } from './components/context/VariableContext';

export default function App() {
  return (
    <VariableProvider>
      <HashRouter>
        <Routes >
          <Route path="/*" element={<GenericLogger />} />
        </Routes>
      </HashRouter>
    </VariableProvider>
  )
}
