import React from 'react';
import fullLogo from '../../assets/full_logo.png';
import './Header.css';

const Header = ({ activeTab }) => {
    const isHomeOrAbout = activeTab === 'HOME' || activeTab === 'ABOUT US' || activeTab === 'SCOPE' || activeTab === 'TEAM' || activeTab === 'ADVISORY BOARD';
    return (
        <header className={`main-header ${isHomeOrAbout ? 'home-header' : ''}`}>
            <div className="logo-container">
                <img src={fullLogo} alt="ENBOD" className="full-logo-img" />
            </div>
        </header>
    );
};

export default Header;
