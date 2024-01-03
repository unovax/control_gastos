import React from 'react';

interface CloseIconProps {
    className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ className = "w-5 h-5" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className={className}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    );
};

export default CloseIcon;

