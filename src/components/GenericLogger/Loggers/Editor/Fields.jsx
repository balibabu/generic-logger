import React from 'react'

export default function Fields({ views, logger, setLogger, updating, setUpdating }) {
    const onDelete = (indexToDelete) => {
        setLogger((prev) => ({ ...prev, fields: prev.fields.filter((_, index) => index !== indexToDelete) }))
    };

    const onMoveUp = (currentIndex) => {
        if (currentIndex === 0) return;
        setLogger((prev) => {
            const newFields = [...prev.fields];
            [newFields[currentIndex - 1], newFields[currentIndex]] = [newFields[currentIndex], newFields[currentIndex - 1]];
            return { ...prev, fields: newFields };
        })
    };

    const onMoveDown = (currentIndex) => {
        if (currentIndex === logger.fields.length - 1) return;
        setLogger((prev) => {
            const newFields = [...prev.fields];
            [newFields[currentIndex], newFields[currentIndex + 1]] = [newFields[currentIndex + 1], newFields[currentIndex]];
            return { ...prev, fields: newFields };
        })
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