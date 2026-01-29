import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStartup",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "NOVA transformó completamente nuestra presencia digital. En 6 meses triplicamos nuestro engagement y duplicamos las conversiones.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Director de Marketing, RetailCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "El equipo de NOVA entiende realmente lo que significa crear una marca que conecta. Superaron todas nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Laura Fernández",
    role: "Fundadora, EcoBeauty",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Profesionales, creativos y comprometidos. La mejor decisión que tomamos fue confiar en NOVA para nuestra estrategia digital.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Lo que dicen nuestros{' '}
            <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Las historias de éxito de quienes confiaron en nosotros hablan por sí solas.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl glass-card group hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-lime text-lime" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <div className="font-display font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
