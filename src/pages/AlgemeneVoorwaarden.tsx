import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AlgemeneVoorwaarden = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{isEnglish ? 'Terms & Conditions | Earbuds Restore' : 'Algemene Voorwaarden | Earbuds Restore'}</title>
        <meta name="description" content={isEnglish 
          ? 'Terms and conditions of Earbuds Restore. Read about our policies regarding orders, delivery, warranty and liability.' 
          : 'Algemene voorwaarden van Earbuds Restore. Lees over ons beleid voor bestellingen, levering, garantie en aansprakelijkheid.'} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-10 py-8 md:py-16 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          {isEnglish ? 'Terms & Conditions – Earbuds Restore' : 'Algemene voorwaarden – Earbuds Restore'}
        </h1>

        {isEnglish ? (
          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <p>These general terms and conditions apply to all offers, orders and agreements through the website earbudsrestore.nl.</p>

            <h2 className="text-lg font-semibold mt-8">Company details</h2>
            <p>
              Earbuds Restore<br />
              Address: Jan Evertsenstraat 84, 1056 EG Amsterdam, Netherlands<br />
              Chamber of Commerce: 94891494<br />
              VAT number: NL005115712B06<br />
              Email: info@earbudsrestore.nl<br />
              WhatsApp: via website
            </p>

            <h2 className="text-lg font-semibold mt-8">1. Products</h2>
            <p>Earbuds Restore sells individual original parts for earbuds and accessories. Earbuds Restore is not a manufacturer and is not affiliated with Apple or other brands. Brand names are used solely for identification and compatibility purposes.</p>

            <h2 className="text-lg font-semibold mt-8">2. Prices</h2>
            <p>All prices are listed in euros and include VAT, unless otherwise stated. Shipping costs are shown separately during checkout.</p>

            <h2 className="text-lg font-semibold mt-8">3. Orders and delivery</h2>
            <p>Orders are usually shipped within 24 hours on business days. Delivery is handled by external carriers. Earbuds Restore is not liable for delays caused by the carrier.</p>

            <h2 className="text-lg font-semibold mt-8">4. Warranty</h2>
            <p>All products come with a warranty of up to 12 months, unless otherwise stated. The warranty applies only to normal use and excludes damage caused by misuse, moisture or drops.</p>

            <h2 className="text-lg font-semibold mt-8">5. Right of withdrawal</h2>
            <p>The conditions for returns and withdrawal are included in the return policy on this website.</p>

            <h2 className="text-lg font-semibold mt-8">6. Liability</h2>
            <p>Earbuds Restore is not liable for indirect damage, consequential damage or loss of data. Liability is always limited to the order amount.</p>

            <h2 className="text-lg font-semibold mt-8">7. Applicable law</h2>
            <p>All agreements are governed by Dutch law.</p>
          </div>
        ) : (
          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <p>Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen en overeenkomsten via de website earbudsrestore.nl.</p>

            <h2 className="text-lg font-semibold mt-8">Bedrijfsgegevens</h2>
            <p>
              Earbuds Restore<br />
              Vestigingsadres: Jan Evertsenstraat 84, 1056 EG Amsterdam, Nederland<br />
              KvK-nummer: 94891494<br />
              BTW-nummer: NL005115712B06<br />
              E-mail: info@earbudsrestore.nl<br />
              WhatsApp: via website
            </p>

            <h2 className="text-lg font-semibold mt-8">1. Producten</h2>
            <p>Earbuds Restore verkoopt losse originele onderdelen voor oordopjes en accessoires. Earbuds Restore is geen fabrikant en niet gelieerd aan Apple of andere merken. Merknamen worden uitsluitend gebruikt ter identificatie en compatibiliteit.</p>

            <h2 className="text-lg font-semibold mt-8">2. Prijzen</h2>
            <p>Alle prijzen zijn vermeld in euro's en inclusief btw, tenzij anders aangegeven. Verzendkosten worden apart vermeld tijdens het afrekenen.</p>

            <h2 className="text-lg font-semibold mt-8">3. Bestelling en levering</h2>
            <p>Bestellingen worden doorgaans binnen 24 uur verzonden op werkdagen. Levering vindt plaats via externe vervoerders. Earbuds Restore is niet aansprakelijk voor vertragingen bij de vervoerder.</p>

            <h2 className="text-lg font-semibold mt-8">4. Garantie</h2>
            <p>Op alle producten geldt een garantie tot 12 maanden, tenzij anders vermeld. Garantie geldt alleen bij normaal gebruik en sluit schade door verkeerd gebruik, vocht of vallen uit.</p>

            <h2 className="text-lg font-semibold mt-8">5. Herroepingsrecht</h2>
            <p>De voorwaarden voor retourneren en herroeping zijn opgenomen in het retourbeleid op deze website.</p>

            <h2 className="text-lg font-semibold mt-8">6. Aansprakelijkheid</h2>
            <p>Earbuds Restore is niet aansprakelijk voor indirecte schade, gevolgschade of verlies van gegevens. De aansprakelijkheid is altijd beperkt tot het bedrag van de bestelling.</p>

            <h2 className="text-lg font-semibold mt-8">7. Toepasselijk recht</h2>
            <p>Op alle overeenkomsten is Nederlands recht van toepassing.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AlgemeneVoorwaarden;
