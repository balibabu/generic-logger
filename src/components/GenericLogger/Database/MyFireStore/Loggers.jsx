import React, { useEffect, useState } from 'react'
import { db } from '../../../../firebase';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import { updateAppState } from '../../../shared/utility/updateAppState';
import Confirmation from '../../../shared/utility/Confirmation';
export default function Loggers({ app }) {

    useEffect(() => {
        const q = query(collection(db, 'loggers'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let loggersList = [];
            querySnapshot.forEach((item) => {
                loggersList.push({ ...item.data(), id: item.id });
            });
            updateAppState(app.setState, loggersList, 'models loggers')
            updateAppState(app.setState, createLogger, 'views loggerEditor leftPannel header saveBtn onclick')
            updateAppState(app.setState, updateLogger, 'views loggerEditor leftPannel header updateBtn onclick')
            const dropdownItems = app.views.loggers.renderer.item.dropdown.menuItems.items;
            dropdownItems[0].onclick = deleteLogger;
            updateAppState(app.setState, dropdownItems, 'views loggers renderer item dropdown menuItems items')
        })
        return () => unsubscribe()
    }, [])

    function createLogger(logger) {

        addDoc(collection(db, 'loggers'), logger);
    }

    function updateLogger(updatedLogger) {
        updateDoc(doc(db, 'loggers', updatedLogger.id), updatedLogger);
    }

    const deleteLogger = async (id) => {
        if (!Confirmation('are you sure?')) { return }
        await deleteDoc(doc(db, 'loggers', id));
    };

    return (
        <></>
    )
}
