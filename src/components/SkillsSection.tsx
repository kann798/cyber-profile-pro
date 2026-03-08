import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming & Databases",
    skills: [
      { name: "Python", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Cybersecurity & Network Tools",
    skills: [
      { name: "Nmap", level: 80 },
      { name: "Burp Suite", level: 75 },
      { name: "Cisco Packet Tracer", level: 78 },
      { name: "Kali Linux", level: 85 },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 80 },
      { name: "MS Office", level: 85 },
    ],
  },
  {
    title: "Operating Systems & Soft Skills",
    skills: [
      { name: "Windows", level: 85 },
      { name: "Linux", level: 80 },
      { name: "Team Collaboration", level: 85 },
      { name: "Critical Thinking", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">03.</span> Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass-card p-6 border-glow"
            >
              <h3 className="text-lg font-semibold text-primary font-mono mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_hsl(160_100%_50%/0.6)]" />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground/80">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.1 + si * 0.05 }}
                        style={{ boxShadow: "0 0 8px hsl(160 100% 50% / 0.4)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
