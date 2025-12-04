import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PodFinder from '@/components/home/PodFinder';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { modelInfo } from '@/data/mockProducts';

const WelkeAirPods = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const modelData = [
    {
      model: 'airpods-2',
      slug: 'airpods-2e-generatie',
      image: '/placeholder.svg',
    },
    {
      model: 'airpods-3',
      slug: 'airpods-3e-generatie',
      image: '/placeholder.svg',
    },
    {
      model: 'airpods-4',
      slug: 'airpods-4e-generatie',
      image: '/placeholder.svg',
    },
    {
      model: 'airpods-pro-1',
      slug: 'airpods-pro-1e-generatie',
      image: '/placeholder.svg',
    },
    {
      model: 'airpods-pro-2',
      slug: 'airpods-pro-2e-generatie',
      image: '/placeholder.svg',
    },
  ] as const;

  const t = {
    title: isEnglish ? 'Which AirPods do I have?' : 'Welke AirPods heb ik?',
    metaTitle: isEnglish ? 'Which AirPods do I have? | PairPods' : 'Welke AirPods heb ik? | PairPods',
    metaDescription: isEnglish 
      ? 'Discover which AirPods model you have based on the model number. Quickly find the right single AirPod or charging case.'
      : 'Ontdek welk AirPods model je hebt aan de hand van het modelnummer. Vind snel de juiste losse AirPod of oplaadcase.',
    subtitle: isEnglish ? 'Easily find out which AirPods model you have' : 'Ontdek eenvoudig welk model AirPods je hebt',
    findYourAirPod: isEnglish ? 'Find your single AirPod' : 'Vind direct jouw losse AirPod',
    findYourAirPodDesc: isEnglish 
      ? 'Select your model and what you\'re missing below. We\'ll take you directly to the right AirPod or charging case.'
      : 'Selecteer hieronder je model en wat je mist. We brengen je direct naar de juiste AirPod of oplaadcase.',
    howToFindModelNumber: isEnglish ? 'How to find your model number' : 'Zo vind je jouw modelnummer',
    method1Title: isEnglish ? 'Method 1: On your iPhone or iPad' : 'Methode 1: Op je iPhone of iPad',
    method1Steps: isEnglish 
      ? ['Go to Settings', 'Tap Bluetooth', 'Tap the info icon (i) next to your AirPods', 'The model number is at the bottom']
      : ['Ga naar Instellingen', 'Tik op Bluetooth', 'Tik op het info-icoontje (i) naast je AirPods', 'Het modelnummer staat onderaan'],
    method2Title: isEnglish ? 'Method 2: On the charging case' : 'Methode 2: Op de oplaadcase',
    method2Text: isEnglish 
      ? 'The model number is printed on the inside of the case, under the lid.'
      : 'Het modelnummer staat gedrukt aan de binnenkant van de case, onder het deksel.',
    allModelNumbers: isEnglish ? 'All AirPods model numbers' : 'Alle AirPods modelnummers',
    allModelNumbersDesc: isEnglish 
      ? 'Here you\'ll find detailed information about all AirPods Apple has produced so far.'
      : 'Hier vind je gedetailleerde informatie over alle AirPods die Apple tot nu toe heeft geproduceerd.',
    tableGeneration: isEnglish ? 'Generation' : 'Generatie',
    tableLeft: isEnglish ? 'Left AirPod' : 'Linker AirPod',
    tableRight: isEnglish ? 'Right AirPod' : 'Rechter AirPod',
    tableCase: isEnglish ? 'Charging Case' : 'Oplaadcase',
    tableModelNumber: isEnglish ? 'Model Number' : 'Modelnummer',
    gen1: isEnglish ? '1st generation' : '1e generatie',
    gen2: isEnglish ? '2nd generation' : '2e generatie',
    gen2Wireless: isEnglish ? '2nd generation wireless' : '2e generatie draadloos',
    gen3MagSafe: isEnglish ? '3rd generation MagSafe' : '3e generatie MagSafe',
    gen3Lightning: isEnglish ? '3rd generation Lightning' : '3e generatie Lightning',
    gen4NoANC: isEnglish ? '4th generation (without ANC)' : '4e generatie (zonder ANC)',
    gen4ANC: isEnglish ? '4th generation (with ANC)' : '4e generatie (met ANC)',
    pro1: isEnglish ? 'Pro 1st generation' : 'Pro 1e generatie',
    pro1MagSafe: isEnglish ? 'Pro 1st generation MagSafe' : 'Pro 1e generatie MagSafe',
    pro2Lightning: isEnglish ? 'Pro 2nd generation Lightning' : 'Pro 2e generatie Lightning',
    pro2USBC: isEnglish ? 'Pro 2nd generation USB-C' : 'Pro 2e generatie USB-C',
    tip: isEnglish 
      ? '💡 Tip: You can find the model number on the inside of your charging case or via Settings → Bluetooth on your iPhone.'
      : '💡 Tip: Het modelnummer vind je op de binnenkant van je oplaadcase of via Instellingen → Bluetooth op je iPhone.',
    recognizeModel: isEnglish ? 'Recognize your model' : 'Herken jouw model',
    modelNumbers: isEnglish ? 'Model numbers:' : 'Modelnummers:',
    viewParts: isEnglish ? 'View replacement parts' : 'Bekijk losse onderdelen',
    needHelp: isEnglish ? 'Can\'t figure it out?' : 'Kom je er niet uit?',
    needHelpDesc: isEnglish 
      ? 'No problem! Send us a photo of your AirPods via WhatsApp or visit our store in Amsterdam. We\'re happy to help you find the right model.'
      : 'Geen probleem! Stuur ons een foto van je AirPods via WhatsApp of kom langs in onze winkel in Amsterdam. We helpen je graag het juiste model te vinden.',
    whatsappUs: isEnglish ? 'WhatsApp us' : 'WhatsApp ons',
    whatsappMessage: isEnglish 
      ? 'https://wa.me/31685396506?text=Hi!%20I%20don\'t%20know%20which%20AirPods%20I%20have.%20Can%20you%20help%20me%3F'
      : 'https://wa.me/31685396506?text=Hoi!%20Ik%20weet%20niet%20welke%20AirPods%20ik%20heb.%20Kunnen%20jullie%20me%20helpen%3F',
  };

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <div className="bg-gradient-to-b from-secondary/30 to-background py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* PodFinder section */}
          <section className="py-12 bg-secondary/10">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-3">
                  {t.findYourAirPod}
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {t.findYourAirPodDesc}
                </p>
              </div>
              <PodFinder />
            </div>
          </section>

          {/* How to find model number */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {t.howToFindModelNumber}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">{t.method1Title}</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      {t.method1Steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">{t.method2Title}</h3>
                    <p className="text-muted-foreground">
                      {t.method2Text}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Complete model numbers table */}
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">
                  {t.allModelNumbers}
                </h2>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {t.allModelNumbersDesc}
                </p>
                
                <div className="overflow-x-auto rounded-xl border border-border bg-background">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="px-4 py-3 text-left font-semibold">{t.tableGeneration}</th>
                        <th className="px-4 py-3 text-center font-semibold">{t.tableLeft}</th>
                        <th className="px-4 py-3 text-center font-semibold">{t.tableRight}</th>
                        <th className="px-4 py-3 text-center font-semibold">{t.tableCase}</th>
                        <th className="px-4 py-3 text-center font-semibold">{t.tableModelNumber}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">{t.gen1}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1702</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1523</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1602</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MMEF2ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">{t.gen2}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2031</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2032</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1602</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MV7N2ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">{t.gen2Wireless}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2031</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2032</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1938</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MRXJ2ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">{t.gen3MagSafe}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2564</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2565</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2566</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MME73ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">{t.gen3Lightning}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2564</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2565</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2897</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MPNY3ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">{t.gen4NoANC}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3053</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3050</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3058</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MXP63ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">{t.gen4ANC}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3056</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3055</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3059</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MXP93ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors bg-primary/5">
                        <td className="px-4 py-3 font-medium">{t.pro1}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2084</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2083</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2190</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MWP22ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors bg-primary/5">
                        <td className="px-4 py-3 font-medium">{t.pro1MagSafe}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2084</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2083</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2190</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MLWK3ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors bg-primary/5">
                        <td className="px-4 py-3 font-medium">{t.pro2Lightning}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2699</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2698</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2700</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MQD83ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors bg-primary/5">
                        <td className="px-4 py-3 font-medium">{t.pro2USBC}</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3048</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3047</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2968</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MTJV3ZM/A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  {t.tip}
                </p>
              </div>
            </div>
          </section>

          {/* Model lookup cards */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {t.recognizeModel}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {modelData.map(({ model, slug, image }) => {
                  const info = modelInfo[model];
                  return (
                    <Card key={model} className="overflow-hidden">
                      <div className="aspect-square bg-secondary/50 flex items-center justify-center p-8">
                        <img
                          src={image}
                          alt={info.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{info.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {info.description}
                        </p>
                        <div className="mb-4">
                          <p className="text-sm font-semibold mb-1">{t.modelNumbers}</p>
                          <div className="flex flex-wrap gap-2">
                            {info.modelNumbers.map((num) => (
                              <span
                                key={num}
                                className="text-xs bg-secondary px-2 py-1 rounded"
                              >
                                {num}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button asChild className="w-full">
                          <Link to={isEnglish ? `/en/model/${slug}` : `/model/${slug}`}>
                            {t.viewParts}
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Help section */}
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {t.needHelp}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t.needHelpDesc}
              </p>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white">
                <a 
                  href={t.whatsappMessage}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.whatsappUs}
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WelkeAirPods;