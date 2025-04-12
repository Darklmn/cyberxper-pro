
import Layout from "@/components/Layout";

const LegalPage = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <h1 className="title text-center mb-10">Mentions Légales</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-cyberblue mb-6">Informations légales</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-cyberblue">Nom de l'entreprise</div>
                  <div className="md:col-span-2">CYBERXPER</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-cyberblue">Forme juridique</div>
                  <div className="md:col-span-2">Société par Actions Simplifiée Unipersonnelle (SASU)</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-cyberblue">Numéro RCS</div>
                  <div className="md:col-span-2">942 026 584 R.C.S. Créteil</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-cyberblue">Adresse du siège</div>
                  <div className="md:col-span-2">86 Avenue Paul Vaillant Couturier, 94400 Vitry-sur-Seine, France</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-cyberblue">Président</div>
                  <div className="md:col-span-2">Lyssa BELKHICHANE (BELKHICHANE-FERRAD)</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-cyberblue">Activité</div>
                  <div className="md:col-span-2">Conseil en systèmes et logiciels informatiques, ingénierie, vente de matériel informatique et télécommunication</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-cyberblue">Capital social</div>
                  <div className="md:col-span-2">1 000 €</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-cyberblue">Date de création</div>
                  <div className="md:col-span-2">21 mars 2025</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-cyberblue">Email de contact</div>
                  <div className="md:col-span-2">
                    <a href="mailto:contact@cyberxper.com" className="text-cyberblue hover:underline">
                      contact@cyberxper.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-cyberblue mb-6">Conditions générales d'utilisation</h2>
              
              <div className="space-y-6 text-cybergray">
                <div>
                  <h3 className="text-lg font-medium text-cyberblue mb-2">Article 1 - Objet</h3>
                  <p>
                    Les présentes conditions générales d'utilisation ont pour objet de définir les modalités de mise à disposition du site www.cyberxper.com et les conditions d'utilisation du site par l'utilisateur.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-cyberblue mb-2">Article 2 - Mentions légales</h3>
                  <p>
                    L'édition du site www.cyberxper.com est assurée par la société CYBERXPER, SASU au capital de 1 000 €, immatriculée au RCS de Créteil sous le numéro 942 026 584, dont le siège social est situé au 86 Avenue Paul Vaillant Couturier, 94400 Vitry-sur-Seine, France.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-cyberblue mb-2">Article 3 - Accès au site</h3>
                  <p>
                    Le site est accessible gratuitement à tout utilisateur disposant d'un accès à internet. Tous les coûts afférents à l'accès au site, que ce soient les frais matériels, logiciels ou d'accès à internet sont exclusivement à la charge de l'utilisateur.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-cyberblue mb-2">Article 4 - Propriété intellectuelle</h3>
                  <p>
                    Les marques, logos, signes et tout autre contenu du site font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur. L'utilisateur sollicite l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-cyberblue mb-2">Article 5 - Responsabilité</h3>
                  <p>
                    La société CYBERXPER ne peut être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site www.cyberxper.com, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-cyberblue mb-6">Protection des données personnelles</h2>
              
              <div className="space-y-6 text-cybergray">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles les concernant. Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante: contact@cyberxper.com
                </p>
                
                <p>
                  Les informations recueillies sur le site www.cyberxper.com sont utilisées uniquement pour traiter vos demandes et pour vous contacter. Elles ne seront en aucun cas cédées à des tiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPage;
