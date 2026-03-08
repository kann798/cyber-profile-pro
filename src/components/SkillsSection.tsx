import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cybersecurity",
    skills: [
      { name: "Penetration Testing", level: 75 },
      { name: "Vulnerability Assessment", level: 80 },
      { name: "Network Security", level: 85 },
      { name: "Incident Response", level: 70 },
      { name: "SIEM Tools", level: 65 },
    ],
  },
  {
    title: "Networking",
    skills: [
      { name: "TCP/IP & OSI Model", level: 90 },
      { name: "Firewalls & IDS/IPS", level: 80 },
      { name: "DNS / DHCP / VPN", level: 85 },
      { name: "Wireshark", level: 80 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 75 },
      { name: "Bash Scripting", level: 70 },
      { name: "SQL", level: 72 },
      { name: "HTML / CSS / JS", level: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Kali Linux", level: 85 },
      { name: "Nmap / Metasploit", level: 80 },
      { name: "Burp Suite", level: 75 },
      { name: "Linux Administration", level: 80 },
      { name: "Git & GitHub", level: 70 },
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
