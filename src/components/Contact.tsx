import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Siège Social du CPI", "Addis-Abeba, Éthiopie", "Commission de l'Union Africaine"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+251 11 551 7700", "+251 11 551 8844", "Ligne d'urgence: +251 11 551 9999"],
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@cpi-africa.org", "info@phytosanitary-africa.org", "urgent@cpi-africa.org"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lundi - Vendredi: 8h00 - 17h00", "Samedi: 9h00 - 13h00", "Urgences: 24h/7j"],
      color: "text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={contactBg} 
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">CONTACT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Collaborons <span className="text-secondary-light">Ensemble</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Rejoignez-nous dans notre mission de protection phytosanitaire à travers l'Afrique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-white/20 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Envoyez-nous un message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary mb-2">Message envoyé !</h4>
                  <p className="text-muted-foreground">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nom complet *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="bg-white/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="bg-white/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Organisation</label>
                      <Input
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Votre organisation"
                        className="bg-white/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Sujet *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Sujet de votre message"
                        required
                        className="bg-white/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet ou vos besoins..."
                      rows={5}
                      required
                      className="bg-white/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow group">
                    Envoyer le message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-white/20 shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-primary/10 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-primary mb-2">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact */}
            <Card className="bg-gradient-secondary border-white/20 shadow-elegant">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-xl text-white mb-3">Urgence Phytosanitaire ?</h4>
                <p className="text-white/90 mb-4 text-sm">
                  Pour les situations d'urgence nécessitant une intervention immédiate
                </p>
                <Button variant="glass" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
                  Ligne d'urgence 24h/7j
                  <Phone className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;