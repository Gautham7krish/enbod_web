import React from 'react';
import fullLogo from '../../assets/full_logo.png';
import './Header.css';

const Header = ({ activeTab }) => {
    return (
        <header className={`main-header ${activeTab === 'HOME' ? 'home-header' : ''}`}>
            <div className="logo-container">
                <img src={fullLogo} alt="ENBOD" className="full-logo-img" />
            </div>
        </header>
    );
};

export default Header;
