import { motion } from 'motion/react';
import { ExternalLink, MapPin, Calendar, FileText, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="space-y-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-slate-200 dark:border-slate-800 pb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blueprint-900 dark:text-white tracking-tighter italic">Technical Projects & Field Work</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
              A portfolio of technical field assignments, site reports, and engineering design calculations.
            </p>
          </div>
          <div className="flex bg-slate-100 dark:bg-white/5 p-1 border border-slate-200 dark:border-slate-800 rounded-lg">
            <button 
              onClick={() => setViewMode("grid")}
              className={`p-2 transition-all rounded-md ${viewMode === "grid" ? "bg-white dark:bg-slate-800 text-blueprint-900 dark:text-white shadow-sm" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode("list")}
              className={`p-2 transition-all rounded-md ${viewMode === "list" ? "bg-white dark:bg-slate-800 text-blueprint-900 dark:text-white shadow-sm" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"}`}
            >
              <List size={20} />
            </button>
          </div>
        </header>

        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`group bg-white dark:bg-[#0a1122] border border-slate-200 dark:border-slate-800 overflow-hidden flex rounded-xl shadow-sm hover:shadow-md transition-shadow ${viewMode === "grid" ? "flex-col" : "flex-col md:flex-row gap-8 p-4 h-auto md:h-64"}`}
            >
              <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${viewMode === "grid" ? "aspect-video" : "w-full md:w-1/3 h-48 md:h-full rounded-lg"}`}>
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-blueprint-900/90 dark:bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-mono px-3 py-1.5 uppercase tracking-widest rounded-md">
                  {project.status}
                </div>
              </div>
              <div className={`p-6 flex flex-col ${viewMode === "grid" ? "flex-1" : "flex-1 justify-center py-2"}`}>
                <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {project.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-blueprint-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <button className="text-xs font-bold uppercase tracking-widest text-blueprint-900 dark:text-blue-400 flex items-center gap-2 group-hover:underline decoration-2 underline-offset-4">
                    <FileText size={14} /> View Full Report
                  </button>
                  <ExternalLink size={14} className="text-slate-300 dark:text-slate-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
