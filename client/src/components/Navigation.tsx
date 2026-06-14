import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const navItems = [
    { label: "Especialidades", path: "/especialidades" },
    { label: "Sobre Nós", path: "/sobre" },
    { label: "Contacto", path: "/contacto" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location === "/" : location.startsWith(path);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}>
        <div className="container flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center">
              <span className="text-accent font-display text-lg">+</span>
            </div>
            <span className="font-display text-lg">Vida Plena</span>
          </Link>

          <div className="hidden md:flex gap-7 items-center">
            {navItems.map(item => (
              <Link key={item.path} href={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}>
                {item.label}
              </Link>
            ))}
            <a href="tel:+244923000000" className="btn-primary text-sm px-5 py-2.5 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Marcar Consulta
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2.5 rounded-xl bg-card/60">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 bg-background z-[999] flex flex-col md:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-lg">Vida Plena</span>
            <button onClick={() => setMobileOpen(false)} className="p-2.5 rounded-xl bg-card">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 px-5 py-4 space-y-1">
            {navItems.map(item => (
              <Link key={item.path} href={item.path}
                className={`block px-5 py-4 rounded-2xl text-lg font-medium transition-colors ${
                  isActive(item.path) ? "bg-accent/10 text-accent" : "hover:bg-card"
                }`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-5 pb-10 pt-4 space-y-3">
            <a href="tel:+244923000000" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
              <Phone className="w-4 h-4" /> Marcar Consulta
            </a>
            <a href="https://wa.me/244923000000" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-border text-sm font-medium hover:border-green-500 hover:text-green-400 transition">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
