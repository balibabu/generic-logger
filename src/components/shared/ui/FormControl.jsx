import React from 'react'

export default function FormControl(type) {
    const built_in_form = {
        'text':TextField,
    }
    return built_in_form[type];
}


function TextField(label, value, setValue) {
    return (
        <>
            <label htmlFor="">{label}</label>
            <input type="text" />
        </>
    );
}
