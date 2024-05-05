import React, { useEffect, useState } from 'react'
import { db } from '../../../../firebase';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import Confirmation from '../../../shared/utility/Confirmation';
import { updateAppState } from '../../../shared/utility/updateAppState';

export default function Logs({ app }) {
    useEffect(() => {
        const q = query(collection(db, 'logs'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let logsList = [];
            querySnapshot.forEach((item) => {
                logsList.push({ ...item.data(), id: item.id });
            });
            updateAppState(app.setState, logsList, 'models logs')
            updateAppState(app.setState, createLog, 'views logEditor saveBtn onclick')
            updateAppState(app.setState, updateLog, 'views logEditor updateBtn onclick')
            const dropdownItems = app.views.logs.renderer.item.dropdown.menuItems.items;
            dropdownItems[0].onclick = deleteLog;
            updateAppState(app.setState, dropdownItems, 'views logs renderer item dropdown menuItems items')
        })
        return () => unsubscribe()
    }, [])

    function createLog(log) {
        addDoc(collection(db, 'logs'), log);
    }

    function updateLog(updatedLog) {
        updateDoc(doc(db, 'logs', updatedLog.id), updatedLog);
    }

    function deleteLog(id) {
        if (!Confirmation('are you sure?')) { return }
        deleteDoc(doc(db, 'logs', id));
    };

    return (
        <></>
    )
}