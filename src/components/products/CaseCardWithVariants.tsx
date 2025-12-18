import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, getLowestPrice, getHighestPrice, getTotalStock } from '@/data/mockProducts';

interface CaseCardWithVariantsProps {
  cases: Product[];
}

const CaseCardWithVariants = ({ cases }: CaseCardWithVariantsProps) => {
  // Determine variant labels
  const getVariantLabel = (product: Product) => {
    if (product.slug.includes('magsafe')) return 'MagSafe';
    if (product.slug.includes('lightning')) return 'Lightning';
    if (product.slug.includes('usbc')) return 'USB-C';
    return 'Standaard';
  };

  const [selectedVariant, setSelectedVariant] = useState(0);
  const selectedProduct = cases[selectedVariant];
  
  const lowestPrice = getLowestPrice(selectedProduct);
  const highestPrice = getHighestPrice(selectedProduct);
  const totalStock = getTotalStock(selectedProduct);
  const hasDiscount = lowestPrice < highestPrice;

  return (
    <Link to={`/product/${selectedProduct.slug}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
        <div className="aspect-square bg-secondary/50 relative flex items-center justify-center p-4 md:p-8">
          <img
            src={selectedProduct.images[0]}
            alt={selectedProduct.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
          {hasDiscount && (
            <Badge className="absolute top-2 right-2 md:top-3 md:right-3 bg-primary text-primary-foreground text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1">
              Vanaf €{lowestPrice.toFixed(2)}
            </Badge>
          )}
        </div>

        <div className="p-2 md:p-4">
          {/* Variant selector - compact on mobile */}
          {cases.length > 1 && (
            <div className="flex gap-1 md:gap-2 mb-1.5 md:mb-3">
              {cases.map((caseProduct, index) => (
                <button
                  key={caseProduct.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedVariant(index);
                  }}
                  className={`px-1.5 md:px-3 py-0.5 md:py-1.5 text-[9px] md:text-sm rounded-full border transition-colors ${
                    selectedVariant === index
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-secondary/50 text-muted-foreground border-border hover:bg-secondary'
                  }`}
                >
                  {getVariantLabel(caseProduct)}
                </button>
              ))}
            </div>
          )}

          <div className="flex-1 mb-1 md:mb-2">
            <h3 className="font-semibold text-xs md:text-base mb-0.5 md:mb-1 line-clamp-2 leading-tight">
              Losse oplaad...
            </h3>
            <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
              {selectedProduct.variants.length} condities beschikbaar
            </p>
          </div>

          <div className="flex items-center space-x-1 md:space-x-2">
            <span className="text-sm md:text-lg font-bold">€{lowestPrice.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-[10px] md:text-sm text-muted-foreground hidden md:inline">
                – €{highestPrice.toFixed(2)}
              </span>
            )}
          </div>

          {totalStock > 0 ? (
            <p className="text-[10px] md:text-xs text-muted-foreground mt-1 md:mt-2 hidden md:block">
              Op voorraad – morgen in huis
            </p>
          ) : (
            <p className="text-[10px] md:text-xs text-destructive mt-1 md:mt-2">
              Uitverkocht
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default CaseCardWithVariants;
