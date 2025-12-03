import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PodFinder from '@/components/home/PodFinder';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { modelInfo } from '@/data/mockProducts';

const WelkeAirPods = () => {
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

  return (
    <>
      <Helmet>
        <title>Welke AirPods heb ik? | PairPods</title>
        <meta
          name="description"
          content="Ontdek welk AirPods model je hebt aan de hand van het modelnummer. Vind snel de juiste losse AirPod of oplaadcase."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <div className="bg-gradient-to-b from-secondary/30 to-background py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welke AirPods heb ik?
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ontdek eenvoudig welk model AirPods je hebt
              </p>
            </div>
          </div>

          {/* PodFinder section */}
          <section className="py-12 bg-secondary/10">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-3">
                  Vind direct jouw losse AirPod
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Selecteer hieronder je model en wat je mist. We brengen je direct naar de juiste AirPod of oplaadcase.
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
                  Zo vind je jouw modelnummer
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Methode 1: Op je iPhone of iPad</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Ga naar Instellingen</li>
                      <li>Tik op Bluetooth</li>
                      <li>Tik op het info-icoontje (i) naast je AirPods</li>
                      <li>Het modelnummer staat onderaan</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Methode 2: Op de oplaadcase</h3>
                    <p className="text-muted-foreground">
                      Het modelnummer staat gedrukt aan de binnenkant van de case, onder het deksel.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Model lookup table */}
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Herken jouw model
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
                          <p className="text-sm font-semibold mb-1">Modelnummers:</p>
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
                          <Link to={`/model/${slug}`}>
                            Bekijk losse onderdelen
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Complete model numbers table */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">
                  Alle AirPods modelnummers
                </h2>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Hier vind je gedetailleerde informatie over alle AirPods die Apple tot nu toe heeft geproduceerd.
                </p>
                
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="px-4 py-3 text-left font-semibold">Generatie</th>
                        <th className="px-4 py-3 text-center font-semibold">Linker AirPod</th>
                        <th className="px-4 py-3 text-center font-semibold">Rechter AirPod</th>
                        <th className="px-4 py-3 text-center font-semibold">Oplaadcase</th>
                        <th className="px-4 py-3 text-center font-semibold">Modelnummer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">1e generatie</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1702</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1523</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1602</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MMEF2ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">2e generatie</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2031</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2032</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1602</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MV7N2ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">2e generatie draadloos</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2031</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2032</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A1938</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MRXJ2ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">3e generatie MagSafe</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2564</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2565</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2566</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MME73ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">3e generatie Lightning</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2564</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2565</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2897</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MPNY3ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">4e generatie (zonder ANC)</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3053</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3050</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3058</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MXP63ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 font-medium">4e generatie (met ANC)</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3056</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3055</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3059</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MXP93ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors bg-primary/5">
                        <td className="px-4 py-3 font-medium">Pro 1e generatie</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2084</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2083</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2190</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MWP22ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors bg-primary/5">
                        <td className="px-4 py-3 font-medium">Pro 1e generatie MagSafe</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2084</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2083</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2190</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MLWK3ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors bg-primary/5">
                        <td className="px-4 py-3 font-medium">Pro 2e generatie Lightning</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2699</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2698</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2700</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MQD83ZM/A</td>
                      </tr>
                      <tr className="hover:bg-secondary/20 transition-colors bg-primary/5">
                        <td className="px-4 py-3 font-medium">Pro 2e generatie USB-C</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3048</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A3047</td>
                        <td className="px-4 py-3 text-center text-muted-foreground">A2968</td>
                        <td className="px-4 py-3 text-center text-primary font-mono text-xs">MTJV3ZM/A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  💡 Tip: Het modelnummer vind je op de binnenkant van je oplaadcase of via Instellingen → Bluetooth op je iPhone.
                </p>
              </div>
            </div>
          </section>

          {/* Help section */}
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Kom je er niet uit?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Geen probleem! Stuur ons een foto van je AirPods of kom langs in onze winkel in Amsterdam. 
                We helpen je graag het juiste model te vinden.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/klantenservice">Contact opnemen</Link>
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
