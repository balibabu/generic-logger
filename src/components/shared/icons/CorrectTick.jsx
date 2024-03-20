import React from 'react'

export default function CorrectTick({ fill = "none", strokeWidth = 1.5, stroke = "currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" {...{ fill, strokeWidth, stroke }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    )
}
