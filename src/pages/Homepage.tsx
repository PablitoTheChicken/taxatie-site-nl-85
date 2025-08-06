import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Building, Calculator, Clock } from "lucide-react";
import { Link } from "react-router-dom";
const Homepage = () => {
  const services = [{
    icon: Home,
    title: "Taxatie Woning",
    description: "Gevalideerde NWWI-taxatie voor woningen"
  }, {
    icon: Building,
    title: "Taxatie Appartement",
    description: "Gevalideerde NWWI-taxatie voor appartementen"
  }];
  const benefits = ["Gecertificeerd en ervaren taxateur aangesloten bij het NRVT", "Uitgebreide gevalideerde rapporten met NWWI-keurmerk", "Scherpe prijzen en snelle service", "Persoonlijke benadering", "Werkgebied Veenendaal en omstreken"];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: 'url(/lovable-uploads/59ca03f7-2d29-4513-8428-4744e6784988.png)',
        filter: 'blur(2px)'
      }} />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 absolute bg-black/40" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl text-white mb-6 animate-fade-in font-bold md:text-6xl">Professionele Taxaties</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-slide-up">TK woningtaxaties biedt betrouwbare en professionele taxatiediensten voor woningen en appartementen in Veenendaal en omstreken.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-gradient-primary shadow-professional" asChild>
              <Link to="/contact">Afspraak Maken</Link>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">Uw woning of appartement laten taxeren? Wij zijn u graag van dienst!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-2xl mx-auto">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <Link key={index} to="/tarieven" className="block">
                <Card className="text-center shadow-card-professional hover:shadow-professional transition-all bg-gradient-primary border-none h-full flex flex-col cursor-pointer hover:scale-105">
                  <CardHeader className="flex-shrink-0">
                    <div className="mx-auto mb-4 p-3 bg-white/20 rounded-full w-fit">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-center">
                    <p className="text-white/90">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>;
          })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Wanneer heb je een taxatierapport nodig?
              </h2>
              
              <div className="space-y-3">
                {["Aankoop van een nieuwe woning", "Verbouwing (en deze financieren vanuit de hypotheek)", "Oversluiting hypotheek en aanvraag renteverlaging", "Scheiding", "Overlijden (voor boedelverdeling)", "Voorafgaand aan de bouw van een nieuwe woning"].map((item, index) => <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>)}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Waarom kiezen voor TK Woningtaxaties?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>)}
              </div>
              <div className="mt-8">
                <Button className="bg-gradient-primary" asChild>
                  <Link to="/over">Meer Over Ons</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Afspraak maken box below */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-card-professional">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Afspraak maken?
              </h3>
              <p className="text-muted-foreground mb-6">
                Krijg binnen 24 uur een vrijblijvende afspraak op maat.
              </p>
              <Button size="lg" className="w-full bg-gradient-primary" asChild>
                <Link to="/contact">Contact Opnemen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Homepage;