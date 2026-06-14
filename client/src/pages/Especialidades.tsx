import { Button } from "@/components/ui/button";
import { Phone, HeartPulse, Baby, Eye, Bone, Activity, Stethoscope, Brain, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const especialidades = [
  {
    icon: <HeartPulse className="w-6 h-6" />,
    name: "Clínica Geral",
    desc: "Consultas de rotina, check-ups, acompanhamento de doenças crónicas e orientação geral de saúde para toda a família.",
    dias: "Segunda a Sábado",
  },
  {
    icon: <Baby className="w-6 h-6" />,
    name: "Pediatria",
    desc: "Acompanhamento do crescimento e desenvolvimento infantil, vacinação, consultas de rotina e tratamento de doenças comuns na infância.",
    dias: "Segunda, Quarta e Sexta",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    name: "Oftalmologia",
    desc: "Exames de vista completos, diagnóstico e tratamento de problemas oculares, prescrição de óculos e lentes de contacto.",
    dias: "Terça e Quinta",
  },
  {
    icon: <Bone className="w-6 h-6" />,
    name: "Ortopedia",
    desc: "Diagnóstico e tratamento de problemas ósseos, articulares e musculares. Acompanhamento de lesões e reabilitação.",
    dias: "Quarta e Sábado",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    name: "Cardiologia",
    desc: "Avaliação cardiovascular completa, electrocardiogramas, acompanhamento de hipertensão e prevenção de doenças cardíacas.",
    dias: "Segunda e Quinta",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    name: "Ginecologia",
    desc: "Cuidados de saúde da mulher em todas as fases da vida — exames de rotina, planeamento familiar e acompanhamento pré-natal.",
    dias: "Terça, Quinta e Sábado",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    name: "Psicologia",
    desc: "Apoio psicológico para adultos e adolescentes. Espaço confidencial e acolhedor para cuidar da saúde mental.",
    dias: "Segunda a Sexta (marcação)",
  },
];

export default function Especialidades() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-grid">
        <div className="container max-w-2xl">
          <div className="pill-teal mb-6">As Nossas Áreas</div>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">
            Especialidades<br />
            <span className="text-gradient-accent">médicas disponíveis</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Equipa de especialistas qualificados, prontos para cuidar de si
            e da sua família com proximidade e profissionalismo.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {especialidades.map((e, i) => (
              <div key={i} className="card-modern flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                    {e.icon}
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-card border border-border text-muted-foreground">
                    {e.dias}
                  </span>
                </div>
                <h3 className="font-display text-xl">{e.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stripe relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/5 blur-[80px] rounded-full" />
        <div className="container relative text-center max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl mb-4">
            Não sabe qual especialidade<br />
            <span className="text-gradient-warm">precisa?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Contacte-nos e ajudamo-lo a encontrar o especialista certo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+244923000000">
              <Button className="btn-primary gap-2 w-full sm:w-auto">
                <Phone className="w-4 h-4" /> Ligar Agora
              </Button>
            </a>
            <Link href="/contacto">
              <Button variant="outline" className="border-border hover:border-accent gap-2 w-full sm:w-auto">
                Enviar Mensagem <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
