import React, { useState } from 'react'

export default function Form({ views, setFields, loggerName, setLoggerName, logger, setLogger }) {
    const [fieldName, setFieldName] = useState('');
    const [fieldType, SetFieldType] = useState('Text');
    const [dropdownOps, setDropdownOps] = useState('Text, Large Text, Checkbox, Options, Date, Time, Date Time, Key Value Pair, Multiple Select, Radio'.split(','));


    function addField() {
        if (fieldName && fieldType) {
            // setFields((prev) => [...prev, { fieldName, fieldType }])
            setLogger((prev) => ({ ...prev, fields: [{ fieldName, fieldType }, ...prev.fields] }))
            setFieldName('')
            SetFieldType('Text')
        }
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
                    value={fieldName}
                    onChange={(e) => setFieldName(e.target.value)}
                />
                <select className={views.fieldForm.options.style} value={fieldType} onChange={(e) => SetFieldType(e.target.value)}>
                    {dropdownOps.map((option, index) => <option key={index} value={option}>{option}</option>)}
                </select>
                <button className={views.fieldForm.addBtn.style} onClick={addField}>{views.fieldForm.addBtn.icon}</button>
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