import React from 'react';
import { MenuIcon, LogoIcon } from './Icons';

interface MobileHeaderProps {
    onMenuClick: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="md:hidden flex items-center justify-between p-4 border-b border-border-color bg-white/80 backdrop-blur-lg flex-shrink-0">
            <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-black rounded-lg shadow-md flex items-center justify-center p-1 text-brand-purple">
                    <LogoIcon />
                </div>
                <h1 className="text-lg font-bold text-text-primary">SnakeEngine</h1>
            </div>
            <button onClick={onMenuClick} className="p-2 text-slate-600">
                <MenuIcon className="w-6 h-6" />
            </button>
        </header>
    );
};
