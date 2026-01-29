import { Palette, BarChart3, Share2, Code2, Megaphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Diseño Visual",
    description: "Creamos identidades visuales únicas que conectan con tu audiencia y comunican la esencia de tu marca.",
    color: "from-primary to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Marketing Digital",
    description: "Estrategias data-driven que impulsan el crecimiento y maximizan el retorno de tu inversión.",
    color: "from-pink-500 to-accent",
  },
  {
    icon: Share2,
    title: "Redes Sociales",
    description: "Gestión integral de redes con contenido que genera engagement y construye comunidades activas.",
    color: "from-accent to-lime",
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y optimizados que convierten visitantes en clientes.",
    color: "from-lime to-primary",
  },
  {
    icon: Megaphone,
    title: "Publicidad Online",
    description: "Campañas publicitarias efectivas en Google, Meta y otras plataformas para alcanzar tus objetivos.",
    color: "from-primary to-accent",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Todo lo que tu marca necesita para{' '}
            <span className="gradient-text">brillar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos soluciones integrales de marketing y diseño para impulsar tu negocio al siguiente nivel.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass-card hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] -z-10"
                style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))` }}
              />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-full h-full text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                <span className="text-sm font-medium">Saber más</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
