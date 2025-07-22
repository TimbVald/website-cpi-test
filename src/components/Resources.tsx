import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Video, Image, BookOpen, ExternalLink, ArrowRight } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Documents Techniques",
      icon: FileText,
      count: "45+",
      description: "Guides, protocoles et standards phytosanitaires",
      color: "primary"
    },
    {
      title: "Formations Vidéo",
      icon: Video,
      count: "30+",
      description: "Modules de formation en ligne",
      color: "secondary"
    },
    {
      title: "Galerie Photo",
      icon: Image,
      count: "200+",
      description: "Images et documentation visuelle",
      color: "accent"
    },
    {
      title: "Publications",
      icon: BookOpen,
      count: "20+",
      description: "Rapports annuels et études",
      color: "primary"
    }
  ];

  const recentResources = [
    {
      title: "Évaluation des lacunes d'exportation du bétail du Kenya : Analyse de pré-benchmarking vers l'engagement de la Namibie",
      type: "Publication",
      year: "2025",
      image: "/placeholder.svg?height=200&width=150",
      category: "Recherche"
    },
    {
      title: "Plateforme pour aider les régions pastorales à commercialiser leur bétail",
      type: "Plateforme",
      year: "2025", 
      image: "/placeholder.svg?height=200&width=150",
      category: "Innovation"
    },
    {
      title: "Bien-être des Animaux Aquatiques en Afrique",
      type: "Publication",
      year: "2024",
      image: "/placeholder.svg?height=200&width=150",
      category: "Recherche"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary": return "from-primary to-primary-light";
      case "secondary": return "from-secondary to-secondary-light";
      case "accent": return "from-accent to-secondary";
      default: return "from-primary to-primary-light";
    }
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Download className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary uppercase tracking-wide">EXPLORER</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Dernières <span className="text-secondary">Ressources</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos publications récentes, guides techniques et matériel de formation
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resourceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${getColorClasses(category.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">{category.title}</h3>
                  <div className="text-2xl font-bold text-secondary mb-2">{category.count}</div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Resources - Card Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentResources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden border-border/50">
              <CardContent className="p-0">
                {/* Resource Image/Preview */}
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-medium text-primary">
                    {resource.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-lg text-primary leading-tight group-hover:text-secondary transition-colors">
                    {resource.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-medium">{resource.type}</span>
                    <div className="text-right">
                      <div className="text-primary font-bold">Publié</div>
                      <div>{resource.year}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 group">
                      <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                      Télécharger
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="group">
            Voir toutes les ressources
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;