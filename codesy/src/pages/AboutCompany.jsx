import React from 'react';


const AboutCompany = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-12 animate-[fadeIn_0.5s_ease-out]">
            <header className="text-center space-y-4">
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Welcome to Codeasy
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Empowering the next generation of tech leaders through industry-aligned training.
                </p>
            </header>

            <section className="bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-4">
                    About Us
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                    Codeasy is a premier training institute dedicated to bridging the gap between academic learning and industry requirements.
                    We specialize in providing high-quality training in cutting-edge technologies, ensuring our students are job-ready from day one.
                </p>
            </section>

            <section className="space-y-8">
                <h3 className="text-3xl font-bold text-center text-white">Our Offering</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Expert Training", desc: "Learn from industry veterans with years of hands-on experience in top tech companies." },
                        { title: "Internship Program with Certificate", desc: "Gain real-world experience through our intensive internship programs working on live projects." },
                        { title: "Placement Assistance", desc: "We provide 100% placement support, including resume building, mock interviews, and direct referrals." }
                    ].map((feature, index) => (
                        <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-white/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                            <h4 className="text-xl font-bold text-indigo-400 mb-4 group-hover:text-white transition-colors">
                                {feature.title}
                            </h4>
                            <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutCompany;
