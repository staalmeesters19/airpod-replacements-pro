import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Contact = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{isEnglish ? 'Contact | Earbuds Restore' : 'Contact | Earbuds Restore'}</title>
        <meta name="description" content={isEnglish
          ? 'Contact Earbuds Restore. Visit our store in Amsterdam or reach us via WhatsApp, phone or email.'
          : 'Neem contact op met Earbuds Restore. Bezoek onze winkel in Amsterdam of neem contact op via WhatsApp, telefoon of e-mail.'} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-10 py-8 md:py-16 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          {isEnglish ? 'Contact' : 'Contact'}
        </h1>
        <p className="text-muted-foreground mb-8">
          Earbuds Restore
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-5 space-y-5">
              <p className="text-sm text-muted-foreground">
                {isEnglish
                  ? 'If you would like to visit our store, please contact us in advance via WhatsApp, phone or email, so we can have someone ready to assist you at your preferred day and time.'
                  : 'Als u langs wilt komen in de winkel, kunt u het beste vooraf contact met ons opnemen via WhatsApp, telefoon of e-mail, zodat wij op uw gewenste dag en tijd iemand voor u klaar kunnen laten staan om u direct te helpen.'}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{isEnglish ? 'Opening hours' : 'Openingstijden'}</p>
                    <p className="text-sm text-muted-foreground">
                      {isEnglish ? 'Monday to Sunday: 10:00 – 18:00' : 'Maandag t/m zondag: 10:00 – 18:00'}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {isEnglish
                        ? 'Earlier or later is possible by arrangement – call, message or email us to be sure.'
                        : 'Ook eerder of later mogelijk in overleg – bel, app of mail ons voor de zekerheid.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{isEnglish ? 'Address' : 'Vestigingsadres'}</p>
                    <p className="text-sm text-muted-foreground">
                      Jan Evertsenstraat 84<br />
                      1056 EG Amsterdam<br />
                      {isEnglish ? 'Netherlands' : 'Nederland'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">WhatsApp</p>
                    <a href="https://wa.me/31685396506" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                      +31 6 8539 6506
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{isEnglish ? 'Phone' : 'Telefoon'}</p>
                    <a href="tel:+31685396506" className="text-sm text-primary hover:underline">
                      +31 6 8539 6506
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">E-mail</p>
                    <a href="mailto:info@earbudsrestore.nl" className="text-sm text-primary hover:underline">
                      info@earbudsrestore.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Instagram</p>
                    <a href="https://instagram.com/earbudsrestore" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                      @earbudsrestore
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border text-xs text-muted-foreground space-y-1">
                <p>KvK-nummer: 94891494</p>
                <p>BTW-nummer: NL005115712B06</p>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-xl overflow-hidden border border-border h-[350px] md:h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.1!2d4.8500!3d52.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e2280500003f%3A0x0!2sJan+Evertsenstraat+84%2C+1056+EG+Amsterdam!5e0!3m2!1snl!2snl!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={isEnglish ? 'Earbuds Restore location' : 'Earbuds Restore locatie'}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
