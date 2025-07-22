import { useState, useRef, useEffect } from "react";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

const Timeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      phase: "01",
      title: "Identification & Évaluation",
      description: "Identification des menaces phytosanitaires et évaluation des risques pour les cultures africaines.",
      details: ["Surveillance des organismes nuisibles", "Analyse des risques", "Cartographie des zones affectées"],
      duration: "1-2 mois"
    },
    {
      phase: "02", 
      title: "Recherche & Développement",
      description: "Développement de solutions adaptées aux conditions spécifiques du continent africain.",
      details: ["Recherche en laboratoire", "Tests de terrain", "Validation scientifique"],
      duration: "6-12 mois"
    },
    {
      phase: "03",
      title: "Harmonisation Régionale",
      description: "Coordination avec les pays membres pour harmoniser les approches et les normes.",
      details: ["Consultation multilatérale", "Standardisation des protocoles", "Formation des équipes"],
      duration: "3-6 mois"
    },
    {
      phase: "04",
      title: "Mise en Œuvre",
      description: "Déploiement des solutions sur le terrain avec le soutien des partenaires locaux.",
      details: ["Formation des agriculteurs", "Distribution des ressources", "Suivi des applications"],
      duration: "Continu"
    },
    {
      phase: "05",
      title: "Suivi & Évaluation",
      description: "Monitoring continu de l'efficacité et ajustements pour optimiser les résultats.",
      details: ["Collecte de données", "Analyse d'impact", "Amélioration continue"],
      duration: "Permanent"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">NOTRE PROCESSUS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Notre Processus d'Intervention
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une approche méthodique et collaborative pour une protection phytosanitaire efficace
          </p>
        </div>

        <div ref={sectionRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2 hidden md:block" />
          
          {processSteps.map((step, index) => (
            <TimelineStep
              key={index}
              step={step}
              index={index}
              isVisible={visibleSteps.includes(index)}
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-elegant border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Rejoignez Notre Mission
            </h3>
            <p className="text-muted-foreground mb-6">
              Participez à la protection des ressources végétales africaines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                Devenir Partenaire
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                En Savoir Plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineStepProps {
  step: {
    phase: string;
    title: string;
    description: string;
    details: string[];
    duration: string;
  };
  index: number;
  isVisible: boolean;
  isEven: boolean;
}

const TimelineStep = ({ step, index, isVisible, isEven }: TimelineStepProps) => {
  return (
    <div 
      data-step={index}
      className={`relative flex items-center mb-12 ${
        isEven ? 'md:flex-row-reverse' : ''
      } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Mobile Timeline */}
      <div className="flex md:hidden absolute left-0 top-0">
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
            isVisible ? 'bg-gradient-primary border-primary' : 'bg-white border-border'
          }`}>
            {isVisible ? (
              <CheckCircle className="w-4 h-4 text-white" />
            ) : (
              <Circle className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
          {index < 4 && (
            <div className="w-0.5 h-12 bg-gradient-primary mt-2" />
          )}
        </div>
      </div>

      {/* Desktop Timeline Marker */}
      <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-elegant ${
          isVisible ? 'bg-gradient-primary' : 'bg-muted'
        }`}>
          <span className="text-white font-bold text-sm">{step.phase}</span>
        </div>
      </div>

      {/* Content */}
      <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
        <div className="bg-white rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-500 border border-border/50 group">
          <div className="flex items-center justify-between mb-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
              isVisible ? 'bg-gradient-primary text-white' : 'bg-muted text-muted-foreground'
            }`}>
              <span className="md:hidden">{step.phase}</span>
              <span className="md:hidden">•</span>
              <span>{step.duration}</span>
            </div>
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
              isVisible ? 'text-primary' : 'text-muted-foreground'
            }`} />
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
          <p className="text-muted-foreground mb-4">{step.description}</p>
          
          <ul className="space-y-2">
            {step.details.map((detail, idx) => (
              <li key={idx} className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;