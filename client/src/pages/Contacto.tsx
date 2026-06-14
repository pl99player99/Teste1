import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({ name: "", phone: "", specialty: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const infos = [
    { icon: <Phone className="w-5 h-5" />, title: "Telefone", value: "+244 923 000 000", href: "tel:+244923000000", color: "text-accent bg-accent/10 border-accent/20" },
    { icon: <MessageCircle className="w-5 h-5" />, title: "WhatsApp", value: "+244 923 000 000", href: "https://wa.me/244923000000", color: "text-green-400 bg-green-400/10 border-green-400/20" },
    { icon: <Mail className="w-5 h-5" />, title: "Email", value: "geral@vidaplena.ao", href: "mailto:geral@vidaplena.ao", color: "text-orange-400 bg-orange-400/10 border-orange-400/20" },
    { icon: <MapPin className="w-5 h-5" />, title: "Localização", value: "Talatona, Luanda", href: null, color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-grid">
        <div className="container max-w-2xl">
          <div className="pill-teal mb-6">Contacto</div>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">
            Estamos aqui<br />
            <span className="text-gradient-accent">para o ajudar.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Marque a sua consulta ou tire as suas dúvidas. Respondemos rapidamente.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {infos.map((info, i) => (
              <div key={i} className="card-modern flex flex-col gap-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${info.color}`}>
                  {info.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5">{info.title}</p>
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-accent text-xs hover:underline break-all">{info.value}</a>
                  ) : (
                    <p className="text-xs font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl mb-2">Marcar Consulta</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Preencha o formulário e entraremos em contacto para confirmar o horário.
              </p>
              {submitted ? (
                <div className="card-modern text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Pedido Enviado!</h3>
                  <p className="text-sm text-muted-foreground">Entraremos em contacto em breve para confirmar a sua consulta.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-modern space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Nome</label>
                    <input type="text" required value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-sm outline-none focus:border-accent transition" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Telefone / WhatsApp</label>
                    <input type="tel" required value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-sm outline-none focus:border-accent transition" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Especialidade</label>
                    <select value={formData.specialty}
                      onChange={e => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-sm outline-none focus:border-accent transition">
                      <option value="">Selecione</option>
                      <option>Clínica Geral</option>
                      <option>Pediatria</option>
                      <option>Oftalmologia</option>
                      <option>Ortopedia</option>
                      <option>Cardiologia</option>
                      <option>Ginecologia</option>
                      <option>Psicologia</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Mensagem (opcional)</label>
                    <textarea rows={4} value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-sm outline-none focus:border-accent transition resize-none" />
                  </div>
                  <Button type="submit" className="btn-primary w-full">Enviar Pedido</Button>
                </form>
              )}
            </div>

            {/* Side info */}
            <div className="space-y-6">
              <div className="card-modern">
                <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" /> Horário de Funcionamento
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Segunda – Sexta</span><span className="font-medium">07h00 – 19h00</span></div>
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Sábado</span><span className="font-medium">08h00 – 14h00</span></div>
                  <div className="flex justify-between py-2"><span className="text-muted-foreground">Domingo</span><span className="font-medium text-orange-400">Apenas urgências</span></div>
                </div>
              </div>

              <div className="card-modern">
                <h3 className="font-display text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" /> Localização
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Talatona, Luanda — próximo ao Belas Shopping. Estacionamento próprio disponível.
                </p>
                <div className="rounded-xl overflow-hidden h-40 bg-muted/20 flex items-center justify-center border border-border">
                  <p className="text-xs text-muted-foreground">Mapa será carregado aqui</p>
                </div>
              </div>

              <div className="card-modern bg-accent/5 border-accent/20">
                <h3 className="font-semibold text-sm mb-1">Urgências?</h3>
                <p className="text-xs text-muted-foreground mb-3">Para situações urgentes, ligue directamente.</p>
                <a href="tel:+244923000000">
                  <Button className="btn-warm w-full gap-2 text-sm">
                    <Phone className="w-4 h-4" /> Ligar Agora
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
