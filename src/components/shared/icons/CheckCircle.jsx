import React from 'react'

export default function CheckCircle({ fill = "none", strokeWidth = 1.5, stroke = "currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" {...{ fill, strokeWidth, stroke }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    )
}
