import React from 'react';

const TechStack: React.FC = () => {
  // Extracting unique tool names from the SKILLS constant for the marquee/list
  const tools = [
    "React", "Angular", "TypeScript", "Node.js", 
    "Tailwind CSS", "PostgreSQL", "Unity", "C#", 
    "Unreal Engine", "Blueprints", "Git"
  ];

  return (
    <section className="py-8 border-y border-slate-900 bg-slate-950/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            Trusted Tech Stack & Tools
          </span>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 opacity-60">
            {tools.map((tool) => (
              <div 
                key={tool} 
                className="text-sm md:text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
