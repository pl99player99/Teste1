import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, HeartHandshake, Award, Users, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Sobre() {
  const valores = [
    { icon: <HeartHandshake className="w-5 h-5" />, title: "Cuidado Humano", desc: "Cada paciente é tratado com atenção, respeito e tempo dedicado." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Confiança", desc: "Profissionais qualificados e instalações cuidadas." },
    { icon: <Award className="w-5 h-5" />, title: "Qualidade", desc: "Equipamentos modernos e práticas actualizadas." },
    { icon: <Users className="w-5 h-5" />, title: "Família", desc: "Cuidamos de todas as gerações, da infância à terceira idade." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-grid">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="pill-teal mb-6">Quem Somos</div>
              <h1 className="font-display text-4xl sm:text-5xl mb-6">
                Mais do que uma clínica.<br />
                <span className="text-gradient-warm">Uma família de cuidados.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Clínica Vida Plena nasceu em Talatona com um propósito simples:
                oferecer cuidados de saúde de qualidade, com proximidade e num
                ambiente acolhedor. Acreditamos que cuidar bem das pessoas começa
                por ouvi-las.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "7", label: "Especialidades" },
                { num: "10+", label: "Médicos" },
                { num: "5000+", label: "Consultas/ano" },
                { num: "4.9", label: "Avaliação média" },
              ].map((s, i) => (
                <div key={i} className="card-modern text-center">
                  <p className="font-display text-3xl text-accent mb-1">{s.num}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-lg mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Valores</p>
            <h2 className="font-display text-4xl">O que nos guia</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valores.map((v, i) => (
              <div key={i} className="card-modern flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instalações */}
      <section className="py-20 bg-card/20">
        <div className="container max-w-2xl">
          <div className="max-w-lg mb-8">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2">Instalações</p>
            <h2 className="font-display text-4xl mb-4">Um espaço pensado para si</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A nossa clínica em Talatona conta com salas de consulta equipadas,
            sala de espera confortável, área pediátrica adaptada para crianças
            e laboratório próprio para exames de rotina — tudo num só espaço,
            para tornar a sua visita mais simples.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Estacionamento próprio disponível e acesso facilitado para pessoas
            com mobilidade reduzida.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stripe relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/5 blur-[80px] rounded-full" />
        <div className="container relative text-center max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl mb-4">
            Conheça-nos<br />
            <span className="text-gradient-accent">pessoalmente.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Marque a sua primeira consulta e venha conhecer o nosso espaço.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+244923000000">
              <Button className="btn-primary gap-2 w-full sm:w-auto">
                <Phone className="w-4 h-4" /> Marcar Consulta
              </Button>
            </a>
            <Link href="/contacto">
              <Button variant="outline" className="border-border hover:border-accent gap-2 w-full sm:w-auto">
                Ver Localização <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
