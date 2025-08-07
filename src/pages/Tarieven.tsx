import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Tarieven = () => {
  const pricingPlans = [{
    name: "Taxatie Woning",
    price: "",
    description: "",
    features: ["Volledige NRVT-conforme taxatie", "Gevalideerd door NWWI", "Gedetailleerd rapport binnen 5 werkdagen", "Digitaal dossier bij taXapi", "Telefonische toelichting mogelijk", "Extra aandacht voor bijzonderheden"],
    priceBreakdown: [
      { range: "Tot €600.000", price: "€450,-" },
      { range: "Vanaf €600.000", price: "€495,-" }
    ]
  }, {
    name: "Taxatie Appartement",
    price: "€495,-",
    description: "Voor appartementen",
    features: ["Volledige NRVT-conforme taxatie", "Gevalideerd door NWWI", "Gedetailleerd rapport binnen 7 werkdagen", "Digitaal dossier bij taXapi", "Persoonlijke toelichting mogelijk", "VvE-gegevens analyse"]
  }];

  const additionalServices = [{
    service: "Taxatie voor en na verbouwing",
    price: "+€50,-"
  }];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="relative shadow-card-professional hover:shadow-professional transition-all flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{plan.price}</div>
                {plan.description && <p className="text-muted-foreground">{plan.description}</p>}
                {plan.priceBreakdown && (
                  <div className="mt-4 space-y-2">
                    {plan.priceBreakdown.map((breakdown, breakdownIndex) => (
                      <div key={breakdownIndex} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                        <span className="text-sm text-muted-foreground">{breakdown.range}</span>
                        <span className="text-lg font-semibold text-primary">{breakdown.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-accent mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-primary mt-auto" asChild>
                  <Link to="/contact">Afspraak Maken</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Extra Diensten</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-4 max-w-md w-full">
              {additionalServices.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <span className="font-medium text-primary">{item.service}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Heeft u vragen?</h2>
          <p className="text-muted-foreground mb-6">
            Neem contact met ons op voor een persoonlijk advies en afspraak op maat.
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