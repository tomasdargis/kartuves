import React from 'react';

const Notification = ({ showNotificacion }) => {
    return (
        <div
            className={`notification-container ${
                showNotificacion ? 'show' : ''
            }`}
        >
            <p>Šią raidę jau įrašėte</p>
        </div>
    );
};

export default Notification;
