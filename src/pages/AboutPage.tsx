
import Layout from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <h1 className="title text-center mb-10">À Propos de CYBERXPER</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-cyberblue mb-4">Notre Histoire</h2>
              <p className="text-cybergray mb-6">
                CYBERXPER, fondée le 21 mars 2025, est une Société par Actions Simplifiée Unipersonnelle (SASU) dédiée à l'innovation dans le domaine des systèmes et logiciels informatiques. Notre mission est de fournir des solutions sur mesure qui répondent aux besoins spécifiques de nos clients.
              </p>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                  alt="Innovation technologique" 
                  className="w-full h-auto"
                />
              </div>
              
              <p className="text-cybergray mb-6">
                Nous nous engageons à offrir des services de haute qualité en ingénierie logicielle et en conseil informatique, tout en garantissant la satisfaction de nos clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-cybergray-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cyberblue mb-3">Notre Mission</h3>
                <p className="text-cybergray">
                  Fournir des solutions informatiques innovantes et sur mesure qui permettent à nos clients d'atteindre leurs objectifs commerciaux avec efficacité et fiabilité.
                </p>
              </div>
              
              <div className="bg-cybergray-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-cyberblue mb-3">Notre Vision</h3>
                <p className="text-cybergray">
                  Devenir un partenaire technologique de référence, reconnu pour l'excellence de nos services et notre capacité à anticiper les besoins futurs de nos clients.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-cyberblue mb-4">Notre Direction</h2>
              <p className="text-cybergray mb-6">
                Lyssa BELKHICHANE, présidente de CYBERXPER, apporte une expertise précieuse et une vision stratégique pour guider l'entreprise vers l'excellence.
              </p>
              
              <div className="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg">
                <div className="w-32 h-32 rounded-full bg-cyberblue-light mb-4 md:mb-0 md:mr-6 flex items-center justify-center text-white text-2xl font-bold">
                  LB
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyberblue mb-1">Lyssa BELKHICHANE</h3>
                  <p className="text-cybergray-light mb-3">Présidente</p>
                  <p className="text-cybergray">
                    Avec une vision stratégique et une expertise approfondie du secteur informatique, Lyssa BELKHICHANE guide CYBERXPER vers l'innovation constante et l'excellence opérationnelle.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-cyberblue mb-4">Nos Valeurs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-cybergray-light p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyberblue mb-2">Innovation</h3>
                  <p className="text-cybergray">Nous recherchons constamment de nouvelles solutions pour répondre aux défis technologiques.</p>
                </div>
                <div className="bg-cybergray-light p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyberblue mb-2">Excellence</h3>
                  <p className="text-cybergray">Nous nous efforçons de fournir des services et produits de la plus haute qualité.</p>
                </div>
                <div className="bg-cybergray-light p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-cyberblue mb-2">Intégrité</h3>
                  <p className="text-cybergray">Nous agissons avec honnêteté et transparence dans toutes nos interactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
