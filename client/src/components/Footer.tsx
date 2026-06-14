import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card/30 border-t border-border">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-display text-lg">+</span>
              </div>
              <span className="font-display text-lg">Clínica Vida Plena</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Cuidados de saúde de qualidade em Talatona, Luanda. Especialistas
              dedicados ao seu bem-estar e da sua família.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+244923000000" className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" /> +244 923 000 000
              </a>
              <a href="mailto:geral@vidaplena.ao" className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" /> geral@vidaplena.ao
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" /> Talatona, Luanda
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Início</Link></li>
              <li><Link href="/especialidades" className="hover:text-foreground transition-colors">Especialidades</Link></li>
              <li><Link href="/sobre" className="hover:text-foreground transition-colors">Sobre Nós</Link></li>
              <li><Link href="/contacto" className="hover:text-foreground transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" /> Horário
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4"><span>Seg – Sex</span><span>07h00 – 19h00</span></li>
              <li className="flex justify-between gap-4"><span>Sábado</span><span>08h00 – 14h00</span></li>
              <li className="flex justify-between gap-4"><span>Domingo</span><span>Urgências</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>&copy; {year} Clínica Vida Plena. Todos os direitos reservados.</p>
          <p>Site desenvolvido por DDA-Web</p>
        </div>
      </div>
    </footer>
  );
}
