import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShoppingCart, Check, Package, Shield, TruckIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { mockProducts, conditionLabels, conditionDescriptions, Condition } from '@/data/mockProducts';
import ProductCard from '@/components/products/ProductCard';
import ModelNumberCheck, { Pro2Variant, Gen4Variant } from '@/components/products/ModelNumberCheck';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(['products', 'common']);
  const isEnglish = location.pathname.startsWith('/en');
  const product = mockProducts.find((p) => p.slug === slug);
  
  // Find case variants (Lightning/MagSafe) for same model
  const caseVariants = useMemo(() => {
    if (!product || product.type !== 'case') return [];
    return mockProducts.filter(
      (p) => p.type === 'case' && p.model === product.model
    );
  }, [product]);
  
  const hasCaseVariants = caseVariants.length > 1;
  
  const getCaseVariantLabel = (slug: string) => {
    if (slug.includes('magsafe')) return 'MagSafe';
    if (slug.includes('lightning')) return 'Lightning';
    if (slug.includes('usbc')) return 'USB-C';
    return 'Standaard';
  };
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [pro2Variant, setPro2Variant] = useState<Pro2Variant>('lightning');
  const [gen4Variant, setGen4Variant] = useState<Gen4Variant>('zonder-anc');

  // Translation helpers for conditions
  const getConditionLabel = (condition: Condition) => {
    const labels: Record<Condition, string> = isEnglish 
      ? { nieuw: 'New', uitstekend: 'Excellent', goed: 'Good', gebruikt: 'Used', beperkt: 'Limited' }
      : { nieuw: 'Nieuw', uitstekend: 'Uitstekend', goed: 'Goed', gebruikt: 'Gebruikt', beperkt: 'Beperkt' };
    return labels[condition];
  };

  const getConditionDescription = (condition: Condition) => {
    const descriptions: Record<Condition, string> = isEnglish 
      ? {
          nieuw: 'Brand new and unused, in original Apple condition',
          uitstekend: 'As good as new, no visible signs of use',
          goed: 'Light signs of use, works perfectly',
          gebruikt: 'Visible signs of use, fully functional',
          beperkt: 'Visible wear, works as expected'
        }
      : {
          nieuw: 'Gloednieuw en ongebruikt, in originele Apple staat',
          uitstekend: 'Zo goed als nieuw, geen zichtbare gebruikssporen',
          goed: 'Lichte gebruikssporen, werkt perfect',
          gebruikt: 'Duidelijke gebruikssporen, volledig functioneel',
          beperkt: 'Zichtbare slijtage, werkt naar behoren'
        };
    return descriptions[condition];
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {isEnglish ? 'Product not found' : 'Product niet gevonden'}
            </h1>
            <Button asChild>
              <Link to={isEnglish ? '/en' : '/'}>
                {isEnglish ? 'Back to home' : 'Terug naar home'}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Set default selected condition to first available
  const activeCondition = selectedCondition || product.variants[0]?.condition;
  const activeVariant = product.variants.find(v => v.condition === activeCondition);

  // Related products (same model, different type)
  const relatedProducts = mockProducts
    .filter((p) => p.model === product.model && p.id !== product.id)
    .slice(0, 3);

  // Check if product needs variant selector
  const isPro2 = product.model === 'airpods-pro-2';
  const isGen4 = product.model === 'airpods-4';
  const needsVariantSelector = isPro2 || isGen4;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{product.name} | RePairPods</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, losse airpods, ${product.model}`} />
        <link rel="canonical" href={`https://repairpods.nl/product/${product.slug}`} />
      </Helmet>

      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={isEnglish ? '/en' : '/'}>Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={product.type === 'case' 
                    ? (isEnglish ? '/en/charging-cases' : '/losse-oplaadcases') 
                    : (isEnglish ? '/en/single-airpods' : '/losse-airpods')}>
                    {product.type === 'earbud' 
                      ? (isEnglish ? 'Single AirPods' : 'Losse AirPods') 
                      : product.type === 'case' 
                        ? (isEnglish ? 'Charging Cases' : 'Losse oplaadcases') 
                        : (isEnglish ? 'Accessories' : 'Accessoires')}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Product Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-secondary/50 rounded-2xl flex items-center justify-center p-12 relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground">{product.description}</p>
              </div>

              {/* Case Variant Selector (MagSafe/Lightning) */}
              {hasCaseVariants && (
                <div>
                  <h3 className="font-semibold mb-3">
                    {isEnglish ? 'Choose your variant:' : 'Kies je variant:'}
                  </h3>
                  <div className="flex gap-3">
                    {caseVariants.map((caseProduct) => (
                      <button
                        key={caseProduct.id}
                        onClick={() => navigate(`/product/${caseProduct.slug}`)}
                        className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                          caseProduct.slug === product.slug
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-secondary/50 text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        {getCaseVariantLabel(caseProduct.slug)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Variant Selector for Pro 2 */}
              {isPro2 && (
                <div>
                  <h3 className="font-semibold mb-3">
                    {isEnglish ? 'Which variant do you have?' : 'Welke variant heb je?'}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setPro2Variant('lightning')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        pro2Variant === 'lightning'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="font-medium">Lightning</span>
                      <p className="text-xs text-muted-foreground mt-1">Modelnummers: A2699 (links) / A2698 (rechts)</p>
                    </button>
                    <button
                      onClick={() => setPro2Variant('usb-c')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        pro2Variant === 'usb-c'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="font-medium">USB-C</span>
                      <p className="text-xs text-muted-foreground mt-1">Modelnummers: A3048 (links) / A3047 (rechts)</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Variant Selector for Gen 4 */}
              {isGen4 && (
                <div>
                  <h3 className="font-semibold mb-3">
                    {isEnglish ? 'Which variant do you have?' : 'Welke variant heb je?'}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setGen4Variant('zonder-anc')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        gen4Variant === 'zonder-anc'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="font-medium">{isEnglish ? 'Without ANC' : 'Zonder ANC'}</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {isEnglish ? 'Model numbers: A3053 (left) / A3050 (right)' : 'Modelnummers: A3053 (links) / A3050 (rechts)'}
                      </p>
                    </button>
                    <button
                      onClick={() => setGen4Variant('met-anc')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        gen4Variant === 'met-anc'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="font-medium">{isEnglish ? 'With ANC' : 'Met ANC'}</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {isEnglish ? 'Model numbers: A3056 (left) / A3055 (right)' : 'Modelnummers: A3056 (links) / A3055 (rechts)'}
                      </p>
                    </button>
                  </div>
                </div>
              )}

              {/* Model Number Check Warning - ABOVE price for Pro 2 and Gen 4 */}
              {needsVariantSelector && (
                <ModelNumberCheck 
                  product={product} 
                  pro2Variant={pro2Variant} 
                  gen4Variant={gen4Variant} 
                />
              )}

              {/* Condition Selector */}
              <div>
                <h3 className="font-semibold mb-3">
                  {isEnglish ? 'Choose your condition:' : 'Kies je conditie:'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.condition}
                      onClick={() => setSelectedCondition(variant.condition)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        activeCondition === variant.condition
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      } ${variant.stock === 0 ? 'opacity-50' : ''}`}
                      disabled={variant.stock === 0}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">{getConditionLabel(variant.condition)}</span>
                        <span className="font-bold">€{variant.price.toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {getConditionDescription(variant.condition)}
                      </p>
                      {variant.stock > 0 && variant.stock < 5 && (
                        <p className="text-xs text-primary mt-1">
                          {isEnglish ? `Only ${variant.stock} left in stock` : `Nog ${variant.stock} op voorraad`}
                        </p>
                      )}
                      {variant.stock === 0 && (
                        <p className="text-xs text-destructive mt-1">
                          {isEnglish ? 'Sold out' : 'Uitverkocht'}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Add to Cart */}
              {activeVariant && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-bold">€{activeVariant.price.toFixed(2)}</span>
                    <Badge variant="secondary">{getConditionLabel(activeVariant.condition)}</Badge>
                  </div>

                  {activeVariant.stock > 0 ? (
                    <div className="flex items-center space-x-2 text-sm">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="font-medium">
                        {isEnglish ? 'In stock – delivered tomorrow' : 'Op voorraad – morgen in huis'}
                      </span>
                    </div>
                  ) : (
                    <Badge variant="destructive">
                      {isEnglish ? 'Temporarily sold out' : 'Tijdelijk uitverkocht'}
                    </Badge>
                  )}

                  <Button size="lg" className="w-full md:w-auto px-12" disabled={activeVariant.stock === 0}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {isEnglish ? 'Add to cart' : 'In winkelwagen'}
                  </Button>
                </div>
              )}

              {/* Model Number Check Warning - BELOW price for other products */}
              {!needsVariantSelector && (
                <ModelNumberCheck product={product} />
              )}

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <Package className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">{isEnglish ? '100% original' : '100% origineel'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TruckIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">{isEnglish ? 'Free shipping' : 'Gratis verzending'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">{isEnglish ? 'Up to 1 year warranty' : 'Tot 1 jaar garantie'}</span>
                </div>
              </div>

              {/* Product Info Cards */}
              <div className="space-y-4 pt-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    {isEnglish ? 'Compatibility' : 'Compatibiliteit'}
                  </h3>
                  <ul className="space-y-2">
                    {product.compatibility.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    {isEnglish ? "What's included" : 'Wat je krijgt'}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.whatsIncluded}</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Pairing Instructions */}
          <Card className="p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">
              {isEnglish 
                ? `How to pair this ${product.type === 'case' ? 'charging case' : 'AirPod'}?`
                : `Hoe koppel je deze ${product.type === 'case' ? 'oplaadcase' : 'AirPod'}?`}
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    {isEnglish ? 'Place both AirPods in the case' : 'Plaats beide AirPods in de case'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish 
                      ? 'Put your existing AirPod and the new AirPod together in the charging case.'
                      : 'Zet je bestaande AirPod en de nieuwe AirPod samen in de oplaadcase.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    {isEnglish ? 'Open the case near your iPhone' : 'Open de case bij je iPhone'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish 
                      ? 'Hold the case open next to your paired iPhone or iPad.'
                      : 'Houd de case open naast je gekoppelde iPhone of iPad.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    {isEnglish ? 'Press the button on the back' : 'Druk op de knop achterop'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish 
                      ? 'Hold the setup button on the back of the case until the light flashes white.'
                      : 'Houd de setup-knop achterop de case ingedrukt tot het lampje wit knippert.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    {isEnglish ? 'Follow the on-screen instructions' : 'Volg de instructies op het scherm'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish 
                      ? 'Your iPhone will automatically recognize the new AirPod and complete the pairing.'
                      : 'Je iPhone herkent automatisch de nieuwe AirPod en voltooit de koppeling.'}
                  </p>
                </div>
              </li>
            </ol>
          </Card>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {isEnglish ? 'Related products' : 'Gerelateerde producten'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
