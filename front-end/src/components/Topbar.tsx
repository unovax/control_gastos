

import React from 'react';
import MenuIcon from './icons/Menu';
interface TopbarProps {
    children?: React.ReactNode;
}

const Topbar: React.FC<TopbarProps> = ({ children }) => {
    return (
        <div className="flex justify-between bg-gray-800 w-full p-2 h-[65px]">
            <MenuIcon className=''></MenuIcon>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}

export default Topbar;
