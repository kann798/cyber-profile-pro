import { motion } from "framer-motion";
import { Shield, Target, Cpu } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">01.</span> About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-10 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="glass-card p-8 border-glow h-full">
              <p className="text-foreground/90 leading-relaxed text-lg mb-6">
                I am a detail-oriented Computer Science Engineering graduate with a strong focus on 
                cyber security, network security, and vulnerability analysis. I have hands-on experience 
                through academic projects involving packet analysis, network traffic monitoring, and 
                basic security assessments.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg mb-6">
                I completed a 2-month cybersecurity internship at ExcelR covering network security 
                and vulnerability assessment. I'm proficient in tools like Nmap, Burp Suite, 
                Cisco Packet Tracer, and Kali Linux.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Seeking an entry-level cybersecurity role to apply my security knowledge and develop 
                practical skills in protecting systems and networks.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { icon: Shield, title: "Defense", desc: "Network & endpoint security" },
              { icon: Target, title: "Offense", desc: "Penetration testing & VAPT" },
              { icon: Cpu, title: "Analysis", desc: "Threat detection & response" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card p-6 border-glow group hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-primary mb-3 group-hover:drop-shadow-[0_0_8px_hsl(160_100%_50%/0.6)] transition-all" />
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
