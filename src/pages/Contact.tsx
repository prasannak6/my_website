import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase, Youtube, Facebook, Twitter, Instagram, Video } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <header className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blueprint-900 tracking-tighter italic">Professional Inquiry</h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether it's a technical consultancy request, blog collaboration, or a question about engineering practices in Nepal, feel free to reach out.
              </p>
            </header>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Direct Email", val: "khadkatekraj150@gmail.com", href: "mailto:khadkatekraj150@gmail.com" },
                { icon: MapPin, label: "Operating Location", val: "Kathmandu & Lalitpur, Nepal" },
                { icon: MessageSquare, label: "Technical Blog Support", val: "Available via email" }
              ].map(info => (
                <div key={info.label} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-blueprint-900 group-hover:bg-blueprint-900 group-hover:text-white transition-all shadow-sm rounded-lg">
                    <info.icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-lg font-bold text-blueprint-900 hover:text-blueprint-600 transition-colors underline decoration-blueprint-200 underline-offset-4">{info.val}</a>
                    ) : (
                      <p className="text-lg font-bold text-blueprint-900">{info.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-slate-200">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold text-blueprint-900 uppercase tracking-widest">Connect on Social Media</p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Youtube, name: "YouTube", href: "#" },
                    { icon: Facebook, name: "Facebook", href: "#" },
                    { icon: Twitter, name: "X (Twitter)", href: "#" },
                    { icon: Instagram, name: "Instagram", href: "#" },
                    { icon: Video, name: "TikTok", href: "#" },
                    { icon: MessageSquare, name: "WhatsApp", href: "#" }
                  ].map(social => (
                    <a key={social.name} href={social.href} className="flex items-center gap-2 px-4 py-2 border border-slate-200 hover:border-blueprint-900 hover:text-blueprint-900 transition-colors bg-white">
                      <social.icon size={16} />
                      <span className="text-sm font-bold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 blueprint-grid opacity-5 pointer-events-none" />
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-blueprint-300 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Engineering Practitioner"
                    className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-blueprint-900 transition-colors text-blueprint-900 font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-blueprint-300 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-blueprint-900 transition-colors text-blueprint-900 font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-blueprint-300 uppercase tracking-widest">Subject of Inquiry</label>
                <select className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-blueprint-900 transition-colors text-blueprint-900 font-bold appearance-none">
                  <option>Technical Consultation</option>
                  <option>Blog/Content Collaboration</option>
                  <option>Project Partnership</option>
                  <option>Resource Request</option>
                  <option>General Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-blueprint-300 uppercase tracking-widest">Message Details</label>
                <textarea 
                  rows={5}
                  placeholder="Describe your technical inquiry or specific project requirements..."
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-blueprint-900 transition-colors text-blueprint-900 font-bold resize-none"
                ></textarea>
              </div>

              <div className="pt-8">
                <button 
                  type="submit"
                  className="w-full bg-blueprint-900 text-white py-5 font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-blueprint-800 transition-all group"
                >
                  Post Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Typical technical response time: 24-48 Hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
