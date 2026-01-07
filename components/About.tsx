import React from 'react';
import { LUKAS_BIO, SKILLS } from '../constants';

const About: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <>
      {/* About / Bio Section */}
      <section id="about" className="py-24 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Solving Problems <br /> 
              <span className="text-slate-500">Through Elegant Code.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              {LUKAS_BIO.long}
            </p>
            <div className="flex gap-8 mt-10">
              <div>
                <div className="text-3xl font-bold text-cyan-500">5+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-500">2+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-500">2+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Positioned before Projects */}
      <section id="skills" className="py-24 bg-slate-900/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-slate-400">My specialized toolset for building modern digital products.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map(cat => (
              <div key={cat} className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
                <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  {cat}
                </h4>
                <div className="space-y-6">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                        <span className="text-xs font-mono text-slate-500">{skill.level}</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full group-hover:from-cyan-400 group-hover:to-cyan-600 transition-all duration-1000"
                          style={{ width: '100%' }} // Note: Showing as 100% bar but using level label
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
