import React from 'react';
import { Menu } from '@headlessui/react'

const Dropdown = ({ views, onclick }) => {
    return (
        <Menu as="div" className={views.style}>
            <Menu.Button className={views.menuBtn.style}>
                {views.menuBtn.icon}
            </Menu.Button>
            <Menu.Items className={views.menuItems.style}>
                {views.menuItems.items.map((item, index) => {
                    return <Menu.Button key={index} className={views.menuItems.itemStyle} onClick={() => onclick(item.onclick)}>{item.title}</Menu.Button>
                })}
            </Menu.Items>
        </Menu>
    )
};

export default Dropdown;

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}