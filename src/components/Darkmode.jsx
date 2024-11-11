import React, { useState } from 'react';
import './darkmode.css';

function Darkmode() {
    const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode state

    const changeMode = () => {
        setIsDarkMode(prevMode => !prevMode); // Toggle dark mode state

        // Apply styles based on the dark mode state
        if (!isDarkMode) {
            document.body.style.backgroundColor = '#121212'; // Dark background
            document.body.style.color = '#ffffff'; // Light text
        } else {
            document.body.style.backgroundColor = '#ffffff'; // Light background
            document.body.style.color = '#000000'; // Dark text
        }
    };

    return (
        <div>
            <nav className={isDarkMode ? 'dark-nav' : 'light-nav'}>
                <div className="items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="darkModebtn">
                    <button onClick={changeMode}>
                        {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Darkmode;
