
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cybergray-light to-white relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10 min-h-[60vh] flex flex-col justify-center py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyberblue mb-6">
              Bienvenue chez CYBERXPER
            </h1>
            <p className="text-xl md:text-2xl text-cybergray mb-8">
              Votre partenaire en solutions informatiques innovantes.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-cyberblue hover:bg-cyberblue-light">
                Contactez-nous <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="title text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cybergray-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-cyberblue mb-3">
                Conseil Informatique
              </h3>
              <p className="text-cybergray mb-4">
                Nous offrons des conseils personnalisés pour optimiser vos systèmes informatiques et améliorer votre efficacité opérationnelle.
              </p>
              <Link to="/services" className="text-cyberblue hover:underline inline-flex items-center">
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-cybergray-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-cyberblue mb-3">
                Ingénierie Logicielle
              </h3>
              <p className="text-cybergray mb-4">
                Notre équipe d'experts développe des solutions logicielles adaptées à vos besoins, garantissant performance et fiabilité.
              </p>
              <Link to="/services" className="text-cyberblue hover:underline inline-flex items-center">
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-cybergray-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-cyberblue mb-3">
                Vente de Matériel
              </h3>
              <p className="text-cybergray mb-4">
                Nous proposons une large gamme de matériel informatique et de télécommunication, sélectionné pour sa qualité et sa performance.
              </p>
              <Link to="/services" className="text-cyberblue hover:underline inline-flex items-center">
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-cybergray-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title mb-6">À Propos de CYBERXPER</h2>
              <p className="text-cybergray mb-6">
                CYBERXPER, fondée le 21 mars 2025, est une Société par Actions Simplifiée Unipersonnelle (SASU) dédiée à l'innovation dans le domaine des systèmes et logiciels informatiques.
              </p>
              <Link to="/a-propos">
                <Button variant="outline" className="border-cyberblue text-cyberblue hover:bg-cyberblue hover:text-white">
                  Découvrir notre histoire <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                alt="Technologies modernes" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyberblue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre infrastructure informatique?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nos solutions peuvent vous aider.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyberblue">
              Contactez-nous <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
