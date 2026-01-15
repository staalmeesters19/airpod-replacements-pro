import { Link, useLocation } from 'react-router-dom';
import { Minus, Plus, Trash2, Check, Sparkles, Cable, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

// Upsell products data
const upsellProducts = [
  {
    id: 'upsell-case',
    slug: 'airpods-silicone-case',
    name: 'Siliconen AirPods Hoesje',
    nameEN: 'Silicone AirPods Case',
    originalPrice: 10,
    salePrice: 5,
    discount: 50,
    icon: Sparkles,
    color: 'bg-gradient-to-br from-pink-100 to-purple-100',
    iconColor: 'text-purple-500',
  },
  {
    id: 'upsell-cable',
    slug: 'charging-cable',
    name: 'Oplaadkabel',
    nameEN: 'Charging Cable',
    originalPrice: 15,
    salePrice: 10,
    discount: 33,
    icon: Cable,
    color: 'bg-gradient-to-br from-blue-100 to-cyan-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'upsell-cleaner',
    slug: 'airpods-cleaner-pen',
    name: 'AirPods Cleanerpen',
    nameEN: 'AirPods Cleaner Pen',
    originalPrice: 10,
    salePrice: 5,
    discount: 50,
    icon: PenTool,
    color: 'bg-gradient-to-br from-green-100 to-emerald-100',
    iconColor: 'text-green-500',
  },
];

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, addItem } = useCart();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const { toast } = useToast();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  const handleAddUpsell = (product: typeof upsellProducts[0]) => {
    // Check if already in cart
    const alreadyInCart = items.some(item => item.productId === product.id);
    if (alreadyInCart) {
      toast({
        title: isEnglish ? 'Already in cart' : 'Al in winkelwagen',
        description: isEnglish 
          ? 'This product is already in your cart'
          : 'Dit product zit al in je winkelwagen',
      });
      return;
    }

    addItem({
      productId: product.id,
      productSlug: product.slug,
      productName: isEnglish ? product.nameEN : product.name,
      condition: 'nieuw',
      price: product.salePrice,
      image: '', // No image for upsell items
    });

    toast({
      title: isEnglish ? 'Added!' : 'Toegevoegd!',
      description: isEnglish 
        ? `${product.nameEN} has been added to your cart`
        : `${product.name} is toegevoegd aan je winkelwagen`,
    });
  };

  const isUpsellInCart = (productId: string) => {
    return items.some(item => item.productId === productId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to={isEnglish ? '/en' : '/'} className="hover:text-foreground transition-colors">
              Home
            </Link>
          </nav>

          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">
              {isEnglish ? 'Your Cart' : 'Jouw Winkelwagen'}
            </h1>
            <Link 
              to={isEnglish ? '/en/single-airpods' : '/losse-airpods'}
              className="text-primary hover:underline flex items-center gap-1"
            >
              {isEnglish ? 'Continue Shopping' : 'Verder winkelen'}
            </Link>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16 space-y-6">
              <div className="h-32 w-32 mx-auto rounded-full bg-muted flex items-center justify-center">
                <svg className="h-16 w-16 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {isEnglish ? 'Your cart is empty' : 'Je winkelwagen is leeg'}
                </h2>
                <p className="text-muted-foreground">
                  {isEnglish 
                    ? 'Add products to get started'
                    : 'Voeg producten toe om te beginnen'
                  }
                </p>
              </div>
              <Button asChild size="lg">
                <Link to={isEnglish ? '/en/single-airpods' : '/losse-airpods'}>
                  {isEnglish ? 'View Products' : 'Bekijk Producten'}
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                {/* Table Header */}
                <div className="hidden sm:grid sm:grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  <div className="col-span-6">{isEnglish ? 'Product' : 'Product'}</div>
                  <div className="col-span-3 text-center">{isEnglish ? 'Quantity' : 'Aantal'}</div>
                  <div className="col-span-3 text-right">{isEnglish ? 'Total' : 'Totaal'}</div>
                </div>

                {/* Cart Items List */}
                <div className="divide-y">
                  {items.map((item) => (
                    <div
                      key={`${item.productId}-${item.condition}`}
                      className="py-6 grid sm:grid-cols-12 gap-4 items-center"
                    >
                      {/* Product Info */}
                      <div className="sm:col-span-6 flex gap-4">
                        <div className="h-24 w-24 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.productName}
                            className="h-full w-full object-contain p-2"
                          />
                        </div>
                        <div className="min-w-0">
                          <Link 
                            to={`${isEnglish ? '/en' : ''}/product/${item.productSlug}`}
                            className="font-medium hover:text-primary transition-colors line-clamp-2"
                          >
                            {item.productName}
                          </Link>
                          <p className="text-sm text-primary font-semibold mt-1">
                            {formatPrice(item.price)}
                          </p>
                          <p className="text-sm text-muted-foreground mt-0.5 capitalize">
                            {isEnglish ? 'Condition' : 'Conditie'}: {item.condition}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="sm:col-span-3 flex items-center justify-center gap-2">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-r-none"
                            onClick={() => updateQuantity(item.productId, item.condition, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-l-none"
                            onClick={() => updateQuantity(item.productId, item.condition, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-10 w-10 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.productId, item.condition)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>

                      {/* Item Total */}
                      <div className="sm:col-span-3 text-right font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upsell Section */}
                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">
                      {isEnglish ? 'Complete your order' : 'Maak je bestelling compleet'}
                    </h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {isEnglish ? 'Special offer' : 'Speciale aanbieding'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {isEnglish 
                      ? 'Add these accessories at a special discount - only with your order!'
                      : 'Voeg deze accessoires toe met speciale korting - alleen bij je bestelling!'
                    }
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {upsellProducts.map((product) => {
                      const IconComponent = product.icon;
                      const inCart = isUpsellInCart(product.id);
                      
                      return (
                        <div 
                          key={product.id}
                          className={`relative rounded-xl border p-4 transition-all ${
                            inCart 
                              ? 'border-primary/50 bg-primary/5' 
                              : 'hover:border-primary/30 hover:shadow-md'
                          }`}
                        >
                          {/* Discount Badge */}
                          <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-500 text-white text-xs px-2">
                            -{product.discount}%
                          </Badge>
                          
                          {/* Product Icon */}
                          <div className={`w-16 h-16 rounded-lg ${product.color} flex items-center justify-center mb-3 mx-auto`}>
                            <IconComponent className={`h-8 w-8 ${product.iconColor}`} />
                          </div>
                          
                          {/* Product Name */}
                          <h4 className="font-medium text-sm text-center mb-2 line-clamp-2">
                            {isEnglish ? product.nameEN : product.name}
                          </h4>
                          
                          {/* Pricing */}
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-muted-foreground line-through text-sm">
                              {formatPrice(product.originalPrice)}
                            </span>
                            <span className="text-primary font-bold text-lg">
                              {formatPrice(product.salePrice)}
                            </span>
                          </div>
                          
                          {/* Add Button */}
                          <Button
                            variant={inCart ? "secondary" : "default"}
                            size="sm"
                            className="w-full"
                            onClick={() => handleAddUpsell(product)}
                            disabled={inCart}
                          >
                            {inCart ? (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                {isEnglish ? 'Added' : 'Toegevoegd'}
                              </>
                            ) : (
                              <>
                                <Plus className="h-4 w-4 mr-1" />
                                {isEnglish ? 'Add' : 'Toevoegen'}
                              </>
                            )}
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl border p-6 sticky top-24 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>{isEnglish ? 'Estimated Total' : 'Geschatte Totaalkosten'}</span>
                      <span>{formatPrice(totalPrice)} EUR</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {isEnglish 
                        ? 'Incl. taxes. Discounts and shipping calculated at checkout.'
                        : 'Incl. belastingen. Kortingen en verzending worden bij het afrekenen berekend.'
                      }
                    </p>
                  </div>

                  <Button asChild size="lg" className="w-full">
                    <Link to={isEnglish ? '/en/checkout' : '/checkout'}>
                      {isEnglish ? 'Checkout' : 'Afrekenen'}
                    </Link>
                  </Button>

                  {/* Payment Methods */}
                  <div className="flex justify-center gap-2">
                    <div className="h-10 px-4 bg-[#5A31F4] rounded-md flex items-center justify-center">
                      <span className="text-white text-sm font-bold">Shop</span>
                    </div>
                    <div className="h-10 px-4 bg-[#FFC439] rounded-md flex items-center justify-center">
                      <span className="text-[#003087] text-sm font-bold">PayPal</span>
                    </div>
                    <div className="h-10 px-4 bg-black rounded-md flex items-center justify-center">
                      <span className="text-white text-sm font-bold">G Pay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;