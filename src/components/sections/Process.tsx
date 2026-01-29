import { MessageCircle, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Conversamos",
    description: "Escuchamos tus objetivos, analizamos tu mercado y entendemos qué hace única a tu marca.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estrategia",
    description: "Diseñamos un plan a medida con acciones concretas para alcanzar tus metas de negocio.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ejecución",
    description: "Implementamos, medimos y optimizamos cada acción para maximizar resultados.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-primary/5 blur-[100px]" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Cómo <span className="gradient-text">trabajamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proceso simple y efectivo para transformar tu visión en resultados tangibles.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step card */}
                <div className="relative p-8 rounded-2xl bg-card border border-border group-hover:border-primary/50 transition-all duration-500">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-background border border-primary/50 rounded-full">
                    <span className="text-primary font-display font-bold text-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
