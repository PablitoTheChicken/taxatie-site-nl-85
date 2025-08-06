import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    address: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Bericht verzonden!",
      description: "Wij nemen binnen 24 uur contact met u op."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      address: "",
      message: ""
    });
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="shadow-card-professional">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">Telefoon</h3>
                  </div>
                  <p className="text-muted-foreground">+31 (0)6 2256 4249</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Bereikbaar van maandag t/m vrijdag 9:00 - 17:00
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card-professional">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">E-mail</h3>
                  </div>
                  <p className="text-muted-foreground">tomkleiberg@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Wij reageren binnen 24 uur
                  </p>
                </CardContent>
              </Card>

              

              <Card className="shadow-card-professional">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">Openingstijden</h3>
                  </div>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Maandag - Vrijdag: 9:00 - 17:00</p>
                    <p>Weekend: Op afspraak</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card-professional">
              <CardHeader>
                <CardTitle className="text-2xl">Afspraak maken?</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Naam *</Label>
                      <Input id="name" type="text" value={formData.name} onChange={e => handleChange("name", e.target.value)} required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mailadres *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={e => handleChange("email", e.target.value)} required className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="serviceType">Type taxatie *</Label>
                      <Select onValueChange={value => handleChange("serviceType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecteer een optie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="woning">Woningtaxatie</SelectItem>
                          <SelectItem value="woningverbouwing">Woningtaxatie + Verbouwing</SelectItem>
                          <SelectItem value="appartement">Appartementtaxatie</SelectItem>
                          <SelectItem value="appartementverbouwing">Appartementtaxatie + Verbouwing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Adres van het te taxeren object</Label>
                    <Input id="address" type="text" value={formData.address} onChange={e => handleChange("address", e.target.value)} placeholder="Straat, huisnummer, postcode, plaats" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message">Aanvullende informatie</Label>
                    <Textarea id="message" value={formData.message} onChange={e => handleChange("message", e.target.value)} placeholder="" className="mt-1" rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary" size="lg">
                    Verstuur Aanvraag
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Wat gebeurt er na uw aanvraag?</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Wij nemen binnen 24 uur contact met u op</li>
                    <li>• Alle ins en outs worden met u besproken</li>
                    <li>• Bij akkoord plannen wij de inspectie</li>
                    <li>• Een digitaal taxatie-dossier (taXapi) wordt voor u aangemaakt</li>
                    <li>• Binnen 5 werkdagen ontvangt u het digitale rapport</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;