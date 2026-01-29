import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UIProvider } from './context/UIContext';
import MainLayout from './components/MainLayout';
import AboutCompany from './pages/AboutCompany';
import CourseDetail from './pages/CourseDetail';
import './App.css';

function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<AboutCompany />} />
            <Route path="course/:courseId" element={<CourseDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UIProvider>
  );
}

export default App;
