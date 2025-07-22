import { useEffect, useRef, useState } from "react";
import { Leaf, Users, Globe, Award, TrendingUp, Shield } from "lucide-react";
import agricultureBg from "@/assets/agriculture-bg.jpg";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Globe,
      number: 54,
      label: "Pays Membres de l'UA",
      suffix: "",
      color: "text-primary"
    },
    {
      icon: Users,
      number: 500000,
      label: "Agriculteurs Soutenus",
      suffix: "+",
      color: "text-secondary"
    },
    {
      icon: Leaf,
      number: 1200,
      label: "Espèces Végétales Protégées",
      suffix: "+",
      color: "text-primary"
    },
    {
      icon: Shield,
      number: 98,
      label: "Taux de Réussite",
      suffix: "%",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      number: 150,
      label: "Projets Actifs",
      suffix: "+",
      color: "text-primary"
    },
    {
      icon: Award,
      number: 25,
      label: "Années d'Excellence",
      suffix: "",
      color: "text-secondary"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={agricultureBg} 
          alt="African agriculture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/85" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">STATISTIQUES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Notre Impact en Chiffres
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Découvrez l'ampleur de notre mission de protection phytosanitaire à travers l'Afrique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ElementType;
  number: number;
  label: string;
  suffix: string;
  color: string;
  isVisible: boolean;
  delay: number;
}

const StatCard = ({ icon: Icon, number, label, suffix, color, isVisible, delay }: StatCardProps) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const stepValue = number / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += stepValue;
          if (current >= number) {
            setCurrentNumber(number);
            clearInterval(counter);
          } else {
            setCurrentNumber(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay]);

  return (
    <div className="group">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
        <div className="flex flex-col items-center text-center">
          <div className={`p-4 rounded-full bg-gradient-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-8 h-8 ${color}`} />
          </div>
          
          <div className="mb-4">
            <span className={`text-4xl md:text-5xl font-bold ${color} block animate-counter`}>
              {currentNumber.toLocaleString()}{suffix}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2">{label}</h3>
          
          <div className="w-12 h-1 bg-gradient-primary rounded-full group-hover:w-20 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Stats;