import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Retourbeleid = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{isEnglish ? 'Return Policy | Earbuds Restore' : 'Retourbeleid | Earbuds Restore'}</title>
        <meta name="description" content={isEnglish
          ? 'Return policy of Earbuds Restore. Learn about our 14-day return period, conditions and refund process.'
          : 'Retourbeleid van Earbuds Restore. Lees over ons 14 dagen herroepingsrecht, voorwaarden en terugbetaling.'} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-10 py-8 md:py-16 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          {isEnglish ? 'Return Policy & Right of Withdrawal – Earbuds Restore' : 'Retourbeleid & herroepingsrecht – Earbuds Restore'}
        </h1>

        {isEnglish ? (
          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <h2 className="text-lg font-semibold mt-8">Right of withdrawal</h2>
            <p>You have the right to cancel your order up to 14 days after receipt without giving a reason.</p>

            <h2 className="text-lg font-semibold mt-8">Return conditions</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Product must be unused</li>
              <li>In original condition and packaging</li>
              <li>Hygienic products that have been used cannot be returned</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Refund</h2>
            <p>After receipt and inspection of the return, the purchase amount will be refunded within 14 days via the original payment method.</p>

            <h2 className="text-lg font-semibold mt-8">Register a return</h2>
            <p>Please contact us in advance via:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="mailto:info@earbudsrestore.nl" className="text-primary hover:underline">info@earbudsrestore.nl</a></li>
              <li>WhatsApp via the website</li>
            </ul>
          </div>
        ) : (
          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <h2 className="text-lg font-semibold mt-8">Herroepingsrecht</h2>
            <p>Je hebt het recht om je bestelling tot 14 dagen na ontvangst zonder opgave van reden te annuleren.</p>

            <h2 className="text-lg font-semibold mt-8">Voorwaarden retourneren</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Product moet ongebruikt zijn</li>
              <li>In originele staat en verpakking</li>
              <li>Hygiënische producten die gebruikt zijn, kunnen niet worden geretourneerd</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Terugbetaling</h2>
            <p>Na ontvangst en controle van de retourzending wordt het aankoopbedrag binnen 14 dagen terugbetaald via de oorspronkelijke betaalmethode.</p>

            <h2 className="text-lg font-semibold mt-8">Retour aanmelden</h2>
            <p>Neem vooraf contact op via:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="mailto:info@earbudsrestore.nl" className="text-primary hover:underline">info@earbudsrestore.nl</a></li>
              <li>WhatsApp via de website</li>
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Retourbeleid;
