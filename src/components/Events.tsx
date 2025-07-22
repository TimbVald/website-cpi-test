import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Video, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "La 37e Conférence du Conseil Scientifique International pour la Recherche et le Contrôle de la Trypanosomiase (ISCTRC)",
      type: "Hybride",
      venue: "Palais De Congrès De Yaoundé...",
      startTime: "08:00 AM",
      endTime: "05:00 PM",
      startDate: "04 AUG",
      endDate: "08 AUG",
      color: "primary"
    },
    {
      id: 2,
      title: "SMP-AH Workshop",
      type: "Physique",
      venue: "Nairobi, Kenya",
      startTime: "09:35 AM",
      endTime: "04:35 PM",
      startDate: "22 JUL",
      endDate: "24 JUL",
      color: "secondary"
    },
    {
      id: 3,
      title: "Renforcement de la Prévention des Pertes Alimentaires par la Politique, l'Intégration de la Chaîne de Valeur et les Standards",
      type: "En ligne",
      venue: "En ligne",
      startTime: "03:00 PM",
      endTime: "04:00 PM",
      startDate: "14 JUL",
      endDate: "14 JUL",
      color: "accent"
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

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "hybride": return Video;
      case "physique": return Users;
      case "en ligne": return Video;
      default: return Calendar;
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary uppercase tracking-wide">ENGAGEZ-VOUS AVEC NOUS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Événements à <span className="text-secondary">Venir</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participez à nos conférences, ateliers et formations pour renforcer la coopération phytosanitaire africaine
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => {
            const TypeIcon = getTypeIcon(event.type);
            return (
              <Card key={event.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden border-border/50">
                <CardContent className="p-0">
                  {/* Date header */}
                  <div className={`relative p-4 bg-gradient-to-r ${getColorClasses(event.color)} text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {event.startTime} - {event.endTime}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{event.startDate}</div>
                        {event.endDate !== event.startDate && (
                          <div className="text-sm">- {event.endDate}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-bold text-lg text-primary leading-tight group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>

                    {/* Event details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <TypeIcon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary">Type d'événement</div>
                          <div className="text-sm text-muted-foreground">{event.type}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary">Lieu</div>
                          <div className="text-sm text-muted-foreground">{event.venue}</div>
                        </div>
                      </div>
                    </div>

                    {/* Register button */}
                    <Button variant="outline" className="w-full group mt-4">
                      S'inscrire maintenant
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="group">
            Voir tous les événements
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;