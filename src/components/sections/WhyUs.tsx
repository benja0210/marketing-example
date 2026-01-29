import { Zap, Target, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Creatividad sin límites",
    description: "Ideas frescas y originales que rompen esquemas y capturan la atención de tu audiencia.",
  },
  {
    icon: Target,
    title: "Resultados medibles",
    description: "Cada estrategia está respaldada por datos y enfocada en generar un ROI tangible para tu negocio.",
  },
  {
    icon: Users,
    title: "Enfoque en el cliente",
    description: "Tu éxito es nuestro éxito. Trabajamos codo a codo contigo para entender y superar tus expectativas.",
  },
  {
    icon: TrendingUp,
    title: "Estrategias personalizadas",
    description: "Soluciones a medida que se adaptan a las necesidades únicas de tu marca y mercado.",
  },
];

const WhyUs = () => {
  return (
    <section id="nosotros" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Somos el socio que tu marca{' '}
              <span className="gradient-text">necesita</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Más que una agencia, somos un equipo apasionado que se compromete con el crecimiento de cada proyecto. 
              Combinamos creatividad, estrategia y tecnología para impulsar marcas al siguiente nivel.
            </p>
            
            {/* Quick stats */}
            <div className="flex gap-8">
              <div>
                <div className="text-4xl font-display font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent">3x</div>
                <div className="text-sm text-muted-foreground mt-1">ROI promedio</div>
              </div>
            </div>
          </div>

          {/* Right - Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
