import React, { createContext, useState, useContext } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <UIContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => useContext(UIContext);
