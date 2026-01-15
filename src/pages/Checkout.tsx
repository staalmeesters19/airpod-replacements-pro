import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const isEnglish = location.pathname.startsWith('/en');

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    country: 'NL',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('ideal');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      toast({
        title: isEnglish ? 'Terms required' : 'Voorwaarden vereist',
        description: isEnglish 
          ? 'Please accept the terms and conditions'
          : 'Accepteer de algemene voorwaarden',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: isEnglish ? 'Order placed!' : 'Bestelling geplaatst!',
      description: isEnglish 
        ? 'Thank you for your order. You will receive a confirmation email.'
        : 'Bedankt voor je bestelling. Je ontvangt een bevestigingsmail.',
    });

    clearCart();
    navigate(isEnglish ? '/en' : '/');
    setIsProcessing(false);
  };

  // Redirect to home if cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">
              {isEnglish ? 'Your cart is empty' : 'Je winkelwagen is leeg'}
            </h1>
            <p className="text-muted-foreground">
              {isEnglish 
                ? 'Add products before checking out'
                : 'Voeg producten toe voordat je afrekent'
              }
            </p>
            <Button asChild>
              <Link to={isEnglish ? '/en/single-airpods' : '/losse-airpods'}>
                {isEnglish ? 'View products' : 'Bekijk producten'}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {isEnglish ? 'Back' : 'Terug'}
          </button>

          <h1 className="text-3xl font-bold mb-8">
            {isEnglish ? 'Checkout' : 'Afrekenen'}
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Information */}
                <section className="bg-card rounded-xl border p-6 space-y-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">1</span>
                    {isEnglish ? 'Contact Information' : 'Contactgegevens'}
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <Label htmlFor="email">{isEnglish ? 'Email' : 'E-mailadres'} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@voorbeeld.nl"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="firstName">{isEnglish ? 'First Name' : 'Voornaam'} *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{isEnglish ? 'Last Name' : 'Achternaam'} *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="phone">{isEnglish ? 'Phone' : 'Telefoonnummer'}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+31 6 12345678"
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                </section>

                {/* Shipping Address */}
                <section className="bg-card rounded-xl border p-6 space-y-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">2</span>
                    <Truck className="h-5 w-5" />
                    {isEnglish ? 'Shipping Address' : 'Bezorgadres'}
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <Label htmlFor="address">{isEnglish ? 'Address' : 'Adres'} *</Label>
                      <Input
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder={isEnglish ? 'Street and house number' : 'Straat en huisnummer'}
                        className="mt-1.5"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="addressLine2">{isEnglish ? 'Apartment, suite, etc.' : 'Toevoeging'}</Label>
                      <Input
                        id="addressLine2"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">{isEnglish ? 'Postal Code' : 'Postcode'} *</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="1234 AB"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">{isEnglish ? 'City' : 'Plaats'} *</Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="country">{isEnglish ? 'Country' : 'Land'}</Label>
                      <Input
                        id="country"
                        name="country"
                        value="Nederland"
                        disabled
                        className="mt-1.5 bg-muted"
                      />
                    </div>
                  </div>
                </section>

                {/* Payment Method */}
                <section className="bg-card rounded-xl border p-6 space-y-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">3</span>
                    <CreditCard className="h-5 w-5" />
                    {isEnglish ? 'Payment Method' : 'Betaalmethode'}
                  </h2>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                      <RadioGroupItem value="ideal" id="ideal" />
                      <Label htmlFor="ideal" className="flex items-center gap-3 cursor-pointer flex-1">
                        <div className="h-8 w-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          iDEAL
                        </div>
                        <span>iDEAL</span>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                        <CreditCard className="h-6 w-6 text-muted-foreground" />
                        <span>{isEnglish ? 'Credit/Debit Card' : 'Credit-/Debitcard'}</span>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                      <RadioGroupItem value="bancontact" id="bancontact" />
                      <Label htmlFor="bancontact" className="flex items-center gap-3 cursor-pointer flex-1">
                        <div className="h-8 w-12 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          BC
                        </div>
                        <span>Bancontact</span>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex items-center gap-3 cursor-pointer flex-1">
                        <div className="h-8 w-12 bg-blue-700 rounded flex items-center justify-center text-white text-xs font-bold">
                          PP
                        </div>
                        <span>PayPal</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </section>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl border p-6 sticky top-24 space-y-6">
                  <h2 className="text-xl font-semibold">
                    {isEnglish ? 'Order Summary' : 'Besteloverzicht'}
                  </h2>

                  {/* Cart Items */}
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={`${item.productId}-${item.condition}`} className="flex gap-3">
                        <div className="h-16 w-16 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.productName}
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm line-clamp-2">{item.productName}</p>
                          <p className="text-xs text-muted-foreground capitalize">{item.condition}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-muted-foreground">×{item.quantity}</span>
                            <span className="font-semibold text-sm">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isEnglish ? 'Subtotal' : 'Subtotaal'}</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isEnglish ? 'Shipping' : 'Verzending'}</span>
                      <span className="text-green-600 font-medium">{isEnglish ? 'Free' : 'Gratis'}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>{isEnglish ? 'Total' : 'Totaal'}</span>
                      <span className="text-primary">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                      {isEnglish 
                        ? 'I agree to the terms and conditions and privacy policy'
                        : 'Ik ga akkoord met de algemene voorwaarden en het privacybeleid'
                      }
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        {isEnglish ? 'Processing...' : 'Verwerken...'}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        {isEnglish ? 'Place Order' : 'Bestelling plaatsen'}
                      </span>
                    )}
                  </Button>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-4 pt-2 text-muted-foreground">
                    <div className="flex items-center gap-1 text-xs">
                      <ShieldCheck className="h-4 w-4" />
                      <span>{isEnglish ? 'Secure' : 'Veilig'}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <Lock className="h-4 w-4" />
                      <span>SSL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;