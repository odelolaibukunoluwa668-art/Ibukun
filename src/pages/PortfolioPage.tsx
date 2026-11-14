import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Web', 'Game Dev', 'SaaS', 'Systems'];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  desc: string;
  challenge?: string;
  solution?: string;
  results?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'LanternGolem Migration',
    category: 'Game Dev',
    image: 'https://picsum.photos/seed/golem/800/1000',
    tags: ['Minecraft Mods', 'System Migration', 'Optimization'],
    desc: 'Migrating complex game systems to stable foundations while preserving original mechanics.',
    challenge:
      'Legacy entity behavior and custom animations were tightly coupled to deprecated Minecraft server APIs, causing memory bloat and TPS drops.',
    solution:
      'Engineered a lightweight custom bridge preserving original combat mechanics, state machines, and soundscapes with 70% lower server overhead.',
    results: ['Zero mechanic regressions', 'Over 150k active players supported', '+45% server tick efficiency'],
  },
  {
    id: 2,
    title: 'Wang Fei Voice System',
    category: 'Systems',
    image: 'https://picsum.photos/seed/voice/800/600',
    tags: ['Voice AI', 'Backend Migration', 'Real-time'],
    desc: 'Seamless voice integration for game environments, moving from V1 to V2 infrastructure.',
    challenge:
      'High latency and packet drops during peak voice synthesis requests in multiplayer game lobbies.',
    solution:
      'Architected a distributed WebRTC relay network with edge neural audio codecs and intelligent dynamic fallback.',
    results: ['Under 65ms audio roundtrip latency', '99.99% connection reliability', 'Fault-tolerant multi-region failover'],
  },
  {
    id: 3,
    title: 'EcoSphere Dashboard',
    category: 'SaaS',
    image: 'https://picsum.photos/seed/port1/800/1000',
    tags: ['React', 'D3.js', 'Firebase'],
    desc: 'Real-time environmental monitoring platform for global enterprises.',
    challenge:
      'Visualizing continuous streams of millions of telemetry data points from IoT sensors without browser thread locking.',
    solution:
      'Developed canvas-accelerated D3 graph components and optimized web workers for offscreen rendering and instantaneous aggregations.',
    results: ['Sub-second query times over 10M rows', 'Adopted by 40+ multinational organizations', 'Carbon offset tracking accuracy +98%'],
  },
  {
    id: 4,
    title: 'Nebula OS',
    category: 'Web',
    image: 'https://picsum.photos/seed/port3/800/600',
    tags: ['Next.js', 'Three.js'],
    desc: 'Immersive 3D operating system for browser-based collaboration.',
    challenge:
      'Delivering a 60 FPS spatial UI experience across diverse desktop GPUs with real-time multi-user cursor sync.',
    solution:
      'Implemented WebGL shader pipelines, custom memory-pooled geometry batches, and CRDT-based synchronization for multi-window state.',
    results: ['60 FPS sustained on mid-tier hardware', 'Zero-install browser workflow', 'Featured on Awwwards and Product Hunt #1'],
  },
  {
    id: 5,
    title: 'Pixel Quest',
    category: 'Game Dev',
    image: 'https://picsum.photos/seed/port4/800/1000',
    tags: ['Unity', 'WebGL'],
    desc: 'Massively multiplayer online adventure game built for the open web.',
    challenge:
      'Large asset bundles caused excessive initial load times and mobile web browser crashes.',
    solution:
      'Introduced dynamic level streaming, asset compression with Draco/KTX2 textures, and hybrid memory management.',
    results: ['Initial load under 4 seconds', 'Over 500,000 game sessions logged', 'Seamless cross-device desktop and tablet play'],
  },
  {
    id: 6,
    title: 'Atlas CRM',
    category: 'SaaS',
    image: 'https://picsum.photos/seed/port6/800/800',
    tags: ['Node.js', 'PostgreSQL'],
    desc: 'Transforming customer relationships through predictive analytics.',
    challenge:
      'Sales pipelines struggled with fragmented customer data silos and outdated manual qualification stages.',
    solution:
      'Created an autonomous pipeline engine with automated scoring algorithms, PostgreSQL partitioned tables, and real-time deal alerts.',
    results: ['+34% sales deal velocity', 'Automated 12,000 monthly lead validations', 'Integrated with enterprise ERP backbones'],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
            >
              Selected <br /> Works
            </motion.h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how we've helped startups and game developers build world-class digital
              experiences and stable system architectures.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 interactive ${
                  activeCategory === cat
                    ? 'bg-primary border-primary text-white'
                    : 'bg-transparent border-border hover:border-primary/50 text-muted-foreground hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all break-inside-avoid"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                    <p className="font-bold text-sm uppercase tracking-widest text-primary mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-3xl font-black font-headline mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-6 text-sm line-clamp-2">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 border border-white/20 rounded-full font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors interactive text-left"
                    >
                      View Case Study <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="bg-[#233038] border border-white/10 rounded-3xl p-8 max-w-2xl w-full text-white relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 text-white/60 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors interactive"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                  {selectedCaseStudy.category}
                </span>
                <span className="text-white/40 text-xs">Featured Case Study</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black font-headline tracking-tight mb-4">
                {selectedCaseStudy.title}
              </h2>

              <p className="text-white/70 text-base leading-relaxed mb-6">
                {selectedCaseStudy.desc}
              </p>

              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 mb-6">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-headline font-bold text-lg text-primary mb-2">
                    The Challenge
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-headline font-bold text-lg text-accent mb-2">
                    Our Solution & Implementation
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {selectedCaseStudy.solution}
                  </p>
                </div>

                {selectedCaseStudy.results && (
                  <div>
                    <h4 className="font-headline font-bold text-lg text-white mb-3">
                      Key Outcomes & Metrics
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {selectedCaseStudy.results.map((res, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white/90"
                        >
                          {res}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 justify-between items-center">
                <Link
                  to="/contact"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-3 rounded-full font-bold text-sm bg-primary text-white hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Start Similar Project <ExternalLink size={16} />
                </Link>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-3 rounded-full font-bold text-sm text-white/60 hover:text-white transition-colors"
                >
                  Back to Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
