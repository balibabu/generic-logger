import Bin from "../shared/icons/Bin";
import Create from "../shared/icons/Create";
import DropdownDots from "../shared/icons/DropdownDots";
import Edit from "../shared/icons/Edit";
import MoveDown from "../shared/icons/MoveDown";
import MoveUp from "../shared/icons/MoveUp";

const dummyLoggers = [
    { id: 1, title: 'Logger1', fields: [{ fieldName: "name", fieldType: 'Text' }, { fieldName: "description", fieldType: 'Large Text' }] },
    { id: 2, title: 'Logger2', fields: [{ fieldName: "check", fieldType: 'Checkbox' }, { fieldName: "date", fieldType: 'Date' }] },
]

// during testing purpose only
let loggerId = 2;
let logId = 0;


const genericAppArchi = {
    models: {
        loggers: [...dummyLoggers],
        logs: {}
    },

    views: {
        loggers: {
            style: '',
            category: {
                style: 'm-3 flex text-sky-100',
                item: {
                    style: 'px-3 cursor-pointer',
                    selected: 'underline text-sky-300',
                    unselected: 'hover:text-sky-300'
                }
            },
            renderer: {
                style: 'flex flex-wrap',
                createBtn: {
                    style: 'ms-2 bg-sky-300 rounded-xl hover:opacity-50 w-14 h-14',
                    icon: <Create />,
                    navigate: '/logger/editor/x'
                },
                item: {
                    style: 'flex ms-2 bg-sky-300 rounded-xl cursor-pointer h-14 ps-5 mb-2',
                    title: {
                        style: 'text-sky-900 font-bold flex items-center mb-1 hover:text-sky-100',
                    },
                    dropdown: {
                        style: 'relative',
                        menuBtn: {
                            style: 'h-14',
                            icon: <DropdownDots />
                        },
                        menuItems: {
                            style: 'overflow-hidden absolute right-0 z-10 w-fit origin-top-right rounded-lg bg-sky-100',
                            itemStyle: 'text-sky-900 text-start px-3 hover:bg-sky-300 w-full',
                            items: [
                                { title: 'delete', onclick: () => console.log('dropdown delete logger') },
                                { title: 'edit', onclick: (id, navigate) => navigate(`/logger/editor/${id}`) },
                                { title: 'other', onclick: () => console.log('dropdown other logger') },
                            ]
                        }

                    }
                }
            }
        },

        loggerEditor: {
            style: 'pt-3 flex',
            leftPannel: {
                style: 'flex-1',
                header: {
                    style: 'flex justify-between mb-4',
                    title: {
                        style: 'text-4xl text-sky-200',
                        value: 'Create New Logger'
                    },
                    saveBtn: {
                        style: 'bg-sky-500 text-4xl rounded-xl px-2 hover:opacity-50',
                        icon: 'Save',
                        onclick: () => { console.log('save logger') }
                    },
                    updateBtn: {
                        // onclick: () => { console.log('update logger') }
                        onclick: (lo) => { console.log(lo) }
                    }
                },
                form: {
                    style: '',
                    loggerName: {
                        style: 'flex text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900',
                        label: {
                            value: 'Logger name',
                            style: 'bg-sky-300 px-2 border-r-2 border-sky-900 w-fit p-1',
                            htmlFor: 'loggerName'
                        },
                        input: {
                            type: 'text',
                            style: 'flex-grow outline-none p-1 bg-sky-100',
                            id: 'loggerName'
                        }
                    },
                    fieldForm: {
                        style: 'mt-2 flex text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900',
                        input: {
                            type: 'text',
                            style: 'flex-grow outline-none p-1 bg-sky-100',
                            placeholder: 'Field Name'
                        },
                        options: {
                            style: 'flex-grow outline-none p-1 bg-sky-100 border-x-2 border-sky-900'
                        },
                        addBtn: {
                            style: 'bg-sky-500 px-3 hover:opacity-50',
                            icon: 'Add'
                        }
                    }
                },
                fields: {
                    style: '',
                    item: {
                        style: 'flex mt-2 text-center',
                        texts: {
                            style: 'flex-grow flex text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900 me-2',
                            fieldName: 'flex-1 bg-sky-300 px-2 border-r-2 border-sky-900 p-1',
                            fieldType: 'flex-1 bg-sky-300 px-2 p-1'
                        },
                        iconsContainer: {
                            style: 'flex-shrink flex',
                            iconStyle: 'h-11 hover:bg-sky-700 hover:border-4 border-sky-900',
                            icons: {
                                edit: <Edit />,
                                bin: <Bin />,
                                moveUp: <MoveUp />,
                                moveDown: <MoveDown />
                            }
                        }
                    }

                }

            },
            rightPannel: {
                style: 'flex-1'
            }
        },

        logs: {
            style: '',
            category: {
                style: 'm-3 flex text-sky-100',
                item: {
                    style: 'px-3 cursor-pointer',
                    selected: 'underline text-sky-300',
                    unselected: 'hover:text-sky-300',
                },
            },
            renderer: {
                style: 'flex flex-wrap',
                createBtn: {
                    style: 'ms-2 bg-sky-300 rounded-xl hover:opacity-50 w-14 h-14',
                    icon: <Create />,
                },
                item: {
                    style: 'mx-2 p-2 bg-sky-300 rounded-xl cursor-pointer',
                    dropdown: {
                        style: 'relative',
                        menuBtn: {
                            style: '',
                            icon: <DropdownDots />
                        },
                        menuItems: {
                            style: 'overflow-hidden absolute right-0 z-10 w-fit origin-top-right rounded-lg bg-sky-100',
                            itemStyle: 'text-sky-900 text-start px-3 hover:bg-sky-300 w-full',
                            items: [
                                { title: 'delete', onclick: () => console.log('dropdown delete log') },
                                { title: 'edit', onclick: () => console.log('dropdown edit log') },
                                { title: 'other', onclick: () => console.log('dropdown other log') },
                            ]
                        }

                    }
                }
            }

        },

        logEditor: {
            saveBtn: {
                onclick: () => { console.log('save log') }
            },
            updateBtn: {
                onclick: () => { console.log('update log') }
            }
        }
    },
    setState: null,
}

