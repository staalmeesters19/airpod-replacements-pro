import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { mockProducts, conditionLabels, conditionDescriptions, type Condition } from '@/data/mockProducts';

// Import product images
import airpods2Left from '@/assets/products/airpods-2-left.png';
import airpods2Right from '@/assets/products/airpods-2-right.png';
import airpods2Case from '@/assets/products/airpods-2-case.png';
import airpods3Left from '@/assets/products/airpods-3-left.png';
import airpods3Right from '@/assets/products/airpods-3-right.png';
import airpods3Case from '@/assets/products/airpods-3-case.png';
import airpods4Left from '@/assets/products/airpods-4-left.png';
import airpods4Right from '@/assets/products/airpods-4-right.png';
import airpods4Case from '@/assets/products/airpods-4-case.png';
import airpodsPro1Left from '@/assets/products/airpods-pro-1-left.png';
import airpodsPro1Right from '@/assets/products/airpods-pro-1-right.png';
import airpodsPro1Case from '@/assets/products/airpods-pro-1-case.png';
import airpodsPro2Left from '@/assets/products/airpods-pro-2-left.png';
import airpodsPro2Right from '@/assets/products/airpods-pro-2-right.png';
import airpodsPro2Case from '@/assets/products/airpods-pro-2-case.png';

type Generation = 'airpods-2' | 'airpods-3' | 'airpods-4' | 'airpods-pro-1' | 'airpods-pro-2';
type Side = 'left' | 'right' | 'case';

const generations: { value: Generation; label: string }[] = [
  { value: 'airpods-2', label: 'AirPods 2' },
  { value: 'airpods-3', label: 'AirPods 3' },
  { value: 'airpods-4', label: 'AirPods 4' },
  { value: 'airpods-pro-1', label: 'AirPods Pro 1' },
  { value: 'airpods-pro-2', label: 'AirPods Pro 2' },
];

const sides: { value: Side; label: string }[] = [
  { value: 'left', label: 'Links' },
  { value: 'right', label: 'Rechts' },
  { value: 'case', label: 'Oplaadcase' },
];

const conditions: Condition[] = ['nieuw', 'uitstekend', 'goed', 'gebruikt', 'beperkt'];

// Image mapping
const getProductImage = (generation: Generation, side: Side): string => {
  const imageMap: Record<Generation, Record<Side, string>> = {
    'airpods-2': { left: airpods2Left, right: airpods2Right, case: airpods2Case },
    'airpods-3': { left: airpods3Left, right: airpods3Right, case: airpods3Case },
    'airpods-4': { left: airpods4Left, right: airpods4Right, case: airpods4Case },
    'airpods-pro-1': { left: airpodsPro1Left, right: airpodsPro1Right, case: airpodsPro1Case },
    'airpods-pro-2': { left: airpodsPro2Left, right: airpodsPro2Right, case: airpodsPro2Case },
  };
  return imageMap[generation][side];
};

const ProductConfigurator = () => {
  const [selectedGeneration, setSelectedGeneration] = useState<Generation>('airpods-2');
  const [selectedSide, setSelectedSide] = useState<Side>('left');
  const [selectedCondition, setSelectedCondition] = useState<Condition>('goed');

  // Find the matching product and price
  const { product, variant, productImage } = useMemo(() => {
    // Find product based on generation and side
    const foundProduct = mockProducts.find((p) => {
      if (selectedSide === 'case') {
        return p.model === selectedGeneration && p.type === 'case';
      }
      return p.model === selectedGeneration && p.side === selectedSide && p.type === 'earbud';
    });

    const foundVariant = foundProduct?.variants.find((v) => v.condition === selectedCondition);
    const image = getProductImage(selectedGeneration, selectedSide);

    return {
      product: foundProduct,
      variant: foundVariant,
      productImage: image,
    };
  }, [selectedGeneration, selectedSide, selectedCondition]);

  // Generate product name
  const productName = useMemo(() => {
    const genLabel = generations.find((g) => g.value === selectedGeneration)?.label;
    const sideLabel = sides.find((s) => s.value === selectedSide)?.label;
    
    if (selectedSide === 'case') {
      return `Oplaadcase ${genLabel}`;
    }
    return `${sideLabel}er AirPod ${genLabel}`;
  }, [selectedGeneration, selectedSide]);

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Vind direct jouw losse AirPod
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Weet je welke AirPods je hebt? Selecteer hieronder en zie direct de prijs.
            <br />
            <a href="#podfinder" className="text-primary hover:underline">
              Weet je niet welk model je hebt? Gebruik de PodFinder →
            </a>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Product Image */}
              <div className="flex items-center justify-center bg-secondary/30 rounded-xl p-8">
                <img
                  src={productImage}
                  alt={productName}
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>

              {/* Right: Configuration Options */}
              <div className="space-y-6">
                {/* Step 1: Generation */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    1. Kies je generatie
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {generations.map((gen) => (
                      <button
                        key={gen.value}
                        onClick={() => setSelectedGeneration(gen.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedGeneration === gen.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {gen.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Side */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    2. Wat mis je?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sides.map((side) => (
                      <button
                        key={side.value}
                        onClick={() => setSelectedSide(side.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedSide === side.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {side.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Condition */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    3. Kies de staat
                  </label>
                  <div className="space-y-2">
                    {conditions.map((condition) => {
                      const conditionVariant = product?.variants.find((v) => v.condition === condition);
                      const isAvailable = conditionVariant && conditionVariant.stock > 0;
                      
                      return (
                        <button
                          key={condition}
                          onClick={() => isAvailable && setSelectedCondition(condition)}
                          disabled={!isAvailable}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all ${
                            selectedCondition === condition
                              ? 'bg-primary text-primary-foreground'
                              : isAvailable
                              ? 'bg-secondary text-foreground hover:bg-secondary/80'
                              : 'bg-secondary/50 text-muted-foreground/50 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {selectedCondition === condition && (
                              <Check className="w-4 h-4" />
                            )}
                            <div className="text-left">
                              <span className="font-medium">{conditionLabels[condition]}</span>
                              <p className={`text-xs ${selectedCondition === condition ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                {conditionDescriptions[condition]}
                              </p>
                            </div>
                          </div>
                          <span className="font-semibold">
                            {conditionVariant ? `€${conditionVariant.price.toFixed(2).replace('.', ',')}` : '-'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Jouw selectie:</p>
                      <p className="font-semibold text-foreground">{productName}</p>
                      <p className="text-xs text-muted-foreground">
                        Staat: {conditionLabels[selectedCondition]}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Prijs</p>
                      <p className="text-2xl font-bold text-primary">
                        €{variant?.price.toFixed(2).replace('.', ',') || '-'}
                      </p>
                    </div>
                  </div>

                  {product && (
                    <Button asChild className="w-full" size="lg">
                      <Link to={`/product/${product.slug}`}>
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Bekijk product
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductConfigurator;

