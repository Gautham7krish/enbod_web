import React from 'react';
import logo from '../../assets/logo.png';
import './Sidebar.css';
import homeIcon from '../../assets/home-blk.png';
import aboutIcon from '../../assets/about-blk.png';
import scopeIcon from '../../assets/scope-blk.png';
import teamIcon from '../../assets/team-blk.png';
import boardIcon from '../../assets/board-blk.png';
import contactIcon from '../../assets/contact-blk.png';

const Sidebar = ({ activeTab, onTabChange }) => {
  const sidebarItems = [
    { icon: homeIcon, id: 'HOME' },
    { icon: aboutIcon, id: 'ABOUT US' },
    { icon: scopeIcon, id: 'SCOPE' },
    { icon: teamIcon, id: 'TEAM' },
    { icon: boardIcon, id: 'ADVISORY BOARD' },
    { icon: contactIcon, id: 'CONTACT US' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-icons">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-icon-wrapper ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
          >
            <img src={item.icon} alt={item.id} className="sidebar-custom-icon" />
            <span className="sidebar-tooltip">{item.id}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
