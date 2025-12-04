import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { mockProducts, conditionLabels, conditionDescriptions, type Condition } from '@/data/mockProducts';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

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

// Base generation (what user sees in UI)
type BaseGeneration = 'airpods-1' | 'airpods-2' | 'airpods-3' | 'airpods-4' | 'airpods-pro-1' | 'airpods-pro-2' | 'airpods-pro-3';

// Actual model in database (includes variants)
type ModelId = 'airpods-1' | 'airpods-2' | 'airpods-3' | 'airpods-4' | 'airpods-4-anc' | 'airpods-pro-1' | 'airpods-pro-2' | 'airpods-pro-2-usbc' | 'airpods-pro-3';

type Side = 'left' | 'right' | 'case';
type Airpods4Variant = 'regular' | 'anc';
type Pro2Variant = 'lightning' | 'usbc';

const generations: { value: BaseGeneration; label: string; hasVariants: boolean }[] = [
  { value: 'airpods-1', label: 'AirPods 1', hasVariants: false },
  { value: 'airpods-2', label: 'AirPods 2', hasVariants: false },
  { value: 'airpods-3', label: 'AirPods 3', hasVariants: false },
  { value: 'airpods-4', label: 'AirPods 4', hasVariants: true },
  { value: 'airpods-pro-1', label: 'AirPods Pro 1', hasVariants: false },
  { value: 'airpods-pro-2', label: 'AirPods Pro 2', hasVariants: true },
  { value: 'airpods-pro-3', label: 'AirPods Pro 3', hasVariants: false },
];

const airpods4Variants: { value: Airpods4Variant; label: string; modelNumbers: string }[] = [
  { value: 'regular', label: 'Zonder ANC', modelNumbers: 'A3053 / A3050 / A3058' },
  { value: 'anc', label: 'Met ANC', modelNumbers: 'A3056 / A3055 / A3059' },
];

const pro2Variants: { value: Pro2Variant; label: string; modelNumbers: string }[] = [
  { value: 'lightning', label: 'Lightning', modelNumbers: 'A2699 / A2698 / A2700' },
  { value: 'usbc', label: 'USB-C', modelNumbers: 'A3048 / A3047 / A2968' },
];

const sides: { value: Side; label: string }[] = [
  { value: 'left', label: 'Links' },
  { value: 'right', label: 'Rechts' },
  { value: 'case', label: 'Oplaadcase' },
];

const conditions: Condition[] = ['nieuw', 'uitstekend', 'goed', 'gebruikt', 'beperkt'];

// Image mapping
const getProductImage = (generation: BaseGeneration, side: Side): string => {
  const imageMap: Record<BaseGeneration, Record<Side, string>> = {
    'airpods-1': { left: airpods2Left, right: airpods2Right, case: airpods2Case },
    'airpods-2': { left: airpods2Left, right: airpods2Right, case: airpods2Case },
    'airpods-3': { left: airpods3Left, right: airpods3Right, case: airpods3Case },
    'airpods-4': { left: airpods4Left, right: airpods4Right, case: airpods4Case },
    'airpods-pro-1': { left: airpodsPro1Left, right: airpodsPro1Right, case: airpodsPro1Case },
    'airpods-pro-2': { left: airpodsPro2Left, right: airpodsPro2Right, case: airpodsPro2Case },
    'airpods-pro-3': { left: airpodsPro2Left, right: airpodsPro2Right, case: airpodsPro2Case },
  };
  return imageMap[generation][side];
};

