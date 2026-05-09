import { motion } from 'motion/react';
import { ChevronRight, Ruler, Map, Construction, Calculator, Mountain, Cpu, BookOpen, Binary, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/blog';

export default function Home() {
  const expertise = [
    {
      title: "Core Civil Engineering",
      desc: "Comprehensive concepts across structures, water resources, transport, and geotech.",
      icon: Construction,
      color: "bg-blueprint-700"
    },
    {
      title: "Engineering Mathematics",
      desc: "Demystifying the underlying math that powers complex civil engineering designs.",
      icon: Binary,
      color: "bg-blueprint-800"
    },
    {
      title: "AI in Engineering",
      desc: "Exploring the integration of Artificial Intelligence and its effect on the civil field.",
      icon: BrainCircuit,
      color: "bg-blueprint-900"
    },
    {
      title: "Latest Trends",
      desc: "Keeping up with new materials, smart construction, and modern field practices.",
      icon: Cpu,
      color: "bg-slate-800"
    },
    {
      title: "Academic Inspiration",
      desc: "Teaching by evoking emotions first, inspiring students to dive deep and learn themselves.",
      icon: BookOpen,
      color: "bg-blueprint-600"
    }
  ];

  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blueprint-900 via-[#1a2e5a] to-[#2a4365] text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/modern_engineering/1920/1080" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            alt="Engineering Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blueprint-900/90 via-blueprint-900/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-semibold uppercase tracking-widest shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400"></span>
              </span>
              Er. Tekraj Khadka • Civil Engineering Educator
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight italic drop-shadow-lg">
              Inspiring Minds in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Civil Engineering.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100/90 max-w-xl leading-relaxed font-medium drop-shadow-md">
              I believe students should be taught by first evoking their emotions. Get inspired, explore the underlying math, and discover how AI is reshaping civil engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/blog" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg shadow-blue-500/30 font-bold flex items-center justify-center gap-2 group transition-all hover:scale-105 hover:shadow-blue-500/50">
                Explore Blog <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="px-8 py-4 border border-white/30 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm">
                View Site Projects
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Technical Coordinate Overlay */}
        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-blue-200/40 hidden md:block select-none">
          LAT: 27.7172° N | LONG: 85.3240° E (NEPAL)
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-slate-50 dark:bg-[#070b14] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] dark:opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest mb-4 font-bold">Core Competencies</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <p className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 max-w-2xl leading-tight">
                Specialized Technical Knowledge for Infrastructure Development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white dark:bg-[#0a1122] rounded-xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />
                <div className={`w-14 h-14 ${item.color} text-white flex items-center justify-center rounded-2xl shadow-inner mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Technical Details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
            <div className="p-8 bg-gradient-to-br from-blueprint-800 to-blueprint-900 text-white rounded-xl shadow-lg border border-blueprint-700 flex flex-col justify-center gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="font-mono text-xs uppercase tracking-widest text-blue-300 relative z-10">Connect with Er. Tekraj</p>
              <p className="text-xl font-bold leading-tight relative z-10">Follow my journey across social media for daily engineering insights.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white relative z-10 w-fit pt-2 group-hover:text-blue-200 transition-colors">
                <span className="border-b-2 border-blue-400 pb-1">Get in Touch</span> <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-24 bg-white dark:bg-[#0a1122] border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-4">
              <h2 className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest font-bold">Recent Publications</h2>
              <p className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">Technical Articles & Site Reports</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-4 transition-all uppercase tracking-widest font-mono">
              View All Posts <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredPosts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col space-y-6"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                  <img 
                    src={post.img} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[10px] font-mono px-3 py-1.5 uppercase tracking-widest rounded-md shadow-md z-20">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4 flex-1 flex flex-col px-2">
                  <time className="text-xs font-mono text-blue-400 dark:text-blue-500 uppercase tracking-widest font-semibold">{post.date}</time>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="pt-4 mt-auto">
                    <Link to={`/blog`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blueprint-900 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      <span className="border-b-2 border-blueprint-900 dark:border-blue-500 group-hover:border-blue-600 dark:group-hover:border-blue-300 pb-1 transition-colors">Read Technical Article</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Badge Section */}
      <section className="bg-gradient-to-br from-blueprint-900 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Surveys Completed", val: "50+" },
              { label: "Design Projects", val: "12+" },
              { label: "Technical Articles", val: "85+" },
              { label: "Engineering Resources", val: "20+" }
            ].map((stat, idx) => (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-3 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <p className="text-5xl font-extrabold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-200">{stat.val}</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
