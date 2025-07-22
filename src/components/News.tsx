import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Eye } from "lucide-react";
import newsBg from "@/assets/news-bg.jpg";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Nouveau protocole de lutte contre la mouche des fruits en Afrique de l'Ouest",
      excerpt: "Le CPI lance une initiative majeure pour combattre l'invasion de la mouche des fruits qui menace les cultures fruitières...",
      date: "15 Décembre 2024",
      category: "Recherche",
      readTime: "5 min",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Conférence continentale sur la sécurité phytosanitaire",
      excerpt: "Plus de 200 experts se réuniront à Addis-Abeba pour discuter des stratégies de protection des cultures...",
      date: "10 Décembre 2024",
      category: "Événement",
      readTime: "3 min",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Formation certifiante en surveillance phytosanitaire",
      excerpt: "Nouveau programme de formation destiné aux agents phytosanitaires des pays membres de l'Union Africaine...",
      date: "8 Décembre 2024",
      category: "Formation",
      readTime: "4 min",
      image: "/api/placeholder/400/250"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Recherche": return "bg-primary text-white";
      case "Événement": return "bg-secondary text-white";
      case "Formation": return "bg-accent text-white";
      default: return "bg-muted text-foreground";
    }
  };

  return (
    <section id="news" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={newsBg} 
          alt="News and media"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-secondary/10" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">ACTUALITÉS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Dernières <span className="text-secondary">Nouvelles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez informé des dernières avancées en matière de protection phytosanitaire et des initiatives du CPI
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden border-border/50">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-primary" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                  {item.category}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <span>•</span>
                  <span>{item.readTime} de lecture</span>
                </div>
                
                <h3 className="font-bold text-lg text-primary group-hover:text-secondary transition-colors duration-300 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto font-medium text-secondary hover:text-primary group">
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="group">
            Voir toutes les actualités
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;