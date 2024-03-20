import React from 'react'
import Options from './Options';

const optionsReqFields = 'options,multiple select,radio'.split(',');
export default function OptionReq({ logger, setLogger, field, setField }) {

    if (optionsReqFields.includes(field.fieldType.trim().toLowerCase())) {
        return (
            <Options {...{ logger, setLogger, field, setField }} />
        )
    }
    return (
        <div>OptionNotReq</div>
    )
}