const ProductConfigurator = () => {
  const [selectedGeneration, setSelectedGeneration] = useState<BaseGeneration>('airpods-1');
  const [selectedAirpods4Variant, setSelectedAirpods4Variant] = useState<Airpods4Variant | null>(null);
  const [selectedPro2Variant, setSelectedPro2Variant] = useState<Pro2Variant | null>(null);
  const [selectedSide, setSelectedSide] = useState<Side>('left');
  const [selectedCondition, setSelectedCondition] = useState<Condition>('goed');
  const [isAdding, setIsAdding] = useState(false);

  const { addItem } = useCart();

  // Check if current generation needs variant selection
  const needsVariantSelection = selectedGeneration === 'airpods-4' || selectedGeneration === 'airpods-pro-2';
  
  // Check if variant is selected (when needed)
  const variantSelected = useMemo(() => {
    if (selectedGeneration === 'airpods-4') return selectedAirpods4Variant !== null;
    if (selectedGeneration === 'airpods-pro-2') return selectedPro2Variant !== null;
    return true;
  }, [selectedGeneration, selectedAirpods4Variant, selectedPro2Variant]);

  // Get the actual model ID for database lookup
  const actualModelId = useMemo((): ModelId | null => {
    if (selectedGeneration === 'airpods-4') {
      if (selectedAirpods4Variant === 'regular') return 'airpods-4';
      if (selectedAirpods4Variant === 'anc') return 'airpods-4-anc';
      return null;
    }
    if (selectedGeneration === 'airpods-pro-2') {
      if (selectedPro2Variant === 'lightning') return 'airpods-pro-2';
      if (selectedPro2Variant === 'usbc') return 'airpods-pro-2-usbc';
      return null;
    }
    return selectedGeneration as ModelId;
  }, [selectedGeneration, selectedAirpods4Variant, selectedPro2Variant]);

  // Reset variant when generation changes
  const handleGenerationChange = (gen: BaseGeneration) => {
    setSelectedGeneration(gen);
    setSelectedAirpods4Variant(null);
    setSelectedPro2Variant(null);
  };

  // Find the matching product and price
  const { product, variant, productImage } = useMemo(() => {
    if (!actualModelId) {
      return { product: null, variant: null, productImage: getProductImage(selectedGeneration, selectedSide) };
    }

    const foundProduct = mockProducts.find((p) => {
      if (selectedSide === 'case') {
        return p.model === actualModelId && p.type === 'case';
      }
      return p.model === actualModelId && p.side === selectedSide && p.type === 'earbud';
    });

    const foundVariant = foundProduct?.variants.find((v) => v.condition === selectedCondition);
    const image = getProductImage(selectedGeneration, selectedSide);

    return {
      product: foundProduct,
      variant: foundVariant,
      productImage: image,
    };
  }, [actualModelId, selectedGeneration, selectedSide, selectedCondition]);

  // Generate product name
  const productName = useMemo(() => {
    const genLabel = generations.find((g) => g.value === selectedGeneration)?.label;
    const sideLabel = sides.find((s) => s.value === selectedSide)?.label;
    
    let variantLabel = '';
    if (selectedGeneration === 'airpods-4' && selectedAirpods4Variant) {
      variantLabel = selectedAirpods4Variant === 'anc' ? ' (ANC)' : ' (zonder ANC)';
    }
    if (selectedGeneration === 'airpods-pro-2' && selectedPro2Variant) {
      variantLabel = selectedPro2Variant === 'usbc' ? ' (USB-C)' : ' (Lightning)';
    }
    
    if (selectedSide === 'case') {
      return `Oplaadcase ${genLabel}${variantLabel}`;
    }
    return `${sideLabel}er AirPod ${genLabel}${variantLabel}`;
  }, [selectedGeneration, selectedSide, selectedAirpods4Variant, selectedPro2Variant]);

  // Handle add to cart
  const handleAddToCart = () => {
    if (!product || !variant) return;
    
    setIsAdding(true);
    
    // Add item to cart
    addItem({
      productId: product.id,
      productSlug: product.slug,
      productName: productName,
      condition: selectedCondition,
      price: variant.price,
      image: productImage,
    });

    // Show success toast
    toast.success('Toegevoegd aan winkelmandje!', {
      description: `${productName} (${conditionLabels[selectedCondition]}) - €${variant.price.toFixed(2).replace('.', ',')}`,
      duration: 3000,
      action: {
        label: 'Bekijk',
        onClick: () => {
          // Could navigate to cart page here
        },
      },
    });

    // Reset adding state after animation
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

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
                        onClick={() => handleGenerationChange(gen.value)}
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

                {/* Step 1.5: Variant Selection (only for AirPods 4 and Pro 2) */}
                {selectedGeneration === 'airpods-4' && (
                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                          Welke versie heb je?
                        </p>
                        <p className="text-xs text-amber-700 dark:text-amber-300">
                          AirPods 4 bestaat in 2 versies. Ga naar Instellingen → Bluetooth → klik op de (i) naast je AirPods en scroll naar beneden. Modelnummer begint met A.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {airpods4Variants.map((v) => (
                        <button
                          key={v.value}
                          onClick={() => setSelectedAirpods4Variant(v.value)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all ${
                            selectedAirpods4Variant === v.value
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-white dark:bg-secondary text-foreground hover:bg-gray-50 dark:hover:bg-secondary/80 border border-border'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {selectedAirpods4Variant === v.value && <Check className="w-4 h-4" />}
                            <span className="font-medium">{v.label}</span>
                          </div>
                          <span className={`text-xs ${selectedAirpods4Variant === v.value ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                            {v.modelNumbers}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedGeneration === 'airpods-pro-2' && (
                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                          Welke aansluiting heeft jouw case?
                        </p>
                        <p className="text-xs text-amber-700 dark:text-amber-300">
                          AirPods Pro 2 bestaat met Lightning of USB-C. Check de onderkant van je case, of ga naar Instellingen → Bluetooth → klik op de (i) naast je AirPods en scroll naar beneden. Modelnummer begint met A.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {pro2Variants.map((v) => (
                        <button
                          key={v.value}
                          onClick={() => setSelectedPro2Variant(v.value)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all ${
                            selectedPro2Variant === v.value
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-white dark:bg-secondary text-foreground hover:bg-gray-50 dark:hover:bg-secondary/80 border border-border'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {selectedPro2Variant === v.value && <Check className="w-4 h-4" />}
                            <span className="font-medium">{v.label}</span>
                          </div>
                          <span className={`text-xs ${selectedPro2Variant === v.value ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                            {v.modelNumbers}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Side */}
                <div className={!variantSelected && needsVariantSelection ? 'opacity-50 pointer-events-none' : ''}>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {needsVariantSelection ? '3' : '2'}. Wat mis je?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sides.map((side) => (
                      <button
                        key={side.value}
                        onClick={() => setSelectedSide(side.value)}
                        disabled={!variantSelected && needsVariantSelection}
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
                <div className={!variantSelected && needsVariantSelection ? 'opacity-50 pointer-events-none' : ''}>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {needsVariantSelection ? '4' : '3'}. Kies de staat
                  </label>
                  <div className="space-y-2">
                    {conditions.map((condition) => {
                      const conditionVariant = product?.variants.find((v) => v.condition === condition);
                      const isAvailable = conditionVariant && conditionVariant.stock > 0;
                      
                      return (
                        <button
                          key={condition}
                          onClick={() => isAvailable && setSelectedCondition(condition)}
                          disabled={!isAvailable || (!variantSelected && needsVariantSelection)}
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
                        {variant ? `€${variant.price.toFixed(2).replace('.', ',')}` : '-'}
                      </p>
                    </div>
                  </div>

                  {!variantSelected && needsVariantSelection ? (
                    <Button disabled className="w-full" size="lg">
                      Selecteer eerst je versie hierboven
                    </Button>
                  ) : product && variant ? (
                    <div className="space-y-2">
                      <Button 
                        onClick={handleAddToCart}
                        disabled={isAdding || variant.stock === 0}
                        className="w-full transition-all" 
                        size="lg"
                      >
                        {isAdding ? (
                          <>
                            <CheckCircle2 className="w-5 h-5 mr-2 animate-in zoom-in duration-200" />
                            Toegevoegd!
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            In winkelmandje
                          </>
                        )}
                      </Button>
                      <Link 
                        to={`/product/${product.slug}`}
                        className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Of bekijk productdetails →
                      </Link>
                    </div>
                  ) : (
                    <Button disabled className="w-full" size="lg">
                      Product niet gevonden
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
