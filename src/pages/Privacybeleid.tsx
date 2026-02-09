import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Privacybeleid = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{isEnglish ? 'Privacy Policy | Earbuds Restore' : 'Privacyverklaring | Earbuds Restore'}</title>
        <meta name="description" content={isEnglish
          ? 'Privacy policy of Earbuds Restore. Learn how we handle your personal data in compliance with GDPR.'
          : 'Privacyverklaring van Earbuds Restore. Lees hoe wij omgaan met je persoonsgegevens conform de AVG.'} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-10 py-8 md:py-16 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          {isEnglish ? 'Privacy Policy – Earbuds Restore' : 'Privacyverklaring – Earbuds Restore'}
        </h1>

        {isEnglish ? (
          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <p>Earbuds Restore respects your privacy and processes personal data exclusively in accordance with the General Data Protection Regulation (GDPR).</p>

            <h2 className="text-lg font-semibold mt-8">What data do we process?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Address details</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Order and payment details</li>
              <li>IP address (anonymised)</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Why do we use this data?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processing and delivering orders</li>
              <li>Customer service and support</li>
              <li>Legal administrative obligations</li>
              <li>Website improvement</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Sharing of data</h2>
            <p>Data is only shared with third parties when necessary, such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payment providers</li>
              <li>Shipping partners</li>
              <li>IT and hosting services</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Retention period</h2>
            <p>Personal data is not retained longer than necessary for the purpose for which it was collected or as required by law.</p>

            <h2 className="text-lg font-semibold mt-8">Your rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access</li>
              <li>Correction</li>
              <li>Deletion</li>
              <li>Object to processing</li>
            </ul>
            <p>Requests can be sent to <a href="mailto:info@earbudsrestore.nl" className="text-primary hover:underline">info@earbudsrestore.nl</a>.</p>
          </div>
        ) : (
          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <p>Earbuds Restore respecteert jouw privacy en verwerkt persoonsgegevens uitsluitend conform de Algemene Verordening Gegevensbescherming (AVG).</p>

            <h2 className="text-lg font-semibold mt-8">Welke gegevens verwerken wij?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Naam</li>
              <li>Adresgegevens</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Bestel- en betaalgegevens</li>
              <li>IP-adres (geanonimiseerd)</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Waarvoor gebruiken wij deze gegevens?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Het verwerken en leveren van bestellingen</li>
              <li>Klantenservice en support</li>
              <li>Wettelijke administratieverplichtingen</li>
              <li>Verbetering van de website</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Delen van gegevens</h2>
            <p>Gegevens worden alleen gedeeld met derden wanneer dit noodzakelijk is, zoals:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Betaalproviders</li>
              <li>Verzendpartners</li>
              <li>IT- en hostingdiensten</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Bewaartermijn</h2>
            <p>Persoonsgegevens worden niet langer bewaard dan noodzakelijk is voor het doel waarvoor ze zijn verzameld of zolang wettelijk verplicht.</p>

            <h2 className="text-lg font-semibold mt-8">Jouw rechten</h2>
            <p>Je hebt het recht op:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Inzage</li>
              <li>Correctie</li>
              <li>Verwijdering</li>
              <li>Bezwaar tegen verwerking</li>
            </ul>
            <p>Verzoeken kun je sturen naar <a href="mailto:info@earbudsrestore.nl" className="text-primary hover:underline">info@earbudsrestore.nl</a>.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Privacybeleid;
