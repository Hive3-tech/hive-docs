import { Link } from "react-router";
import { Github, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Documentation",
      links: [
        { label: "Get Started", path: "/get-started" },
        { label: "API Reference", path: "/api-reference" },
        { label: "Video Tutorials", path: "/video-tutorials" },
        { label: "Changelog", path: "/changelog" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Communities", path: "/communities" },
        { label: "Courses", path: "/courses" },
        { label: "Events", path: "#" },
        { label: "Jobs", path: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "#" },
        { label: "GitHub", path: "#" },
        { label: "Support", path: "#" },
        { label: "Status", path: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#6B01B6] to-[#512DA8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-semibold text-lg bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
                Hive3
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Build and manage thriving Web3 communities with powerful tools for learning, events, and collaboration.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-[#6B01B6] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Hive3. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-[#6B01B6] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#6B01B6] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#6B01B6] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
