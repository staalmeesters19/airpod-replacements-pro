import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Info, Lightbulb, AlertCircle } from 'lucide-react';

const InfoBox = ({ title, children, variant = 'info' }: { title: string; children: React.ReactNode; variant?: 'info' | 'tip' | 'warning' }) => {
  const icons = {
    info: <Info className="h-5 w-5" />,
    tip: <Lightbulb className="h-5 w-5" />,
    warning: <AlertCircle className="h-5 w-5" />
  };
  
  const styles = {
    info: 'bg-secondary/50 border-border',
    tip: 'bg-primary/5 border-primary/20',
    warning: 'bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800'
  };

  return (
    <div className={`rounded-xl border p-4 my-4 ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        <span className="text-primary mt-0.5">{icons[variant]}</span>
        <div>
          <p className="font-medium text-sm mb-1">{title}</p>
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
};

const HelpEN = () => {
  return (
    <>
      <Helmet>
        <title>Help with Pairing & AirPods Troubleshooting | RePairPods</title>
        <meta
          name="description"
          content="Need help with your AirPods? Learn how to pair a single AirPod, troubleshoot problems and set up your charging case. Step-by-step guide from RePairPods."
        />
        <meta name="keywords" content="airpods pairing not working, airpods not working, single airpod pairing, airpods reset, airpods troubleshooting" />
        <link rel="canonical" href="https://repairpods.nl/en/help" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I pair a new single AirPod?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Put both AirPods in the case, charge them, hold the button on the case until the light flashes white, and pair via your iPhone or iPad."
                }
              },
              {
                "@type": "Question",
                "name": "My new single AirPod is not recognized, what now?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Check if the generation is correct, reset your Bluetooth, use 'Forget This Device' and reset the case. Then pair again."
                }
              },
              {
                "@type": "Question",
                "name": "Do AirPods work with Android?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, AirPods work as regular Bluetooth earbuds with Android, Windows and other devices. Some Apple-specific features are limited."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <div className="bg-gradient-to-b from-secondary/30 to-background py-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Help & Support
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                Received a new AirPod or case? Here you'll find all the steps to pair it and get it working. 
                Something not going as expected? We'll help you out.
              </p>
              
              {/* Quick nav */}
              <div className="bg-background rounded-2xl border border-border p-6">
                <p className="font-medium mb-3">In this guide you'll find:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#pairing" className="hover:text-primary transition-colors">→ Pairing a single AirPod</a></li>
                  <li><a href="#case" className="hover:text-primary transition-colors">→ Pairing a new charging case</a></li>
                  <li><a href="#problems" className="hover:text-primary transition-colors">→ Common problems</a></li>
                  <li><a href="#icloud" className="hover:text-primary transition-colors">→ iCloud, Find My & Apple ID</a></li>
                  <li><a href="#compatibility" className="hover:text-primary transition-colors">→ Compatibility (Android, Windows)</a></li>
                  <li><a href="#which" className="hover:text-primary transition-colors">→ Which AirPods do I have?</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Help Content */}
          <div className="container mx-auto px-4 max-w-3xl py-12">
            
            {/* Pairing a single AirPod */}
            <section id="pairing" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Pairing a Single AirPod</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="can-pair" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Can I pair a single AirPod with my existing set?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Yes, you can! As long as the single AirPod is the same generation and model as your existing AirPod, 
                      you can use them together in one case.
                    </p>
                    <p className="mb-4">
                      This is exactly what RePairPods specializes in: replacement AirPods that seamlessly connect 
                      with your current set.
                    </p>
                    <InfoBox title="Important" variant="warning">
                      You cannot combine AirPods from different generations. An AirPod 2 won't work with an AirPod 3.
                      Not sure which generation you have? Check your model number or send us a photo via WhatsApp.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="how-pair" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I pair a new single AirPod?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Pairing a new single AirPod is straightforward. In a few steps, both AirPods will work together again.
                    </p>
                    <p className="font-medium text-foreground mb-2">Step by step:</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Put both AirPods in the case</strong><br />
                        <span className="text-sm">Place your existing and your new AirPod in the charging case.</span>
                      </li>
                      <li>
                        <strong>Charge the case</strong><br />
                        <span className="text-sm">Connect the case to a charger and wait at least 5 minutes.</span>
                      </li>
                      <li>
                        <strong>Open the case near your iPhone/iPad</strong><br />
                        <span className="text-sm">Hold the case close to your device and open the lid.</span>
                      </li>
                      <li>
                        <strong>Hold the button on the case</strong><br />
                        <span className="text-sm">Hold the button on the back of the case until the light flashes white.</span>
                      </li>
                      <li>
                        <strong>Pair via the pop-up screen</strong><br />
                        <span className="text-sm">An animation appears on your screen. Tap "Connect" and follow the instructions.</span>
                      </li>
                    </ol>
                    <InfoBox title="No pop-up?" variant="tip">
                      Go to Settings → Bluetooth and find your AirPods there. Tap to connect. 
                      Still not working? Try "Forget This Device" and start over.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Pairing a new charging case */}
            <section id="case" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Pairing a New Charging Case</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="case-pairing" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I pair my AirPods with a new charging case?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Pairing a new case with your existing AirPods? You can, but you'll need to reset the AirPods. 
                      Don't worry, it's quick and easy.
                    </p>
                    <p className="font-medium text-foreground mb-2">Step by step:</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Charge the new case</strong><br />
                        <span className="text-sm">Connect the case for at least 15 minutes before you begin.</span>
                      </li>
                      <li>
                        <strong>Put both AirPods in the new case</strong><br />
                        <span className="text-sm">Make sure they "click" in properly and make contact.</span>
                      </li>
                      <li>
                        <strong>Close the case and wait 30 seconds</strong><br />
                        <span className="text-sm">The AirPods need to recognize the new case.</span>
                      </li>
                      <li>
                        <strong>Reset the case</strong><br />
                        <span className="text-sm">Open the case, hold the button for 15 seconds until the light flashes amber then white.</span>
                      </li>
                      <li>
                        <strong>Pair again with your device</strong><br />
                        <span className="text-sm">Hold the case near your iPhone/iPad and follow the pairing instructions on screen.</span>
                      </li>
                    </ol>
                    <InfoBox title="Please note" variant="info">
                      Make sure the case is the same generation as your AirPods. An AirPods Pro 2 case won't work with AirPods Pro 1.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Common problems */}
            <section id="problems" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Common Problems</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="not-recognized" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    My new single AirPod is not recognized, what now?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Don't panic – this can usually be fixed with a few steps. Often it's just a matter of re-pairing.
                    </p>
                    <p className="font-medium text-foreground mb-2">Try this:</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Check if the generation is correct</strong><br />
                        <span className="text-sm">You cannot combine AirPods from different generations.</span>
                      </li>
                      <li>
                        <strong>Turn Bluetooth off and on again</strong><br />
                        <span className="text-sm">On your iPhone/iPad and other paired devices.</span>
                      </li>
                      <li>
                        <strong>Use "Forget This Device"</strong><br />
                        <span className="text-sm">Go to Settings → Bluetooth → tap the (i) icon next to your AirPods → "Forget This Device".</span>
                      </li>
                      <li>
                        <strong>Reset the case</strong><br />
                        <span className="text-sm">With both AirPods inside: hold the button for 15 seconds until the light flashes amber and white.</span>
                      </li>
                      <li>
                        <strong>Pair again</strong><br />
                        <span className="text-sm">Open the case near your device and follow the instructions on screen.</span>
                      </li>
                    </ol>
                    <InfoBox title="Still having problems?" variant="tip">
                      Contact us via WhatsApp. Send a photo of the model number and we'll help you out.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="not-charging" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    My AirPods aren't charging (properly), what can I do?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Charging issues are often easy to fix. Usually there's dirt on the contact points or something's wrong with the charger.
                    </p>
                    <p className="font-medium text-foreground mb-2">Check these things:</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Clean the contact points</strong><br />
                        <span className="text-sm">Use a dry, lint-free cloth on the bottom of the AirPods and inside the case.</span>
                      </li>
                      <li>
                        <strong>Try a different cable and adapter</strong><br />
                        <span className="text-sm">Sometimes the cable is the problem, not the case.</span>
                      </li>
                      <li>
                        <strong>Check if the AirPod clicks in properly</strong><br />
                        <span className="text-sm">The AirPod should sit firmly in the case. Do you hear a click?</span>
                      </li>
                      <li>
                        <strong>Try a different outlet</strong><br />
                        <span className="text-sm">Or a different USB port if you're charging via computer.</span>
                      </li>
                    </ol>
                    <InfoBox title="Still no solution?" variant="warning">
                      If the case or AirPod still won't charge after these steps, contact us. 
                      Within the warranty period, we'll find a solution together.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="beeping" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    My charging case is making a beeping or ticking sound, is that normal?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      A soft sound during charging can be normal. The electronics in the case can sometimes produce a slight sound.
                    </p>
                    <p className="font-medium text-foreground mb-2">When is it normal?</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Soft humming or ticking sound only while charging</li>
                      <li>Stops when the case is fully charged</li>
                    </ul>
                    <p className="font-medium text-foreground mb-2">When to contact us?</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Loud, persistent sound</li>
                      <li>Case gets extremely warm or hot</li>
                      <li>Sound even when not connected to charger</li>
                      <li>Case no longer works properly</li>
                    </ul>
                    <p>
                      Not sure? Send us a message or video via WhatsApp. We're happy to assess it.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* iCloud, Find My & Apple ID */}
            <section id="icloud" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">iCloud, Find My & Apple ID</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="find-my" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    My AirPods are still in 'Find My'. What should I do?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      If your AirPods are still linked to an old Apple ID, you need to remove them from there first before you can link them to a new account.
                    </p>
                    <p className="font-medium text-foreground mb-2">How to remove AirPods from 'Find My':</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Open Settings on your iPhone/iPad</strong><br />
                        <span className="text-sm">Tap your name at the top (Apple ID).</span>
                      </li>
                      <li>
                        <strong>Go to 'Find My'</strong><br />
                        <span className="text-sm">Tap on "Find My" or "Find My iPhone".</span>
                      </li>
                      <li>
                        <strong>Find your AirPods in the list</strong><br />
                        <span className="text-sm">Scroll down to "My Devices".</span>
                      </li>
                      <li>
                        <strong>Remove the device</strong><br />
                        <span className="text-sm">Tap on the AirPods and choose "Remove This Device" or "Erase AirPods".</span>
                      </li>
                    </ol>
                    <InfoBox title="Bought second-hand AirPods?" variant="info">
                      If you got AirPods from someone else, ask the previous owner to remove them from their Apple ID. 
                      Without that step, you won't be able to use some features.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Compatibility */}
            <section id="compatibility" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Compatibility</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="android" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Do your AirPods work with Android, Windows and other devices?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Yes! AirPods work as regular Bluetooth earbuds with almost any device. Android phones, Windows laptops, 
                      tablets – all no problem.
                    </p>
                    
                    <p className="font-medium text-foreground mb-2">Pairing with Android:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Open the AirPods case and hold the button until the light flashes white</li>
                      <li>On your Android, go to Settings → Bluetooth</li>
                      <li>Find "AirPods" in the list and tap to connect</li>
                    </ol>

                    <p className="font-medium text-foreground mb-2">Pairing with Windows:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Open the AirPods case and hold the button until the light flashes white</li>
                      <li>Go to Settings → Bluetooth & devices</li>
                      <li>Click "Add device" and select your AirPods</li>
                    </ol>

                    <InfoBox title="Good to know" variant="info">
                      Some Apple-specific features only work with Apple devices, such as automatic switching between 
                      your iPhone and Mac, Siri activation, and spatial audio. Basic features (listening, calling) work everywhere.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Which AirPods do I have? */}
            <section id="which" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Which AirPods Do I Have?</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="generation" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I know which generation AirPods I have?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      To buy the right replacement AirPod or case, you need to know which generation you have. 
                      You can check this via the model number.
                    </p>
                    
                    <p className="font-medium text-foreground mb-2">Where to find the model number?</p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li><strong>On the case:</strong> Look at the inside of the lid (near the hinge) or on the bottom of the case.</li>
                      <li><strong>In Bluetooth settings:</strong> Go to Settings → Bluetooth → tap the (i) icon next to your AirPods.</li>
                      <li><strong>On the original packaging:</strong> If you still have it.</li>
                    </ul>

                    <p className="font-medium text-foreground mb-2">Example model numbers:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                      <li>A2031, A2032 → AirPods 2nd generation</li>
                      <li>A2564, A2565 → AirPods 3rd generation</li>
                      <li>A3046, A3047 → AirPods 4</li>
                      <li>A2083, A2084 → AirPods Pro 1st generation</li>
                      <li>A2698, A2699 → AirPods Pro 2nd generation</li>
                    </ul>

                    <InfoBox title="Still unsure?" variant="tip">
                      Send us a photo of your model number via WhatsApp or email. We'll tell you within a few hours 
                      which generation you have and which replacement AirPod or case you need.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Can't figure it out?</h2>
              <p className="text-muted-foreground mb-4">
                No problem. Send us a message via WhatsApp and we'll help you out.
              </p>
              <a 
                href="https://wa.me/31612345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Chat via WhatsApp
              </a>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HelpEN;
