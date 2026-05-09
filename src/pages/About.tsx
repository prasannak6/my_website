import { motion } from 'motion/react';
import { User, Award, BookOpen, Target, HardHat, MapPin, Mountain, LayoutGrid } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      year: "2026 - Present",
      title: "MSc. in Structural Engineering",
      org: "Institute of Engineering, Pulchowk Campus",
      desc: "Advanced studies focusing on structural dynamics, modern materials, and AI integration in design."
    },
    {
      year: "July 2021 - Aug 2025",
      title: "Bachelor of Civil Engineering",
      org: "School of Engineering, Pokhara University",
      desc: "Developed a strong foundation in core civil engineering, underlying mathematics, and structural logic."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[3/4] bg-slate-200 relative"
          >
            <div className="absolute inset-0 bg-blueprint-900/10 z-10" />
            <img 
              src="https://picsum.photos/seed/engineer_portrait/800/1000?grayscale" 
              className="w-full h-full object-cover"
              alt="Er. Tekraj Khadka"
              referrerPolicy="no-referrer"
            />
            {/* Technical Labels */}
            <div className="absolute top-8 -right-8 writing-mode-vertical-rl rotate-180 text-[10px] font-mono text-blueprint-900/40 uppercase tracking-[0.5em] hidden lg:block">
              INTEGRITY • PRECISION • SERVICE
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 bg-blueprint-900 text-white space-y-2 hidden md:block">
              <p className="font-mono text-xs text-blueprint-300 uppercase tracking-widest">Base Identity</p>
              <h3 className="text-2xl font-bold leading-none">Er. Tekraj Khadka</h3>
              <p className="text-sm opacity-60">Civil Engineer | AI Enthusiast | Educator</p>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-blueprint-900 italic tracking-tighter">Evoke emotion. Inspire the mind.</h1>
              <div className="h-1.5 w-24 bg-blueprint-900" />
            </header>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg italic">
              "I am a keen believer of the fact that students should be taught by first evoking the emotions, getting them inspired, and then letting them learn themselves."
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Hi, I'm Er. Tekraj Khadka. After completing my Bachelor of Civil Engineering from School of Engineering, Pokhara University, I'm currently pursuing my Master's in Structural Engineering at the Institute of Engineering, Pulchowk Campus. I explore the underlying mathematics of engineering, its structural heart, and how emerging trends like AI are reshaping the future of civil engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-blueprint-900 font-bold uppercase tracking-widest text-xs font-mono">
                  <Target size={16} /> Vision
                </div>
                <p className="text-sm text-slate-500">To create a hub of localized engineering resources for the Nepali context.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-blueprint-900 font-bold uppercase tracking-widest text-xs font-mono">
                  <Award size={16} /> Commitment
                </div>
                <p className="text-sm text-slate-500">Technical accuracy combined with field-tested site wisdom.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Path */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-mono uppercase tracking-widest text-blueprint-900">Professional Path</h2>
            <div className="h-[1px] flex-1 bg-slate-200" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {experiences.map(exp => (
              <div key={exp.year} className="relative pl-8 border-l-2 border-blueprint-900 space-y-4">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blueprint-900" />
                <time className="text-xs font-mono text-slate-400 uppercase tracking-widest">{exp.year}</time>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-blueprint-900">{exp.title}</h3>
                  <p className="text-sm font-mono text-blueprint-700 uppercase tracking-widest">{exp.org}</p>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="bg-blueprint-900 text-white p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/4 h-full blueprint-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1 border-r border-white/10 pr-12 hidden md:block">
              <HardHat size={64} className="text-blueprint-300" />
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-blueprint-300">Technical Focus Areas</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Structural Logic", icon: LayoutGrid },
                { title: "AI Integration", icon: Mountain },
                { title: "Engineering Math", icon: Target },
                { title: "Teaching & Inspiring", icon: BookOpen }
              ].map(item => (
                <div key={item.title} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-blueprint-900 transition-colors">
                    <item.icon size={18} />
                  </div>
                  <span className="font-bold tracking-tight uppercase text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
