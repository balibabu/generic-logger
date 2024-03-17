import { createContext, useState } from "react";

const VariableContext = createContext();
export default VariableContext;

export const VariableProvider = ({ children }) => {
    const [loggers, setLoggers] = useState([{title:'Logger1',fields:[{fieldName:"name",fieldType:'Text'},{fieldName:"description",fieldType:'Large Text'}]}]);
    const [logs, setLogs] = useState({});

    function addLog(loggerId, log) {
        setLogs((prev) => {
            let newLogs=[];
            if(prev[loggerId]){
                newLogs=[...prev[loggerId]]
            }
            newLogs=[log,...newLogs]
            return {...prev, [loggerId]:newLogs}
        });
    }

    function getLogger(loggerId){
        return loggers[loggerId];
    }

    const contextData = {
        loggers, setLoggers,
        logs, setLogs,
        getLogger,
        addLog
    };

    return (
        <VariableContext.Provider value={contextData}>
            {children}
        </VariableContext.Provider>
    );
}