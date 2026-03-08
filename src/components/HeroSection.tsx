import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const titles = [
  "Cybersecurity Enthusiast",
  "Network Security Analyst",
  "Ethical Hacker",
  "Security Researcher",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding grid-bg overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/50 animate-glow-pulse">
              <img src={profileImg} alt="Kanna - Cybersecurity Professional" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full border-4 border-background" />
          </div>
        </motion.div>

        {/* Terminal-style greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-mono bg-secondary rounded-full text-primary border border-primary/20">
            ~/portfolio $ whoami
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
        >
          Hi, I'm <span className="text-gradient neon-glow">Karunakar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl font-mono text-muted-foreground mb-8 h-8"
        >
          <span className="text-primary">&gt; </span>
          {displayed}
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
        >
          Detail-oriented CSE graduate with a strong focus on cyber security, network security, 
          and vulnerability analysis. Ready to protect systems and networks.
        </motion.p>

        {/* Social Links & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_25px_hsl(160_100%_50%/0.4)] transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href="#"
            className="px-8 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/kanna", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/kanna", label: "GitHub" },
            { icon: Mail, href: "mailto:kanna@email.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
