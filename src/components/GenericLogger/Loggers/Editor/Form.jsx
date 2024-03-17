import React, { useEffect, useState } from 'react'

const dummyField = { fieldName: '', fieldType: 'Text' };
export default function Form({ views, logger, setLogger, dropdownOps, updating, setUpdating }) {
    const [field, setField] = useState(dummyField);

    useEffect(() => {
        if (updating !== null) {
            setField(logger.fields[updating]);
        }
    }, [updating])


    function addField() {
        if (field.fieldName && field.fieldType) {
            setLogger((prev) => ({ ...prev, fields: [field, ...prev.fields] }))
            setField(dummyField);
        }
    }

    function update() {
        setLogger((prev) => ({ ...prev, fields: prev.fields.map((oldField, index) => index === updating ? field : oldField) }));
        setUpdating(null);
        setField(dummyField);
    }

    function cancel() {
        setUpdating(null);
        setField(dummyField);
    }

    return (
        <div className={views.style}>
            <div className={views.loggerName.style}>
                <label className={views.loggerName.label.style} htmlFor={views.loggerName.label.htmlFor}>{views.loggerName.label.value}</label>
                <input type={views.loggerName.input.type} id={views.loggerName.input.id} className={views.loggerName.input.style}
                    value={logger.title}
                    onChange={(e) => setLogger((prev) => ({ ...prev, title: e.target.value }))}
                />
            </div>

            <div className={views.fieldForm.style}>
                <input type={views.fieldForm.input.type}
                    className={views.fieldForm.input.style}
                    placeholder={views.fieldForm.input.placeholder}
                    value={field.fieldName}
                    onChange={(e) => setField((prev) => ({ ...prev, fieldName: e.target.value }))}
                />
                <select className={views.fieldForm.options.style} value={field.fieldType} onChange={(e) => setField((prev) => ({ ...prev, fieldType: e.target.value }))}>
                    {dropdownOps.map((option, index) => <option key={index} value={option}>{option}</option>)}
                </select>
                {updating === null ?
                    <button className={views.fieldForm.addBtn.style} onClick={addField}>{views.fieldForm.addBtn.icon}</button>
                    :
                    <>
                        <button className='bg-sky-500 text-sky-100 px-1 border-e-2 border-sky-900' onClick={update}>update</button>
                        <button className='bg-sky-500 text-sky-100 px-1' onClick={cancel}>cancel</button>
                    </>
                }
            </div>
        </div>
    )
}

{/* <div className={views.style}>
            <div className={views.loggerName.style}>
                <label className={views.loggerName.label.style} htmlFor={views.loggerName.label.htmlFor}>{views.loggerName.label.value}</label>
                <input type={views.loggerName.input.type} id={views.loggerName.input.id} className={views.loggerName.input.style}
                    value={loggerName}
                    onChange={(e) => setLoggerName(e.target.value)}
                />
            </div>

            <div className={views.fieldForm.style}>
                <input type={views.fieldForm.input.type}
                    className={views.fieldForm.input.style}
                    placeholder={views.fieldForm.input.placeholder}
                    value={fieldName}
                    onChange={(e) => setFieldName(e.target.value)}
                />
                <select className={views.fieldForm.options.style} value={fieldType} onChange={(e) => SetFieldType(e.target.value)}>
                    {dropdownOps.map((option, index) => <option key={index} value={option}>{option}</option>)}
                </select>
                <button className={views.fieldForm.addBtn.style} onClick={addField}>{views.fieldForm.addBtn.icon}</button>
            </div>
        </div> */}