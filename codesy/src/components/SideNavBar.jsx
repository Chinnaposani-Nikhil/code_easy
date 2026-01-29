import React from 'react';
import { NavLink } from 'react-router-dom';
import { courses } from '../data/courses';


const SideNavBar = () => {
    return (
        <aside className="fixed top-[70px] left-0 w-[280px] h-[calc(100vh-70px)] bg-slate-800 border-r border-white/5 p-6 overflow-y-auto hidden md:block z-40">
            <h3 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6 pl-3">
                Available Courses
            </h3>
            <nav className="flex flex-col gap-2">
                {courses.map((course) => (
                    <NavLink
                        key={course.id}
                        to={`/course/${course.id}`}
                        className={({ isActive }) =>
                            `group flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 translate-x-1'
                                : 'text-slate-400 hover:bg-white/5 hover:text-white hover:translate-x-1'
                            }`
                        }
                    >
                        {course.title}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default SideNavBar;
