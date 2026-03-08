import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent successfully! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">06.</span> Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Interested in working together or have a question? Feel free to reach out.
            </p>

            {[
              { icon: Mail, text: "kannareddy341@gmail.com" },
              { icon: Phone, text: "+91 8309947802" },
              { icon: MapPin, text: "India" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card p-6 border-glow space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-1.5">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                maxLength={100}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                maxLength={255}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                rows={4}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_25px_hsl(160_100%_50%/0.4)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
