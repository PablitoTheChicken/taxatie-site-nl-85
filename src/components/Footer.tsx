import { Mail, Phone, Building2 } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">TK Woningtaxaties</h3>
            <p className="text-primary-foreground/80 mb-4">
              Professionele taxaties voor woningen en appartementen in Veenendaal en omstreken.
              Ervaren, betrouwbaar en altijd scherp geprijsd.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <a href="tel:+31622564249" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">+31 (0)6 2256 4249</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:tomkleiberg@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">tomkleiberg@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Building2 className="h-4 w-4 mr-3" />
                <span className="text-primary-foreground/80">KVK: 97971375</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Woningtaxaties</li>
              <li>Appartementtaxaties</li>
              
              
            </ul>
          </div>

          {/* Logos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kwalificaties</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-4">
              <div className="bg-white rounded p-2 w-fit">
                <img 
                  src="/lovable-uploads/90e35350-5b94-4cd4-81ce-b31097734afd.png" 
                  alt="NWWI" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="bg-white rounded p-2 w-fit">
                <img 
                  src="/lovable-uploads/3b42757c-7197-4f98-8e39-7fb00e37c933.png" 
                  alt="Register Taxateur" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60">© 2025 TK Woningtaxaties. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;