"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function BottomNavbar() {
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-4 py-2 bg-background/80 backdrop-blur-lg border border-border rounded-full shadow-lg">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            size="sm"
            onClick={() => scrollToSection(item.id)}
            className="rounded-full text-xs sm:text-sm px-3 sm:px-4"
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}
