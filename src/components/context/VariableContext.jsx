import { createContext, useState } from "react";

const VariableContext = createContext();
export default VariableContext;

export const VariableProvider = ({ children }) => {
    const [loggers, setLoggers] = useState([]);
    const [logs, setLogs] = useState({});

    const contextData = {
        loggers, setLoggers,
        logs, setLogs
    };

    return (
        <VariableContext.Provider value={contextData}>
            {children}
        </VariableContext.Provider>
    );
}