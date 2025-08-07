import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
const Tarieven = () => {
  const woningVariants = [{
    name: "Standaard",
    price: "€450,-",
    description: "Voor woningen tot €600.000",
    features: ["Volledige NRVT-conforme taxatie", "Gevalideerd door NWWI", "Gedetailleerd rapport binnen 5 werkdagen", "Digitaal dossier bij taXapi", "Telefonische toelichting mogelijk", "Extra aandacht voor bijzonderheden"]
  }, {
    name: "Plus",
    price: "€495,-",
    description: "Voor woningen vanaf €600.000",
    features: ["Volledige NRVT-conforme taxatie", "Gevalideerd door NWWI", "Gedetailleerd rapport binnen 5 werkdagen", "Digitaal dossier bij taXapi", "Persoonlijke toelichting mogelijk", "Extra aandacht voor bijzonderheden"],
    isPopular: true
  }];

  const otherServices = [{
    name: "Taxatie Appartement",
    price: "€495,-",
    description: "Voor appartementen",
    features: ["Volledige NRVT-conforme taxatie", "Gevalideerd door NWWI", "Gedetailleerd rapport binnen 7 werkdagen", "Digitaal dossier bij taXapi", "Persoonlijke toelichting mogelijk", "VvE-gegevens analyse"]
  }];
  const additionalServices = [{
    service: "Taxatie voor en na verbouwing",
    price: "+€50,-"
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

        {/* Taxatie Woning Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Taxatie Woning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {woningVariants.map((variant, index) => <Card key={index} className={`relative shadow-card-professional hover:shadow-professional transition-all ${variant.isPopular ? 'ring-2 ring-primary' : ''}`}>
                {variant.isPopular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Populair
                    </div>
                  </div>}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{variant.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{variant.price}</div>
                  <p className="text-muted-foreground">{variant.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {variant.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
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
        </div>

        {/* Other Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Andere Diensten</h2>
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            {otherServices.map((service, index) => <Card key={index} className="relative shadow-card-professional hover:shadow-professional transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
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
        </div>

        {/* Additional Services */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Extra Diensten</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-4 max-w-md w-full">
              {additionalServices.map((item, index) => <div key={index} className="flex justify-between items-center p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <span className="font-medium text-primary">{item.service}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>)}
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
    </div>;
};
export default Tarieven;