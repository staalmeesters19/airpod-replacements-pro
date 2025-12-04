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

const FAQEN = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions about Ordering, Shipping & Warranty | RePairPods</title>
        <meta
          name="description"
          content="Answers to all your questions about buying single AirPods at RePairPods. Information about payment, shipping, warranty, returns and our product conditions."
        />
        <meta name="keywords" content="buy single airpods, airpods warranty, airpods shipping, refurbished airpods, replace airpod" />
        <link rel="canonical" href="https://repairpods.nl/en/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What payment methods does RePairPods accept?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can pay with iDEAL, Bancontact, credit card (Visa, Mastercard), PayPal, Apple Pay and Google Pay. All payments are processed directly and securely at checkout."
                }
              },
              {
                "@type": "Question",
                "name": "How long is the warranty on my AirPods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "New products have 12 months warranty. Refurbished products (Excellent, Good, Used, Limited) have 6 months warranty."
                }
              },
              {
                "@type": "Question",
                "name": "Are your AirPods genuine original Apple?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, 100%. We only sell original Apple AirPods and charging cases. Each product is checked for serial number, sound quality, microphone and battery."
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
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                Everything you want to know about ordering, shipping, warranty and our products. 
                Can't find your question? Feel free to send us a message via WhatsApp.
              </p>
              
              {/* Quick nav */}
              <div className="bg-background rounded-2xl border border-border p-6">
                <p className="font-medium mb-3">In this FAQ you'll find:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#ordering" className="hover:text-primary transition-colors">→ Ordering & Payment</a></li>
                  <li><a href="#shipping" className="hover:text-primary transition-colors">→ Shipping & Delivery</a></li>
                  <li><a href="#returns" className="hover:text-primary transition-colors">→ Returns & Exchanges</a></li>
                  <li><a href="#warranty" className="hover:text-primary transition-colors">→ Warranty & Assurance</a></li>
                  <li><a href="#product" className="hover:text-primary transition-colors">→ Product, Quality & Conditions</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors">→ About RePairPods & Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="container mx-auto px-4 max-w-3xl py-12">
            
            {/* Ordering & Payment */}
            <section id="ordering" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Ordering & Payment</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="payment" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    What payment methods does RePairPods accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      You can pay with all common payment methods. All payments are processed directly and securely at checkout via an encrypted connection.
                    </p>
                    <p className="font-medium text-foreground mb-2">Available payment methods:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>iDEAL</li>
                      <li>Bancontact</li>
                      <li>Credit card (Visa, Mastercard)</li>
                      <li>PayPal</li>
                      <li>Apple Pay</li>
                      <li>Google Pay</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pay-later" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Can I pay later (Buy Now Pay Later)?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      No, pay later options are not available at RePairPods. All payments are processed directly at checkout.
                    </p>
                    <p className="mb-4">
                      We've made this choice deliberately. By paying directly, we keep our prices low and the process simple. No hassle with invoices or collections afterwards.
                    </p>
                    <InfoBox title="Not sure?" variant="tip">
                      Feel free to contact us via WhatsApp. We're happy to help you find which product suits you best.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="modify" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Can I still modify or cancel my order?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Yes, as long as your order hasn't been processed or shipped, we can usually still modify or cancel it. Be quick though – we ship within 24 hours.
                    </p>
                    <p className="font-medium text-foreground mb-2">How it works:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Contact us as soon as possible via WhatsApp or email</li>
                      <li>Provide your order number and the desired change</li>
                      <li>We'll let you know if it's still possible</li>
                    </ol>
                    <p>
                      Has your package already been shipped? You can use the standard return procedure with 14 days cooling-off period.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Shipping & Delivery */}
            <section id="shipping" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Shipping & Delivery</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="speed" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How quickly will my order be shipped?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Orders received on weekdays are shipped within 24 hours. 
                      Where possible, we ship as a letterbox package – convenient, so you don't have to be home.
                    </p>
                    <InfoBox title="Please note" variant="info">
                      Delivery time also depends on the courier service. During busy periods (holidays, promotions) it may take an extra day. 
                      We do everything we can to get your order to you as quickly as possible.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="countries" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Which countries do you ship to?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      We ship to all countries within Europe. From the Netherlands to Portugal, from Finland to Greece – we deliver everywhere.
                    </p>
                    <p className="font-medium text-foreground mb-2">Indicative delivery times:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li><strong>Netherlands:</strong> 1–2 business days</li>
                      <li><strong>Belgium & Germany:</strong> 2–4 business days</li>
                      <li><strong>Other EU countries:</strong> 3–7 business days</li>
                    </ul>
                    <p className="text-sm">
                      These are guidelines. The exact delivery time depends on the courier service in your region.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="costs" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    What are the shipping costs?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Shipping costs depend on your location. At checkout, you'll always see exactly what the shipping costs are for your order.
                    </p>
                    <p className="font-medium text-foreground mb-2">Rates starting from:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li><strong>Netherlands:</strong> from €3.95</li>
                      <li><strong>Belgium & Germany:</strong> from €6.95</li>
                      <li><strong>Other EU countries:</strong> from €9.95</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tracking" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Will I receive a Track & Trace code?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Yes, as soon as your order is shipped, you'll automatically receive an email with the Track & Trace code. 
                      With this, you can track exactly where your package is.
                    </p>
                    <InfoBox title="No email received?" variant="tip">
                      Check your spam folder first. Still nothing? Contact us with your order number, 
                      and we'll resend the tracking info.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Returns & Exchanges */}
            <section id="returns" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Returns & Exchanges</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="cooling-off" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do returns work and how many days cooling-off period do I have?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      You have 14 days cooling-off period from the moment you receive your order. 
                      Within this period, you may return without giving a reason.
                    </p>
                    <p className="font-medium text-foreground mb-2">How it works:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Contact us via WhatsApp or email</li>
                      <li>You'll receive instructions for the return shipment</li>
                      <li>Return the product in its original condition</li>
                      <li>After receipt and inspection, we'll refund the amount</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="return-costs" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Who pays for return shipping?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      That depends on the reason for the return. We believe in being honest and clear about this.
                    </p>
                    
                    <p className="font-medium text-foreground mb-2">RePairPods pays when:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Wrong product delivered</li>
                      <li>Defective product upon receipt</li>
                      <li>Product not as described</li>
                    </ul>

                    <p className="font-medium text-foreground mb-2">You pay when:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Ordered wrong generation</li>
                      <li>Changed your mind</li>
                      <li>No longer need the product</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wrong-generation" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    I accidentally ordered the wrong generation. What now?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      No stress, this happens more often. Within the 14-day cooling-off period, you can easily exchange for the correct generation.
                    </p>
                    <p className="font-medium text-foreground mb-2">How exchanges work:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Contact us</li>
                      <li>You pay the return shipping costs</li>
                      <li>Is the correct generation more expensive? You only pay the price difference</li>
                      <li>We'll send the correct AirPod or case as quickly as possible</li>
                    </ol>
                    <InfoBox title="Not sure which generation you have?" variant="tip">
                      Check our "Which AirPods do I have?" page or send us a photo of your model number via WhatsApp. We're happy to help.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Warranty & Assurance */}
            <section id="warranty" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Warranty & Assurance</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="warranty-duration" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How long is the warranty on my AirPods and charging case?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      The warranty duration depends on the condition of your product. All products come with solid warranty coverage.
                    </p>
                    
                    <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                      <p className="font-medium text-foreground mb-3">Warranty periods:</p>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>New products (condition: New)</span>
                          <span className="font-medium text-primary">12 months</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Refurbished (Excellent, Good, Used, Limited)</span>
                          <span className="font-medium text-primary">6 months</span>
                        </li>
                      </ul>
                    </div>

                    <p className="font-medium text-foreground mb-2">The warranty covers for example:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>An earbud that suddenly stops working</li>
                      <li>A case that no longer charges</li>
                      <li>Audio issues during normal use</li>
                    </ul>
                    
                    <InfoBox title="Please note" variant="warning">
                      Damage from drops, impacts or water is not covered by warranty.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="legal" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    What's the difference between your warranty and legal warranty?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      The legal warranty is your right as a consumer to a product that does what you can reasonably expect. 
                      There's no fixed term – it depends on the product and how long you can reasonably expect it to last.
                    </p>
                    <p className="mb-4">
                      Our warranty of 6 or 12 months is <strong>in addition to that</strong>: an extra, clear promise from us to you. 
                      Within that period, we'll definitely help you if something is wrong.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="battery-warranty" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Is the battery covered by warranty?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Yes, but with a nuance. At purchase, every product has at least 80% battery capacity. 
                      Normal battery wear from use is normal – that's how lithium-ion batteries work.
                    </p>
                    <p className="mb-4">
                      However, if the battery degrades extremely fast during the warranty period under normal use? 
                      That's covered by warranty and we'll find a solution together.
                    </p>
                    
                    <InfoBox title="Tips for longer battery life" variant="tip">
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Store your AirPods in the case when not in use</li>
                        <li>Avoid extreme temperatures (cold and heat)</li>
                        <li>Don't always charge to 100% – between 20-80% is optimal</li>
                        <li>Preferably use a 5W adapter for slow charging</li>
                      </ul>
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Product, Quality & Conditions */}
            <section id="product" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Product, Quality & Conditions</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="original" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Are your AirPods genuine original Apple?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Yes, 100%. We only sell original Apple AirPods and charging cases. No fakes, no alternatives.
                    </p>
                    <p className="font-medium text-foreground mb-2">Each product is checked for:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Serial and model number</li>
                      <li>Sound quality left and right</li>
                      <li>Microphone and noise cancellation</li>
                      <li>Bluetooth connection and pairing</li>
                      <li>Battery capacity (minimum 80%)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="conditions" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    What's the difference between New, Excellent, Good, Used and Limited?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      We offer five conditions. Each condition is fully tested and functional – the difference is mainly in appearance and price.
                    </p>
                    
                    {/* Conditions Table */}
                    <div className="overflow-x-auto -mx-2">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-2 font-medium">Condition</th>
                            <th className="text-left py-3 px-2 font-medium">Appearance</th>
                            <th className="text-left py-3 px-2 font-medium">Technical</th>
                            <th className="text-left py-3 px-2 font-medium">Battery</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2 font-medium text-primary">New</td>
                            <td className="py-3 px-2">Unused, no marks</td>
                            <td className="py-3 px-2">As new</td>
                            <td className="py-3 px-2">Factory level</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2 font-medium text-primary">Excellent</td>
                            <td className="py-3 px-2">Barely visible marks</td>
                            <td className="py-3 px-2">100% working</td>
                            <td className="py-3 px-2">90-100%</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2 font-medium text-primary">Good</td>
                            <td className="py-3 px-2">Light signs of use</td>
                            <td className="py-3 px-2">100% working</td>
                            <td className="py-3 px-2">Min. 80%</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2 font-medium text-primary">Used</td>
                            <td className="py-3 px-2">Visible marks (scratches)</td>
                            <td className="py-3 px-2">Functionally good</td>
                            <td className="py-3 px-2">Min. 80%</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-2 font-medium text-primary">Limited</td>
                            <td className="py-3 px-2">Clearly used</td>
                            <td className="py-3 px-2">Functionally OK</td>
                            <td className="py-3 px-2">Min. 80%*</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      * With "Limited" you can expect shorter usage time per charge – this is the most affordable option.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hygiene" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Are refurbished AirPods hygienic?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Absolutely. Every AirPod and case is professionally cleaned before we ship it. 
                      For in-ear models (like AirPods Pro), the silicone ear tips are replaced where needed.
                    </p>
                    <p>
                      You receive a product that's clean, fresh and ready to use. No need to worry about that.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sustainable" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Why is buying a single AirPod more sustainable than a new set?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      By only replacing what you're missing, you prevent unnecessary waste. That's better for the environment and your wallet.
                    </p>
                    <p className="font-medium text-foreground mb-2">Why this is more sustainable:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>You don't throw away a working AirPod or case</li>
                      <li>Less e-waste in the world</li>
                      <li>Fewer new raw materials needed</li>
                      <li>Less production and transport</li>
                    </ul>
                    <p className="mt-4">
                      A small gesture with big impact. And you easily save €100+ compared to a whole new set.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* About RePairPods & Contact */}
            <section id="contact" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">About RePairPods & Contact</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="sets" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Do you also sell complete AirPods sets?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      No, we don't sell complete sets (left + right + case together). 
                      This is intentional: we specialize in replacement earbuds and replacement cases only.
                    </p>
                    <p>
                      This way you avoid waste. You only replace what's lost or broken, nothing more. 
                      That's what RePairPods is all about.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact-us" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How can I contact you?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      You can reach us in several ways. We usually respond within a few hours on business days.
                    </p>
                    <ul className="space-y-2">
                      <li><strong>WhatsApp:</strong> +31 6 12345678 (fastest response)</li>
                      <li><strong>Email:</strong> info@repairpods.nl</li>
                      <li><strong>Instagram:</strong> @airpodshandel</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pickup" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Can I pick up my order?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Yes, pickup is possible by appointment in Amsterdam. Contact us to schedule a time.
                    </p>
                    <p>
                      This way you can take your AirPod or case immediately and test it on the spot if you want.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Question not answered?</h2>
              <p className="text-muted-foreground mb-4">
                Send us a message via WhatsApp. We're happy to help.
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

export default FAQEN;
