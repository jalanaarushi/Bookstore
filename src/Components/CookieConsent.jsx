// src/Components/CookieConsent.jsx
import React, { useState } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
        // You can also set a cookie here to remember the user's consent
        document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 30; // 30 days
    };

    return (
        isVisible && (
            <div style={styles.container}>
                <p style={styles.message}>
                    We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
                </p>
                <button onClick={handleAccept} style={styles.button}>
                    Accept
                </button>
            </div>
        )
    );
};

const styles = {
    container: {
        position: 'fixed',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#4A90E2',
        color: 'white',
        padding: '15px',
        borderRadius: '5px',
        zIndex: 1000,
    },
    message: {
        margin: '0',
        paddingRight: '10px',
        display: 'inline-block',
    },
    button: {
        backgroundColor: '#fff',
        color: '#4A90E2',
        border: 'none',
        borderRadius: '3px',
        padding: '5px 10px',
        cursor: 'pointer',
    }
};

export default CookieConsent;
