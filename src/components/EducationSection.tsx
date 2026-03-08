import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech - CSE (Cyber Security)",
    institution: "Sri Venkateswara College of Engineering and Technology, Chittoor",
    year: "2022 – 2026",
    cgpa: "7.70 CGPA",
    description: "Specializing in cybersecurity, network security, and vulnerability analysis.",
  },
  {
    degree: "Intermediate - MPC",
    institution: "Sri Chaitanya Junior College, Kurnool",
    year: "2020 – 2022",
    cgpa: "83%",
    description: "Mathematics, Physics, and Chemistry stream.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">02.</span> Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-8 z-10 shadow-[0_0_10px_hsl(160_100%_50%/0.5)]" />

              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card p-6 border-glow hover:border-primary/40 transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-mono text-primary">{edu.cgpa}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground/70 text-sm mb-3">{edu.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" /> {edu.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
