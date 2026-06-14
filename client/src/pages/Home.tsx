import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Stethoscope, HeartPulse, Baby, Eye, Bone, Activity, Star, Clock, ShieldCheck, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Home() {
  const especialidades = [
    { icon: <HeartPulse className="w-5 h-5" />, name: "Clínica Geral", desc: "Consultas de rotina e acompanhamento geral." },
    { icon: <Baby className="w-5 h-5" />, name: "Pediatria", desc: "Cuidados especializados para crianças." },
    { icon: <Eye className="w-5 h-5" />, name: "Oftalmologia", desc: "Exames e tratamentos de visão." },
    { icon: <Bone className="w-5 h-5" />, name: "Ortopedia", desc: "Diagnóstico e tratamento músculo-esquelético." },
    { icon: <Activity className="w-5 h-5" />, name: "Cardiologia", desc: "Avaliação e acompanhamento cardíaco." },
    { icon: <Stethoscope className="w-5 h-5" />, name: "Ginecologia", desc: "Saúde da mulher em todas as fases." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background to-background" />
          <div className="absolute inset-0 bg-grid opacity-60" />
        </div>
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-orange-400/8 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-2xl">
            <div className="pill-teal mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
              Talatona, Luanda
            </div>

            <h1 className="font-display leading-[1.05] mb-6">
              <span className="text-3xl sm:text-5xl block text-foreground/70 font-normal">
                Cuidamos da sua
              </span>
              <span className="text-5xl sm:text-7xl block mt-1">
                saúde com
              </span>
              <span className="text-4xl sm:text-6xl block mt-1">
                <span className="text-gradient-accent">dedicação</span> e{" "}
                <span className="text-gradient-warm">proximidade.</span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Clínica médica em Talatona com especialistas em diversas áreas.
              Marque a sua consulta de forma rápida, sem complicações.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+244923000000">
                <Button className="btn-primary gap-2 text-base px-8 py-6 w-full sm:w-auto">
                  <Phone className="w-4 h-4" /> Marcar Consulta
                </Button>
              </a>
              <Link href="/especialidades">
                <Button variant="outline" className="border-border hover:border-accent text-base px-8 py-6 w-full sm:w-auto">
                  Ver Especialidades
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border/30">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">{[1,2,3,4,5].map(i=><Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-xs text-muted-foreground"><span className="text-foreground font-semibold">4.9</span> avaliação</p>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span className="text-foreground font-semibold">Seg–Sáb</span> · Atendimento
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span className="text-foreground font-semibold">6</span> especialidades
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-xl mb-14">
            <p className="pill-warm mb-4">Especialidades</p>
            <h2 className="font-display text-4xl lg:text-5xl mb-4">
              Cuidados completos<span className="text-gradient-accent"> para toda a família</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Equipa de médicos especialistas prontos para o ajudar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {especialidades.map((e, i) => (
              <div key={i} className="card-modern flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                  {e.icon}
                </div>
                <h3 className="font-display text-lg">{e.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/especialidades">
              <Button variant="outline" className="gap-2 border-border hover:border-accent">
                Ver Todas as Especialidades <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 bg-card/20 bg-grid">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Como Marcar</p>
            <h2 className="font-display text-4xl lg:text-5xl mb-4">Simples e rápido</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            {[
              { step: "01", title: "Contacte-nos", desc: "Ligue, envie WhatsApp ou preencha o formulário do site." },
              { step: "02", title: "Escolha o horário", desc: "Indicamos disponibilidade do especialista que precisa." },
              { step: "03", title: "Compareça à consulta", desc: "Chegue 10 min antes. Tratamos do resto." },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-card border border-border flex flex-col items-center justify-center mb-4 relative z-10 shadow-sm">
                  <span className="text-xs text-accent font-bold">{s.step}</span>
                </div>
                <h3 className="font-display text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <a href="tel:+244923000000">
              <Button className="btn-warm gap-2 text-base px-8 py-6">
                <Phone className="w-4 h-4" /> Marcar Consulta Agora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">Pacientes</p>
            <h2 className="font-display text-4xl lg:text-5xl">Quem nos visita</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Esperança N.", text: "Atendimento rápido e humano. Os médicos explicam tudo com calma e paciência.", spec: "Clínica Geral" },
              { name: "Domingos A.", text: "Levei o meu filho à pediatra e o atendimento foi excelente. Recomendo muito.", spec: "Pediatria" },
              { name: "Helena M.", text: "Marquei consulta pelo WhatsApp e fui atendida no mesmo dia. Muito eficiente.", spec: "Ginecologia" },
            ].map((t, i) => (
              <div key={i} className="card-modern flex flex-col gap-4">
                <div className="flex gap-0.5">{[1,2,3,4,5].map(s=><Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-muted-foreground leading-relaxed flex-grow italic">"{t.text}"</p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.spec}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-stripe" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 blur-[120px] rounded-full" />
        <div className="container relative z-10 text-center max-w-2xl">
          <h2 className="font-display text-4xl lg:text-6xl mb-6">
            A sua saúde<br />
            <span className="text-gradient-accent">não pode esperar.</span>
          </h2>
          <p className="text-muted-foreground text-xl mb-10">
            Marque a sua consulta hoje mesmo. Atendimento de Segunda a Sábado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+244923000000">
              <Button className="btn-primary gap-2 text-lg px-10 py-7 w-full sm:w-auto">
                <Phone className="w-5 h-5" /> Ligar Agora
              </Button>
            </a>
            <a href="https://wa.me/244923000000" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 text-lg px-10 py-7 border-border hover:border-green-500 hover:text-green-400 w-full sm:w-auto">
                WhatsApp
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Talatona, Luanda — Próximo ao Belas Shopping
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
