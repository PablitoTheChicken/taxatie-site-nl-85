import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
const Tarieven = () => {
  const pricingPlans = [{
    name: "Woningtaxatie",
    price: "€395",
    description: "Voor woningen tot €600.000",
    features: ["Volledige NRVT-conforme taxatie", "Uitgebreid rapport binnen 5 werkdagen", "Foto's en plattegronden", "Marktanalyse van de buurt", "Telefonische toelichting mogelijk"]
  }, {
    name: "Woningtaxatie Plus",
    price: "€495",
    description: "Voor woningen vanaf €600.000",
    features: ["Uitgebreide NRVT-conforme taxatie", "Gedetailleerd rapport binnen 5 werkdagen", "Foto's en professionele plattegronden", "Uitgebreide marktanalyse", "Persoonlijke toelichting", "Extra aandacht voor bijzonderheden"]
  }, {
    name: "Appartementtaxatie",
    price: "€345",
    description: "Voor appartementen en condominiums",
    features: ["Professionele appartementtaxatie", "VvE-gegevens analyse", "Lokatie en voorzieningen beoordeling", "Rapport binnen 5 werkdagen", "Persoonlijke toelichting mogelijk"]
  }];
  const additionalServices = [{
    service: "Spoedtaxatie (binnen 48 uur)",
    price: "+ €150"
  }, {
    service: "Extra exemplaar rapport",
    price: "€25"
  }, {
    service: "Digitale plattegronden",
    price: "€75"
  }, {
    service: "Herbeoordeling na verbouwing",
    price: "€195"
  }];
  return <div className="min-h-screen py-20">
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
          {pricingPlans.map((plan, index) => <Card key={index} className="relative shadow-card-professional hover:shadow-professional transition-all">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-accent mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>)}
                </ul>
                <Button className="w-full bg-gradient-primary" asChild>
                  <Link to="/contact">Afspraak Maken</Link>
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Additional Services */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Extra Diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((item, index) => <div key={index} className="flex justify-between items-center p-4 bg-card rounded-lg">
                <span className="font-medium">{item.service}</span>
                <span className="text-primary font-bold">{item.price}</span>
              </div>)}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Heeft u vragen over onze tarieven?</h2>
          <p className="text-muted-foreground mb-6">
            Neem contact met ons op voor een persoonlijk advies en afspraak op maat.
          </p>
          <Button size="lg" className="bg-gradient-primary" asChild>
            <Link to="/contact">Contact Opnemen</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default Tarieven;