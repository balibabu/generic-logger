import React from 'react'
import Category from './Category';
import LoggerRenderer from './LoggerRenderer';
import VariableContext from '../../context/VariableContext';

export default function Loggers({ views, model }) {

    return (
        <div className={views.style}>
            <Category {...{ views: views.category }} />
            <LoggerRenderer {...{ views: views.renderer, loggers: model }} />
        </div>
    )
}
