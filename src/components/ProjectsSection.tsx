import { motion } from "framer-motion";
import { ExternalLink, Github, Lock, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "AI-Based Web Application Vulnerability Scanner",
    description: "Developed a security-focused tool to detect common web vulnerabilities such as SQL Injection and Cross-Site Scripting (XSS). Implemented automated scanning logic to analyze 10+ web inputs and generated automated reports summarizing detected vulnerabilities and risk levels.",
    tech: ["Python", "Security Analysis", "Automation"],
    icon: ShieldCheck,
    github: "https://github.com/kann798",
    demo: "#",
  },
  {
    title: "Password Strength Analyzer",
    description: "Built a password strength analyzer evaluating 4 security factors (length, uppercase, numbers, symbols). Designed an interactive interface providing real-time password strength feedback and security recommendations.",
    tech: ["Python", "Security", "UI Design"],
    icon: Lock,
    github: "https://github.com/kann798",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">04.</span> Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 border-glow group hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Scan line effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan-line" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="w-10 h-10 text-primary/70 group-hover:text-primary transition-colors" />
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-mono bg-secondary text-primary/80 rounded-full border border-primary/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
