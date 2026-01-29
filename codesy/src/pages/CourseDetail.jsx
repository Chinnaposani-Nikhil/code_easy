import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { useUI } from '../context/UIContext';


const CourseDetail = () => {
    const { courseId } = useParams();
    const { openContactModal } = useUI();
    const course = courses.find((c) => c.id === courseId);

    if (!course) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="max-w-5xl mx-auto animate-[fadeIn_0.5s_ease-out]">
            <div className="mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-semibold mb-4">
                    Duration: {course.duration}
                </span>
                <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
                    {course.title}
                </h2>
            </div>

            <section className="bg-slate-800/40 backdrop-blur rounded-2xl p-8 border border-white/5 mb-10">
                <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-pink-500 pl-4">
                    Overview
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                    {course.about}
                </p>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">
                    What You Will Learn
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.topics.map((topic, index) => (
                        <li key={index} className="flex items-center p-4 bg-slate-800/60 rounded-xl border border-white/5 hover:bg-slate-800 hover:border-indigo-500/30 transition-all duration-300 group">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                ✓
                            </span>
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                                {topic}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="text-center py-8">
                <button
                    onClick={openContactModal}
                    className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full text-white text-lg font-bold shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                    Enroll Now or Contact Us
                </button>
            </section>
        </div>
    );
};

export default CourseDetail;
