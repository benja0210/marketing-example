import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Neon Coffee",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    color: "from-primary/80 to-pink-500/80",
  },
  {
    title: "TechFlow App",
    category: "Desarrollo Web",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    color: "from-accent/80 to-lime/80",
  },
  {
    title: "Urban Style",
    category: "Redes Sociales",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    color: "from-pink-500/80 to-primary/80",
  },
  {
    title: "Fitness Pro",
    category: "Marketing Digital",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    color: "from-lime/80 to-accent/80",
  },
  {
    title: "Eco Market",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
    color: "from-accent/80 to-primary/80",
  },
  {
    title: "Music Hub",
    category: "Desarrollo Web",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
    color: "from-primary/80 to-accent/80",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-1/4 h-96 bg-accent/5 blur-[100px]" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Proyectos que <span className="gradient-text">inspiran</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Una selección de trabajos que demuestran nuestra pasión por el diseño y los resultados.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-background/80 text-sm font-medium uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-background mb-4">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-background font-medium">
                  <span>Ver proyecto</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
