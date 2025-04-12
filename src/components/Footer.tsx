
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyberblue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CYBERXPER</h3>
            <p className="text-gray-300">
              Votre partenaire en solutions informatiques innovantes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="hover:text-gray-300 transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="hover:text-gray-300 transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  86 Avenue Paul Vaillant Couturier,
                  <br />
                  94400 Vitry-sur-Seine, France
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a
                  href="mailto:contact@cyberxper.com"
                  className="hover:text-gray-300 transition-colors"
                >
                  contact@cyberxper.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">À Propos</h3>
            <p className="text-gray-300">
              CYBERXPER est spécialisée en conseil en systèmes et logiciels
              informatiques, ingénierie, et vente de matériel informatique et
              télécommunication.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p>
            &copy; {currentYear} CYBERXPER SASU. Tous droits réservés.{" "}
            <Link
              to="/mentions-legales"
              className="hover:text-gray-300 transition-colors"
            >
              Mentions Légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
