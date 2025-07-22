import { Button } from "@/components/ui/button";
import { Shield, Microscope, Globe, BookOpen, Users, TrendingUp } from "lucide-react";
import researchImage from "@/assets/research-image.jpg";
import labBg from "@/assets/lab-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Protection Phytosanitaire",
      description: "Surveillance et contrôle des organismes nuisibles aux végétaux à travers l'Afrique.",
      features: ["Surveillance des ravageurs", "Contrôle biologique", "Quarantaine végétale"],
      color: "from-primary to-primary-light"
    },
    {
      icon: Microscope,
      title: "Recherche & Innovation",
      description: "Développement de solutions innovantes pour la protection des cultures africaines.",
      features: ["Recherche appliquée", "Technologies vertes", "Solutions durables"],
      color: "from-secondary to-secondary-light"
    },
    {
      icon: Globe,
      title: "Coopération Régionale",
      description: "Facilitation de la coopération entre les pays membres de l'Union Africaine.",
      features: ["Harmonisation des normes", "Échange d'expertise", "Projets transfrontaliers"],
      color: "from-primary-light to-secondary"
    },
    {
      icon: BookOpen,
      title: "Formation & Capacitation",
      description: "Renforcement des capacités des professionnels phytosanitaires africains.",
      features: ["Programmes de formation", "Certification", "Échange académique"],
      color: "from-secondary-light to-primary"
    },
    {
      icon: Users,
      title: "Partenariats Stratégiques",
      description: "Développement de partenariats avec les secteurs public et privé.",
      features: ["Collaboration industrielle", "Partenariats internationaux", "Réseaux d'experts"],
      color: "from-primary to-secondary"
    },
    {
      icon: TrendingUp,
      title: "Développement Durable",
      description: "Promotion de pratiques agricoles durables pour l'avenir de l'Afrique.",
      features: ["Agriculture climato-intelligente", "Biodiversité", "Sécurité alimentaire"],
      color: "from-secondary to-primary-light"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={labBg} 
          alt="Laboratory research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/10" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">NOS SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Domaines d'Intervention
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Le CPI coordonne des initiatives stratégiques pour protéger les ressources végétales 
            africaines et soutenir le développement agricole durable du continent.
          </p>
        </div>

        {/* Featured Service */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-border/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full mb-6">
                  <Microscope className="w-4 h-4" />
                  <span className="text-sm font-medium">Initiative Phare</span>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Centre d'Excellence en Recherche Phytosanitaire
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Notre centre de recherche de pointe développe des solutions innovantes pour 
                  lutter contre les organismes nuisibles, en utilisant les dernières technologies 
                  et approches durables adaptées au contexte africain.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["IA & Big Data", "Biotechnologies", "Solutions Biologiques"].map((tag) => (
                    <span key={tag} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="hero" className="group">
                  En Savoir Plus
                  <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-elegant">
                  <img 
                    src={researchImage} 
                    alt="Centre de recherche phytosanitaire"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-glow border border-border/50">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Laboratoires</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    color: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { icon: Icon, title, description, features, color } = service;

  return (
    <div className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="bg-white rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 border border-border/50 h-full">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button variant="outline" className="group/btn">
          Découvrir
          <Shield className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default Services;