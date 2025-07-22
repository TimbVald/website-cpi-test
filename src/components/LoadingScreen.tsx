import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-primary-dark to-secondary flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
            <div className="relative w-full h-full bg-white rounded-full p-3 shadow-elegant animate-pulse-glow">
              <img 
                src={logo} 
                alt="CPI Logo" 
                className="w-full h-full object-contain animate-float"
              />
            </div>
          </div>
          
          {/* Rotating border */}
          <div className="absolute inset-0 w-24 h-24 mx-auto">
            <div className="w-full h-full border-4 border-transparent border-t-secondary border-r-secondary rounded-full animate-spin" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Conseil Phytosanitaire Interafricain
          </h1>
          <p className="text-white/80 text-sm">
            Chargement en cours...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-secondary to-secondary-light transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-white/60 text-xs mt-2">
            {Math.round(progress)}%
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default LoadingScreen;