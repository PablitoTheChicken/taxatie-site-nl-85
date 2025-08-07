import { Mail, Phone, Building2 } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start justify-items-center text-center md:text-left">
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
            <div className="space-y-3 md:flex md:flex-col md:items-start items-center">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-3" />
                <a href="tel:+31622564249" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">+31 (0)6 2256 4249</a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:tomkleiberg@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">tomkleiberg@gmail.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Building2 className="h-4 w-4 mr-3" />
                <span className="text-primary-foreground/80">KVK: 97971375</span>
              </div>
            </div>
          </div>

          {/* Empty space */}
          <div></div>

          {/* Qualifications - moved to far right */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Kwalificaties</h3>
            <div className="space-y-4 flex flex-col items-center">
              <div className="bg-white rounded p-2">
                <img 
                  src="/lovable-uploads/90e35350-5b94-4cd4-81ce-b31097734afd.png" 
                  alt="NWWI" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="bg-white rounded p-2">
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