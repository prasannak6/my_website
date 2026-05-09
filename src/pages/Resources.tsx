import { motion } from 'motion/react';
import { Download, FileText, Layout, Table, FileCode, CheckCircle2 } from 'lucide-react';
import { resourcesConfig } from '../data/resources';

const iconMap: Record<string, any> = {
  FileText,
  Layout,
  Table,
  FileCode,
  CheckCircle2
};

export default function Resources() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-16">
        <header className="space-y-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blueprint-900 tracking-tighter italic">Engineering Resources Hub</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Downloadable templates, study notes, and technical formats used in real-world site projects across Nepal.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {resourcesConfig.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 border-b-2 border-blueprint-900 dark:border-blue-600 pb-4">
                <Layout size={20} className="text-blueprint-900 dark:text-blue-400" />
                <h2 className="text-lg font-bold text-blueprint-900 dark:text-blue-400 uppercase tracking-widest font-mono">{group.category}</h2>
              </div>
              <div className="space-y-4">
                {group.items.map(item => {
                  const IconComponent = iconMap[item.iconName] || FileText;
                  return (
                    <div key={item.title} className="group p-4 bg-white dark:bg-[#0a1122] border border-slate-200 dark:border-slate-800 hover:border-blueprint-900 dark:hover:border-blue-600 transition-all flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-blueprint-900 dark:group-hover:text-blue-400 transition-colors">
                          <IconComponent size={18} />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-blueprint-900 dark:text-slate-200 line-clamp-1">{item.title}</p>
                          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">{item.type} • {item.size}</p>
                        </div>
                      </div>
                      <a href={item.downloadUrl || "#"} className="p-2 text-blueprint-300 dark:text-slate-500 hover:text-blueprint-900 dark:hover:text-blue-400 transition-colors">
                        <Download size={18} />
                      </a>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Banner */}
        <section className="bg-blueprint-50 border border-blueprint-100 p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl font-bold text-blueprint-900">Missing a template?</h3>
          <p className="text-blueprint-700 max-w-2xl mx-auto">
            I am constantly updating this hub with new field formats and study materials. If you have specific requirements for a road survey sheet or estimation format, let me know.
          </p>
          <div className="pt-4">
            <button className="px-8 py-3 bg-blueprint-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-blueprint-800 transition-colors">
              Request Resource
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
