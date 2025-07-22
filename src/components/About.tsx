import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import directorAvatar from "@/assets/director-avatar.jpg";
import logo from "@/assets/logo.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/10 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Creative layout with images */}
          <div className="relative">
            {/* Small video preview with play button */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-elegant z-10">
              <img 
                src={directorAvatar} 
                alt="Video preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Main large circular image with organic shape */}
            <div className="relative mt-16 ml-16">
              {/* Organic background shape */}
              <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] transform rotate-12" />
              
              {/* Main director image */}
              <div className="relative w-80 h-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src={directorAvatar} 
                  alt="Directeur CPI" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating agriculture/livestock elements */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white rounded-full shadow-elegant flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AU</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-secondary uppercase tracking-wide">À PROPOS DU CPI</span>
            </div>

            {/* Main heading - matching the reference image */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-primary">Nous offrons un leadership dans le</span>{" "}
              <span className="text-secondary">développement des ressources phytosanitaires pour l'Afrique.</span>
            </h2>

            {/* Description with African Union logo integration */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le CPI est un bureau technique spécialisé de la{" "}
                <span className="font-semibold text-primary">Commission de l'Union Africaine (CUA)</span>, 
                dirigé par le Directeur qui rend compte directement à la CUA à travers le
              </p>
              
              {/* African Union logo and text integration */}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-border/50">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                  <img 
                    src={logo} 
                    alt="African Union" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-primary text-lg">African Union</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Département de l'Agriculture, du Développement Rural, 
                    de l'Économie Bleue et de l'Environnement Durable (ARBE).</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Director card */}
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg border border-border/50 hover:shadow-elegant transition-shadow">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={directorAvatar} 
                  alt="Dr. Jean-Baptiste Bahama" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-primary text-lg">Dr. Jean-Baptiste Bahama</h4>
                <p className="text-secondary font-medium">Directeur et Chef de Mission</p>
              </div>
              <Button variant="secondary" className="group">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;