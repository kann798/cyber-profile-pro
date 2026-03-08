import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Shield className="w-4 h-4 text-primary" />
        <span>© 2024 Kanna. All rights reserved.</span>
      </div>
      <p className="text-xs text-muted-foreground font-mono">
        Designed with passion for cybersecurity
      </p>
    </div>
  </footer>
);

export default Footer;
