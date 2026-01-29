import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className="app-container">
            <TopNavBar />
            <div className="content-wrapper">
                <SideNavBar />
                <main className="main-content">
                    <Outlet />
                    <footer className="footer">
                        <p>© {new Date().getFullYear()} Codesy. All rights reserved.</p>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
