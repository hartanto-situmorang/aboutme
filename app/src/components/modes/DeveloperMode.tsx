import { motion } from 'framer-motion';
import { 
  Terminal, 
  Code, 
  Database, 
  Server, 
  Layers, 
  GitBranch,
  Cpu,
  Box,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { useState } from 'react';
import { projects } from '@/data/portfolio';
import { PixelBlastBackground } from '@/components/backgrounds';
import { SplashCursor } from '@/components/backgrounds';
import { TextType } from '@/components/animations';

const codeSnippets = [
  {
    title: 'ERP System Architecture',
    language: 'php',
    code: `class ERPController extends Controller
{
    public function handleMultiSiteOperation(
        Site $site, 
        Transaction $transaction
    ) {
        DB::beginTransaction();
        try {
            // Validate cross-site permissions
            $this->authorize('site.manage', $site);
            
            // Process with queue for scalability
            ProcessTransactionJob::dispatch(
                $transaction,
                $site
            )->onQueue('erp-critical');
            
            // Real-time notification
            broadcast(new TransactionCreated(
                $transaction
            ))->toOthers();
            
            DB::commit();
            return response()->json([
                'status' => 'success',
                'processed' => true
            ]);
        } catch (Exception $e) {
            DB::rollback();
            Log::error('ERP Error: ' . $e->getMessage());
            throw $e;
        }
    }
}`
  },
  {
    title: 'Real-time Monitoring WebSocket',
    language: 'javascript',
    code: `// WebSocket Server for IoT Data Streaming
class MonitoringServer {
  constructor() {
    this.wss = new WebSocket.Server({ port: 8080 });
    this.clients = new Map();
    this.init();
  }

  init() {
    this.wss.on('connection', (ws, req) => {
      const clientId = uuidv4();
      this.clients.set(clientId, {
        socket: ws,
        subscriptions: new Set()
      });

      ws.on('message', (data) => {
        const message = JSON.parse(data);
        this.handleMessage(clientId, message);
      });

      // Send initial data burst
      this.sendInitialState(ws);
    });
  }

  broadcastToSubscribers(channel, data) {
    this.clients.forEach((client) => {
      if (client.subscriptions.has(channel)) {
        client.socket.send(JSON.stringify({
          channel,
          timestamp: Date.now(),
          payload: data
        }));
      }
    });
  }
}`
  },
  {
    title: '3D Container Visualization',
    language: 'javascript',
    code: `// Three.js Component for Container Design
const Container3D = ({ dimensions, components }) => {
  const meshRef = useRef();
  const { scene, camera } = useThree();

  useEffect(() => {
    // Initialize container geometry
    const geometry = new THREE.BoxGeometry(
      dimensions.width,
      dimensions.height,
      dimensions.depth
    );
    
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x2a3f54,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9
    });

    const container = new THREE.Mesh(geometry, material);
    
    // Add wireframe overlay
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0x00ff88 })
    );
    
    container.add(line);
    meshRef.current.add(container);
    
    // Add draggable components
    components.forEach(comp => {
      addDraggableComponent(comp);
    });
  }, [dimensions, components]);

  return (
    <mesh ref={meshRef}>
      <OrbitControls enablePan={true} />
    </mesh>
  );
};`
  }
];

const techStack = [
  { category: 'Backend', items: ['Laravel', 'Node.js', 'PHP', 'Python'], icon: Server },
  { category: 'Frontend', items: ['React', 'Three.js', 'Tailwind CSS', 'WebGL'], icon: Layers },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'Redis'], icon: Database },
  { category: 'DevOps', items: ['Git', 'Docker', 'Linux', 'Nginx'], icon: Box },
  { category: 'APIs', items: ['REST', 'WebSocket', 'GraphQL'], icon: Cpu },
  { category: 'Tools', items: ['VS Code', 'Postman', 'Figma', 'Blender'], icon: Code }
];

function CodeBlock({ snippet }: { snippet: typeof codeSnippets[0] }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black/60 backdrop-blur-md rounded-xl overflow-hidden border border-green-500/30"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-green-900/20 border-b border-green-500/20">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-sm font-mono">{snippet.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">{snippet.language}</span>
          <button
            onClick={copyCode}
            className="p-1 hover:bg-green-500/20 rounded transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-green-300 leading-relaxed">
          {snippet.code}
        </code>
      </pre>
    </motion.div>
  );
}

export function DeveloperMode() {
  return (
    
    <div className="relative min-h-screen">
      <SplashCursor 
        SIM_RESOLUTION={120}
        DYE_RESOLUTION={200}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={5000}
        COLOR_UPDATE_SPEED={8}
      />
      <PixelBlastBackground />
      <div className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-mono">Developer Mode Active</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
              <span className="text-green-400">&lt;</span>
              <TextType 
                text="Hartanto Situmorang" 
                speed={60}
                delay={500}
                cursor={true}
                cursorStyle="line"
              />
              <span className="text-green-400">/&gt;</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 font-mono">
              Full Stack Developer | System Architect
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['PHP', 'JavaScript', 'Python', 'SQL', 'React', 'Laravel'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 font-mono text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-mono"
            >
              <span className="text-green-400">#</span> Tech Stack
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <stack.icon className="w-5 h-5 text-green-400" />
                    <h3 className="text-green-400 font-mono">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-green-500/10 rounded text-xs text-gray-300 font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Snippets */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-mono"
            >
              <span className="text-green-400">//</span> Code Samples
            </motion.h2>
            
            <div className="space-y-8">
              {codeSnippets.map((snippet) => (
                <CodeBlock key={snippet.title} snippet={snippet} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Deep Dive */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-mono"
            >
              <span className="text-green-400">const</span> projects = [
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-mono group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{project.subtitle}</p>
                    </div>
                    <GitBranch className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors" />
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-green-400 mb-2 font-mono">// Key Features</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 mt-1 text-green-500/50" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-green-400 font-mono mt-8"
            >
              ];
            </motion.p>
          </div>
        </section>

        {/* Git Stats */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-green-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                <GitBranch className="w-6 h-6 text-green-400" />
                Git Activity
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Repositories', value: '15+' },
                  { label: 'Commits', value: '500+' },
                  { label: 'Projects', value: '10+' },
                  { label: 'Contributions', value: '1000+' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-green-500/5 rounded-lg">
                    <p className="text-2xl font-bold text-green-400 font-mono">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-green-500/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500 font-mono text-sm">
              <span className="text-green-400">//</span> Built with React + TypeScript + Tailwind
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
