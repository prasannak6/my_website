import { motion } from 'motion/react';
import { Search, Tag, Calendar, User, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { posts, categories } from '../data/blog';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blueprint-900 dark:text-white tracking-tighter italic">Technical Engineering Blog</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
            Technical articles, site reports, and educational guides for civil engineering students and practitioners in Nepal.
          </p>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-y border-slate-200 dark:border-slate-800 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-widest transition-all rounded-md ${
                  activeCategory === cat 
                    ? "bg-blueprint-900 dark:bg-blue-600 text-white shadow-md shadow-blue-500/20" 
                    : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-hover:text-blueprint-700 dark:group-hover:text-blue-400 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search Article..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#0a1122] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:border-blueprint-900 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-[#0c162c] transition-all dark:text-slate-100"
            />
          </div>
        </div>

        {/* Article Feed */}
        <div className="grid grid-cols-1 gap-16">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                <img 
                  src={post.img} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Tag size={10} /> {post.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-blueprint-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {post.summary}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-blueprint-900 dark:text-blue-400 group-hover:gap-4 transition-all uppercase tracking-widest font-mono">
                  Read Full Report <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
