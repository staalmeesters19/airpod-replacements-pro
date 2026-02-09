import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Cookiebeleid = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{isEnglish ? 'Cookie Policy | Earbuds Restore' : 'Cookiebeleid | Earbuds Restore'}</title>
        <meta name="description" content={isEnglish
          ? 'Cookie policy of Earbuds Restore. Learn which cookies we use and how to manage them.'
          : 'Cookiebeleid van Earbuds Restore. Lees welke cookies wij gebruiken en hoe je ze beheert.'} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-10 py-8 md:py-16 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          {isEnglish ? 'Cookie Policy – Earbuds Restore' : 'Cookiebeleid – Earbuds Restore'}
        </h1>

        {isEnglish ? (
          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <p>Earbuds Restore uses cookies to ensure the website functions properly and to improve the user experience.</p>

            <h2 className="text-lg font-semibold mt-8">Which cookies do we use?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Functional cookies (necessary)</strong> – Required for the website to function properly.</li>
              <li><strong>Analytical cookies (anonymised)</strong> – Used to understand how visitors use the website.</li>
              <li><strong>Marketing cookies (optional, with consent)</strong> – Used for targeted advertising, only with your permission.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Managing cookies</h2>
            <p>You can always disable or delete cookies through your browser settings. Please note that the website may not function optimally without cookies.</p>
          </div>
        ) : (
          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <p>Earbuds Restore maakt gebruik van cookies om de website goed te laten functioneren en te verbeteren.</p>

            <h2 className="text-lg font-semibold mt-8">Welke cookies gebruiken wij?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Functionele cookies (noodzakelijk)</strong> – Nodig voor het goed functioneren van de website.</li>
              <li><strong>Analytische cookies (geanonimiseerd)</strong> – Om te begrijpen hoe bezoekers de website gebruiken.</li>
              <li><strong>Marketingcookies (optioneel, met toestemming)</strong> – Voor gerichte advertenties, alleen met jouw toestemming.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8">Cookies beheren</h2>
            <p>Je kunt cookies altijd uitschakelen of verwijderen via je browserinstellingen. Houd er rekening mee dat de website dan mogelijk minder goed werkt.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cookiebeleid;
