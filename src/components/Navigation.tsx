import React from 'react';
import { Github, Mail, Twitter } from 'lucide-react';

const Navigation = () => {
  const links = [
    { icon: <Github className="w-6 h-6" />, href: "https://github.com", label: "GitHub" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:contact@example.com", label: "Email" },
    { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-glitch-pink transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative">
                  {link.icon}
                  <div className="absolute inset-0 group-hover:animate-glitch opacity-0 group-hover:opacity-50">
                    {link.icon}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;