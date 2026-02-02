"use client";

import Dock from './Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

export default function DockNavbar() {
    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
        { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
        { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
        { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
    ];

    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            </div>
        </div>
    );
}
