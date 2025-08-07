import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    address: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.serviceType) {
      toast({
        title: "Vul alle verplichte velden in",
        description: "Naam, e-mailadres en type taxatie zijn verplicht.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          address: formData.address,
          message: formData.message
        }
      });
      if (error) {
        throw error;
      }
      toast({
        title: "Bericht verzonden!",
        description: "Wij nemen binnen 24 uur contact met u op. U ontvangt een bevestigingsmail."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        address: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Er is een fout opgetreden",
        description: "Probeer het later opnieuw of neem direct contact met ons op.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat opacity-30" style={{
        backgroundImage: 'url(/lovable-uploads/c43bdaf2-c84a-4052-8043-ba23c009a9b9.png)',
        backgroundPosition: 'center top',
        filter: 'blur(2px)'
      }} />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 absolute bg-black/40" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl text-white mb-6 animate-fade-in font-bold md:text-6xl">Contact</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-slide-up">Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op voor een vrijblijvende afspraak.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="shadow-card-professional bg-gradient-primary text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-5 w-5 text-white mr-3" />
                    <h3 className="text-lg font-semibold text-white">Telefoon</h3>
                  </div>
                  <a href="tel:+31622564249" className="text-white/80">+31 (0)6 2256 4249</a>
                  <p className="text-sm text-white/60 mt-2">
                    Bereikbaar van maandag t/m vrijdag 9:00 - 17:00
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card-professional bg-gradient-primary text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 text-white mr-3" />
                    <h3 className="text-lg font-semibold text-white">E-mail</h3>
                  </div>
                  <a href="mailto:tomkleiberg@gmail.com" className="text-white/80">tomkleiberg@gmail.com</a>
                </CardContent>
              </Card>

              

              <Card className="shadow-card-professional bg-gradient-primary text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 text-white mr-3" />
                    <h3 className="text-lg font-semibold text-white">Openingstijden</h3>
                  </div>
                  <div className="space-y-1 text-white/80">
                    <p>Maandag - Vrijdag: 9:00 - 17:00</p>
                    <p>Zaterdag: Op afspraak</p>
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

                  <Button type="submit" className="w-full bg-gradient-primary" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Wordt verzonden..." : "Verstuur Aanvraag"}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Wat gebeurt er na uw aanvraag?</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Wij nemen zo spoedig mogelijk contact met u op</li>
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