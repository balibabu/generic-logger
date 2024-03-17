import React from 'react'
import Edit from '../../../shared/icons/Edit';
import Bin from '../../../shared/icons/Bin';
import MoveDown from '../../../shared/icons/MoveDown';
import MoveUp from '../../../shared/icons/MoveUp';

export default function Fields({ views, logger, setLogger, updating, setUpdating }) {
    const onDelete = (indexToDelete) => {
        setLogger((prev) => ({ ...prev, fields: prev.fields.filter((_, index) => index !== indexToDelete) }))
        // setFields(prevFields => prevFields.filter((_, index) => index !== indexToDelete));
    };

    const onMoveUp = (currentIndex) => {
        if (currentIndex === 0) return;
        setLogger((prev) => {
            const newFields = [...prev.fields];
            [newFields[currentIndex - 1], newFields[currentIndex]] = [newFields[currentIndex], newFields[currentIndex - 1]];
            return { ...prev, fields: newFields };
        })
        // setFields(prevFields => {
        //     const newFields = [...prevFields];
        //     [newFields[currentIndex - 1], newFields[currentIndex]] = [newFields[currentIndex], newFields[currentIndex - 1]];
        //     return newFields;
        // });
    };

    const onMoveDown = (currentIndex) => {
        if (currentIndex === logger.fields.length - 1) return;
        setLogger((prev) => {
            const newFields = [...prev.fields];
            [newFields[currentIndex], newFields[currentIndex + 1]] = [newFields[currentIndex + 1], newFields[currentIndex]];
            return { ...prev, fields: newFields };
        })
        // setFields(prevFields => {
        //     const newFields = [...prevFields];
        //     [newFields[currentIndex], newFields[currentIndex + 1]] = [newFields[currentIndex + 1], newFields[currentIndex]];
        //     return newFields;
        // });
    };

    return (
        <div className={views.style}>
            {logger.fields.map((field, index) => {
                return (
                    <div key={index} className={views.item.style}>
                        <div className={views.item.texts.style}>
                            <div className={views.item.texts.fieldName}>{field.fieldName}</div>
                            <div className={views.item.texts.fieldType}>{field.fieldType}</div>
                        </div>
                        {updating === null && <div className={views.item.iconsContainer.style}>
                            <div className={views.item.iconsContainer.iconStyle} onClick={() => setUpdating(index)}>{views.item.iconsContainer.icons.edit}</div>
                            <div className={views.item.iconsContainer.iconStyle} onClick={() => onDelete(index)}>{views.item.iconsContainer.icons.bin}</div>
                            <div className={views.item.iconsContainer.iconStyle} onClick={() => onMoveUp(index)}>{views.item.iconsContainer.icons.moveUp}</div>
                            <div className={views.item.iconsContainer.iconStyle} onClick={() => onMoveDown(index)}>{views.item.iconsContainer.icons.moveDown}</div>
                        </div>}
                    </div>
                );
            })}
        </div>
    )
}