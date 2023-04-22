import React, { useState } from 'react';

const Toggle = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div>
            <label for="themeSwitcherTwo" class="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
                <input type="checkbox" className="sr-only peer"
                    checked={enabled}
                    readOnly />
                <div
                    onClick={() => {
                        setEnabled(!enabled);
                    }}
                    className="w-11 h-6 bg-green rounded-full peer  peer-focus:ring-green  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-yellow after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue"
                ></div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                    ON
                </span>
            </label>
        </div>
    );
};

export default Toggle;