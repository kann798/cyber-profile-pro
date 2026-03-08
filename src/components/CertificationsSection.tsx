import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2024" },
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2024" },
  { name: "Google Cybersecurity Certificate", issuer: "Google / Coursera", year: "2023" },
  { name: "Cisco CCNA", issuer: "Cisco", year: "2023" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2023" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">05.</span> Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 border-glow flex items-center gap-5 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer} · {cert.year}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
