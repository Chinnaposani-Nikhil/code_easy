import React from 'react';
import { NavLink } from 'react-router-dom';
import { courses } from '../data/courses';
import './SideNavBar.css';

const SideNavBar = () => {
    return (
        <aside className="side-nav-bar">
            <h3 className="side-nav-title">Courses</h3>
            <nav className="side-nav-links">
                {courses.map((course) => (
                    <NavLink
                        key={course.id}
                        to={`/course/${course.id}`}
                        className={({ isActive }) =>
                            isActive ? 'side-link active' : 'side-link'
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
