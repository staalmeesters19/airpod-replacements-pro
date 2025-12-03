import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShoppingCart, Check, Package, Shield, TruckIcon } from 'lucide-react';
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
import ModelNumberCheck from '@/components/products/ModelNumberCheck';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = mockProducts.find((p) => p.slug === slug);
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product niet gevonden</h1>
            <Button asChild>
              <Link to="/">Terug naar home</Link>
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
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={product.type === 'case' ? '/losse-oplaadcases' : '/losse-airpods'}>
                    {product.type === 'earbud' ? 'Losse AirPods' : product.type === 'case' ? 'Losse oplaadcases' : 'Accessoires'}
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

              {/* Model Number Check Warning */}
              <ModelNumberCheck product={product} />

              {/* Condition Selector */}
              <div>
                <h3 className="font-semibold mb-3">Kies je conditie:</h3>
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
                        <span className="font-medium">{conditionLabels[variant.condition]}</span>
                        <span className="font-bold">€{variant.price.toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {conditionDescriptions[variant.condition]}
                      </p>
                      {variant.stock > 0 && variant.stock < 5 && (
                        <p className="text-xs text-primary mt-1">Nog {variant.stock} op voorraad</p>
                      )}
                      {variant.stock === 0 && (
                        <p className="text-xs text-destructive mt-1">Uitverkocht</p>
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
                    <Badge variant="secondary">{conditionLabels[activeVariant.condition]}</Badge>
                  </div>

                  {activeVariant.stock > 0 ? (
                    <div className="flex items-center space-x-2 text-sm">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="font-medium">Op voorraad – morgen in huis</span>
                    </div>
                  ) : (
                    <Badge variant="destructive">Tijdelijk uitverkocht</Badge>
                  )}

                  <Button size="lg" className="w-full md:w-auto px-12" disabled={activeVariant.stock === 0}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    In winkelwagen
                  </Button>
                </div>
              )}

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <Package className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">100% origineel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TruckIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Gratis verzending</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">2 jaar garantie</span>
                </div>
              </div>

              {/* Product Info Cards */}
              <div className="space-y-4 pt-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Compatibiliteit</h3>
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
                  <h3 className="font-semibold mb-3">Wat je krijgt</h3>
                  <p className="text-sm text-muted-foreground">{product.whatsIncluded}</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Pairing Instructions */}
          <Card className="p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Hoe koppel je deze {product.type === 'case' ? 'oplaadcase' : 'AirPod'}?
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Plaats beide AirPods in de case</h3>
                  <p className="text-sm text-muted-foreground">
                    Zet je bestaande AirPod en de nieuwe AirPod samen in de oplaadcase.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Open de case bij je iPhone</h3>
                  <p className="text-sm text-muted-foreground">
                    Houd de case open naast je gekoppelde iPhone of iPad.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Druk op de knop achterop</h3>
                  <p className="text-sm text-muted-foreground">
                    Houd de setup-knop achterop de case ingedrukt tot het lampje wit knippert.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Volg de instructies op het scherm</h3>
                  <p className="text-sm text-muted-foreground">
                    Je iPhone herkent automatisch de nieuwe AirPod en voltooit de koppeling.
                  </p>
                </div>
              </li>
            </ol>
          </Card>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Gerelateerde producten</h2>
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