const controller = {
    addLogger: (logger) => {
        loggerId += 1// during testing purpose only
        genericAppArchi.setState((prev) => {
            const loggers = prev.models.loggers;
            return { ...prev, models: { ...prev.models, loggers: [{ id: loggerId, ...logger }, ...loggers] } }
        });
    },
    deleteLogger: (id) => {
        genericAppArchi.setState((prev) => {
            const loggers = prev.models.loggers.filter((logger) => logger.id != id);
            return { ...prev, models: { ...prev.models, loggers: [...loggers] } }
        });
    },

    updateLogger: (updatedLogger) => {
        genericAppArchi.setState((prev) => {
            const loggers = prev.models.loggers;
            return { ...prev, models: { ...prev.models, loggers: loggers.map((logger) => logger.id === updatedLogger.id ? updatedLogger : logger) } }
        });
    },
    addLog: (loggerId, log) => {
        logId += 1// during testing purpose only
        genericAppArchi.setState((prev) => {
            const logs = prev.models.logs;
            const logsOfLoggerId = logs[loggerId] || [];
            return { ...prev, models: { ...prev.models, logs: { ...logs, [loggerId]: [{ ...log, id: logId }, ...logsOfLoggerId] } } }
        });
    },
    deleteLog: (loggerId, logId) => {
        genericAppArchi.setState((prev) => {
            const logs = prev.models.logs;
            const logsOfLoggerId = logs[loggerId] || [];
            return { ...prev, models: { ...prev.models, logs: { ...logs, [loggerId]: logsOfLoggerId.filter((log) => log.id !== logId) } } }
        });
    },

    updateLog: (loggerId, updatedLog) => {
        genericAppArchi.setState((prev) => {
            const logs = prev.models.logs;
            const logsOfLoggerId = logs[loggerId];
            return { ...prev, models: { ...prev.models, logs: { ...logs, [loggerId]: logsOfLoggerId.map((log) => log.id === updatedLog.id ? updatedLog : log) } } }
        });
    },
}

// genericAppArchi.controller = controller;
genericAppArchi.views.loggerEditor.leftPannel.header.saveBtn.onclick = controller.addLogger;
genericAppArchi.views.loggerEditor.leftPannel.header.updateBtn.onclick = controller.updateLogger;
genericAppArchi.views.loggers.renderer.item.dropdown.menuItems.items[0].onclick = controller.deleteLogger;
genericAppArchi.views.logEditor.saveBtn.onclick = controller.addLog;
genericAppArchi.views.logs.renderer.item.dropdown.menuItems.items[0].onclick = controller.deleteLog;
genericAppArchi.views.logEditor.updateBtn.onclick = controller.updateLog;


export default genericAppArchi;