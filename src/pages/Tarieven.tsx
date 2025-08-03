import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Tarieven = () => {
  const pricingPlans = [
    {
      name: "Woningtaxatie",
      price: "€395",
      description: "Voor woningen tot €600.000",
      features: [
        "Volledige NRVT-conforme taxatie",
        "Uitgebreid rapport binnen 5 werkdagen",
        "Foto's en plattegronden",
        "Marktanalyse van de buurt",
        "Telefonische toelichting mogelijk"
      ],
      popular: false
    },
    {
      name: "Bedrijfspand Taxatie",
      price: "€695",
      description: "Voor commercieel onroerend goed",
      features: [
        "Professionele bedrijfspandtaxatie",
        "Uitgebreide marktanalyse",
        "Huurwaarde bepaling",
        "Rapport binnen 7 werkdagen",
        "Persoonlijke presentatie mogelijk"
      ],
      popular: true
    },
    {
      name: "Hypotheektaxatie",
      price: "€450",
      description: "Voor hypotheekverstrekking",
      features: [
        "Bancaire taxatie",
        "Direct aan bank/hypotheekadviseur",
        "Spoed mogelijk (2 werkdagen)",
        "Volledige NRVT-waardering",
        "Garantie van kwaliteit"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { service: "Spoedtaxatie (binnen 48 uur)", price: "+ €150" },
    { service: "Extra exemplaar rapport", price: "€25" },
    { service: "Digitale plattegronden", price: "€75" },
    { service: "Herbeoordeling na verbouwing", price: "€195" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tarieven
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparante prijzen voor professionele taxaties. Geen verborgen kosten, altijd een vaste prijs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card-professional hover:shadow-professional transition-all ${
                plan.popular ? 'border-accent border-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Populair
                  </div>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-accent mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-accent' : 'bg-gradient-primary'}`}
                  asChild
                >
                  <Link to="/contact">Offerte Aanvragen</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Extra Diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-card rounded-lg">
                <span className="font-medium">{item.service}</span>
                <span className="text-primary font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Heeft u vragen over onze tarieven?</h2>
          <p className="text-muted-foreground mb-6">
            Neem contact met ons op voor een persoonlijk advies en offerte op maat.
          </p>
          <Button size="lg" className="bg-gradient-primary" asChild>
            <Link to="/contact">Contact Opnemen</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tarieven;