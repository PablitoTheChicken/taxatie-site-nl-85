import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Building, Calculator, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const services = [
    {
      icon: Home,
      title: "Woningtaxaties",
      description: "Professionele taxaties voor woningen en eengezinshuizen"
    },
    {
      icon: Building,
      title: "Appartementtaxaties",
      description: "Waardebepaling van appartementen en condominiums"
    },
    {
      icon: Calculator,
      title: "Hypotheektaxaties",
      description: "Taxaties ten behoeve van hypotheekverstrekking"
    },
    {
      icon: Clock,
      title: "Snelle Service",
      description: "Meestal binnen 3-5 werkdagen een uitgebreid rapport"
    }
  ];

  const benefits = [
    "Gecertificeerd en ervaren taxateur",
    "Uitgebreide rapporten volgens NRVT-normen",
    "Scherpe prijzen en snelle service",
    "Persoonlijke benadering",
    "Dekking Veenendaal en omstreken"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(/lovable-uploads/ebc8823f-ccd6-47a7-9240-4bb2f1591c34.png)',
            filter: 'blur(2px) sepia(20%) hue-rotate(200deg) saturate(120%)'
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Professionele Taxaties
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            TK Taxaties biedt betrouwbare en professionele taxatiediensten voor woningen en appartementen in Veenendaal en omstreken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-gradient-primary shadow-professional" asChild>
              <Link to="/contact">Vraag Afspraak Aan</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/tarieven">Bekijk Tarieven</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Onze Diensten</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wij bieden een breed scala aan taxatiediensten voor particulieren en bedrijven.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center shadow-card-professional hover:shadow-professional transition-all">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Waarom Kiezen voor TK Taxaties?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button className="bg-gradient-primary" asChild>
                  <Link to="/over">Meer Over Ons</Link>
                </Button>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="bg-card p-8 rounded-lg shadow-card-professional">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Vraag Direct een Afspraak
                </h3>
                <p className="text-muted-foreground mb-6">
                  Krijg binnen 24 uur een vrijblijvende afspraak op maat.
                </p>
                <Button size="lg" className="w-full bg-gradient-accent" asChild>
                  <Link to="/contact">Contact Opnemen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;