import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';
import ContactModal from './ContactModal';

const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-900 text-slate-50 font-sans">
            <TopNavBar />

            <div className="flex flex-1 mt-[70px] overflow-hidden"> {/* Added overflow-hidden to contain scroll */}
                <SideNavBar />

                {/* Main Content Wrapper - Flex Column to separate Content and Fixed Footer */}
                <div className="flex flex-col flex-1 md:ml-[280px] h-full">

                    {/* Scrollable Content Area */}
                    <main className="flex-1 overflow-y-auto p-8 relative scroll-smooth">
                        <Outlet />
                        {/* Spacer to prevent content from being hidden behind footer if we were using absolute positioning, 
                             but here using flex-col so footer is naturally at bottom of this container if content is short,
                             or we can make footer FIXED at screen bottom. 
                             
                             User asked: "footer is fixed only content will change"
                             This implies the footer should be visible at the bottom of the VIEWPOD always.
                         */}
                    </main>

                    {/* Fixed Footer at the bottom of the layout (not scrollable) */}
                    <footer className="bg-slate-900 border-t border-slate-700 py-4 text-center text-slate-500 text-sm z-30 shrink-0">
                        <p>© {new Date().getFullYear()} Codeasy. All rights reserved.</p>
                    </footer>
                </div>
            </div>
            <ContactModal />
        </div>
    );
};

export default MainLayout;
