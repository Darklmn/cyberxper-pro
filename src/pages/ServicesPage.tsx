
import Layout from "@/components/Layout";
import { LaptopIcon, ServerIcon, HardDriveIcon } from "lucide-react";

const ServicesPage = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <h1 className="title text-center mb-10">Nos Services</h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="subtitle text-center mb-12">
              Chez CYBERXPER, nous proposons une gamme complète de services informatiques pour répondre à tous vos besoins professionnels.
            </p>
            
            {/* Service 1 */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-cyberblue p-8 flex items-center justify-center">
                    <LaptopIcon className="h-24 w-24 text-white" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-semibold text-cyberblue mb-4">Conseil Informatique</h2>
                    <p className="text-cybergray mb-6">
                      Nous offrons des conseils personnalisés pour optimiser vos systèmes informatiques et améliorer votre efficacité opérationnelle.
                    </p>
                    <ul className="space-y-2 text-cybergray">
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Analyse complète de votre infrastructure existante</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Recommandations stratégiques pour l'optimisation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Plans de transformation numérique sur mesure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Audit de sécurité et de performance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex flex-row-reverse">
                  <div className="md:w-1/3 bg-cyberblue p-8 flex items-center justify-center">
                    <ServerIcon className="h-24 w-24 text-white" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-semibold text-cyberblue mb-4">Ingénierie Logicielle</h2>
                    <p className="text-cybergray mb-6">
                      Notre équipe d'experts développe des solutions logicielles adaptées à vos besoins, garantissant performance et fiabilité.
                    </p>
                    <ul className="space-y-2 text-cybergray">
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Développement d'applications sur mesure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Modernisation des applications existantes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Intégration de systèmes et API</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Maintenance et support technique continu</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-cyberblue p-8 flex items-center justify-center">
                    <HardDriveIcon className="h-24 w-24 text-white" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-semibold text-cyberblue mb-4">Vente de Matériel</h2>
                    <p className="text-cybergray mb-6">
                      Nous proposons une large gamme de matériel informatique et de télécommunication, sélectionné pour sa qualité et sa performance.
                    </p>
                    <ul className="space-y-2 text-cybergray">
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Équipements informatiques professionnels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Solutions de télécommunication avancées</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Périphériques et accessoires professionnels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-cyberblue rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">✓</span>
                        <span>Installation et configuration du matériel</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cyberblue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besoin d'une solution personnalisée?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-cyberblue transition-colors"
          >
            Nous Contacter
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
