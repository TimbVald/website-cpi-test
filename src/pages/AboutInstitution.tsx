import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, ShieldCheck, Users, Network, Globe, Landmark, BookOpen, Link2, ArrowRight } from "lucide-react";
import agricultureBg from "@/assets/agriculture-bg.jpg";
import logo from "@/assets/logo.png";
import React from "react";

const AboutInstitution = () => {
  return (
    <main className="bg-muted min-h-screen text-foreground font-sans">
      {/* En-tête introductif */}
      <section className="relative bg-gradient-to-br from-primary/90 to-secondary/80 text-white py-16 px-4 flex flex-col items-center text-center">
        <img src={logo} alt="CPI Logo" className="w-20 h-20 mb-4 rounded-full shadow-lg border-4 border-white bg-white/80 object-contain" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Conseil Phytosanitaire Interafricain (CPI)
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-6">
          Le Conseil Phytosanitaire Interafricain (CPI) œuvre pour une Afrique protégée des menaces phytosanitaires, au service de la sécurité alimentaire et du développement durable.
        </p>
      </section>

      {/* Bloc Mission, Vision, Objectifs */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <Card className="shadow-elegant border-primary/20">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <ShieldCheck className="w-7 h-7 text-primary" />
            <CardTitle>Notre mission</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Protéger les cultures et les végétaux à l’échelle continentale</li>
              <li>Améliorer les moyens de subsistance des populations rurales</li>
              <li>Soutenir l’économie agricole et rurale africaine</li>
              <li>Renforcer la sécurité alimentaire et nutritionnelle</li>
            </ul>
          </CardContent>
        </Card>
        {/* Vision */}
        <Card className="shadow-elegant border-secondary/20">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Globe className="w-7 h-7 text-secondary" />
            <CardTitle>Notre vision</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Une Afrique unie et résiliente face aux ravageurs et maladies des plantes</li>
              <li>Des systèmes phytosanitaires modernes, interconnectés et efficaces</li>
              <li>Une agriculture durable, innovante et compétitive</li>
            </ul>
          </CardContent>
        </Card>
        {/* Objectifs stratégiques */}
        <Card className="shadow-elegant border-primary/20">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <BookOpen className="w-7 h-7 text-primary" />
            <CardTitle>Nos objectifs stratégiques</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Coordonner les politiques phytosanitaires africaines</li>
              <li>Renforcer les capacités des ONPV</li>
              <li>Harmoniser les législations phytosanitaires</li>
              <li>Favoriser les échanges d’informations entre pays membres</li>
              <li>Contribuer à la mise en œuvre de la Stratégie Phytosanitaire pour l’Afrique</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Séparateur */}
      <div className="container mx-auto px-4"><Separator className="my-8" /></div>

      {/* Fonctionnement */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Badge variant="secondary" className="mb-3"><Network className="w-4 h-4 mr-2" />Notre fonctionnement</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Comment le CPI agit au service du continent</h2>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>Collaboration étroite avec les ONPV et Communautés Économiques Régionales (CER)</li>
            <li>Surveillance régionale et gestion coordonnée des organismes nuisibles</li>
            <li>Organisation de réunions scientifiques, formations, alertes et diffusion de données</li>
            <li>Appui technique et renforcement des capacités nationales</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img src={agricultureBg} alt="Agents CPI au travail" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
        </div>
      </section>

      {/* Séparateur */}
      <div className="container mx-auto px-4"><Separator className="my-8" /></div>

      {/* Ancrage continental et appartenance */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          {/* Placeholder carte d'Afrique */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-lg flex items-center justify-center w-full max-w-md h-64">
            <span className="text-6xl text-primary/40">🌍</span>
          </div>
        </div>
        <div>
          <Badge variant="default" className="mb-3"><Landmark className="w-4 h-4 mr-2" />Notre ancrage continental</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">Un réseau panafricain au cœur de la coopération</h2>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>Le CPI regroupe l’ensemble des pays membres de l’Union Africaine</li>
            <li>Participe activement à la <span className="font-semibold">Convention Internationale pour la Protection des Végétaux (CIPV)</span></li>
            <li>Favorise la synergie et l’échange d’expertises à l’échelle continentale</li>
          </ul>
        </div>
      </section>

      {/* Séparateur */}
      <div className="container mx-auto px-4"><Separator className="my-8" /></div>

      {/* Siège */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col items-start">
          <Badge variant="secondary" className="mb-3"><MapPin className="w-4 h-4 mr-2" />Notre siège</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Un hub stratégique à Yaoundé, Cameroun</h2>
          <p className="text-base mb-4">
            Le siège du CPI, situé à Yaoundé, incarne le rayonnement régional de l’institution et sa capacité à coordonner les actions phytosanitaires à l’échelle africaine.
          </p>
          <div className="flex items-center gap-3 text-secondary font-medium">
            <Landmark className="w-5 h-5" /> Yaoundé, Cameroun
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={logo} alt="CPI Siège" className="w-40 h-40 rounded-full border-4 border-secondary shadow-elegant object-contain bg-white" />
        </div>
      </section>
    </main>
  );
};

export default AboutInstitution;