import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { courses } from '../data/courses';
import './CourseDetail.css';

const CourseDetail = () => {
    const { courseId } = useParams();
    const course = courses.find((c) => c.id === courseId);

    if (!course) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="page-container fade-in">
            <h2 className="course-title">{course.title}</h2>
            <div className="course-duration-badge">Duration: {course.duration}</div>

            <section className="info-section">
                <h3>Overview</h3>
                <p>{course.about}</p>
            </section>

            <section className="info-section">
                <h3>What You Will Learn</h3>
                <ul className="topics-list">
                    {course.topics.map((topic, index) => (
                        <li key={index} className="topic-item">
                            <span className="check-icon">✓</span> {topic}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="cta-section">
                <button className="enroll-btn">Enroll Now</button>
            </section>
        </div>
    );
};

export default CourseDetail;
