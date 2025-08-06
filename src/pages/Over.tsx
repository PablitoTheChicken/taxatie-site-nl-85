import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
const Over = () => {
  const qualifications = [{
    icon: Award,
    title: "NRVT Gecertificeerd",
    description: "Lid van de Nederlandse Register van Vastgoed Taxateurs"
  }, {
    icon: Users,
    title: "25+ Jaar Ervaring",
    description: "Ruime ervaring in verschillende marktsegmenten"
  }, {
    icon: Clock,
    title: "Snelle Service",
    description: "Meestal binnen 5 werkdagen een compleet rapport"
  }];
  return <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Over TK Woningtaxaties</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Met jarenlange ervaring in de taxatiewereld, bieden wij professionele en betrouwbare 
            waarderingen van woningen en appartementen in Veenendaal en omstreken.
          </p>
        </div>

        {/* Tom Kleiberg Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <img src="/lovable-uploads/100c956f-873b-4eb9-a6f6-f733bb173dbb.png" alt="Tom Kleiberg - Register Taxateur" className="rounded-lg shadow-card-professional w-80 h-96 object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Tom Kleiberg</h2>
              <p className="text-xl text-primary font-semibold mb-6">Register Taxateur</p>
              <div>
                <div className="space-y-4 text-muted-foreground">
                  <p>TK woningtaxaties is opgericht vanuit de passie voor onroerend goed. Met meer dan 25 jaar ervaring in de sector, hebben wij reeds honderden succesvolle taxaties mogen uitvoeren.</p>
                  <p>Wij zijn gespecialiseerd in woning- en appartementtaxaties. Onze rapportages voldoen aan alle NRVT-normen en worden geaccepteerd door alle Nederlandse banken en financiële instellingen.</p>
                  <p>
                    Wat ons onderscheidt is onze persoonlijke benadering. Elke taxatie wordt uitgevoerd 
                    door een ervaren taxateur die de lokale markt goed kent. Wij nemen de tijd voor 
                    een grondige inspectie en uitgebreide marktanalyse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Onze Kwalificaties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {qualifications.map((qual, index) => {
                const IconComponent = qual.icon;
                return <Card key={index} className="shadow-card-professional bg-gradient-primary text-white">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="p-3 bg-white/20 rounded-full mr-4">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-white">{qual.title}</h3>
                            <p className="text-white/80">{qual.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>;
              })}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Ons Proces</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{
            step: "1",
            title: "Contact",
            desc: "U neemt contact met ons op"
          }, {
            step: "2",
            title: "Afspraak",
            desc: "Wij plannen een inspectie"
          }, {
            step: "3",
            title: "Taxatie",
            desc: "Grondige inspectie en analyse"
          }, {
            step: "4",
            title: "Rapport",
            desc: "Uitgebreid rapport binnen 5 dagen"
          }].map((item, index) => <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>)}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Klaar om te beginnen?</h2>
          <p className="text-muted-foreground mb-6">
            Neem contact met ons op voor een vrijblijvende afspraak.
          </p>
          <Button size="lg" className="bg-gradient-primary" asChild>
            <Link to="/contact">Contact Opnemen</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default Over;