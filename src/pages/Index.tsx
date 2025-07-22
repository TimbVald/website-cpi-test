import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";
import News from "@/components/News";
import Events from "@/components/Events";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Timeline />
      <News />
      <Events />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
