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
    <div className="flex flex-col">
      {/* Variant selector buttons */}
      {cases.length > 1 && (
        <div className="flex gap-2 mb-3">
          {cases.map((caseProduct, index) => (
            <button
              key={caseProduct.id}
              onClick={() => setSelectedVariant(index)}
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
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

      <Link to={`/product/${selectedProduct.slug}`}>
        <Card className="group overflow-hidden hover:shadow-card hover:border-primary/30 transition-all duration-200 h-full">
          <div className="relative aspect-square bg-secondary/30 p-6">
            <img
              src={selectedProduct.images[0]}
              alt={selectedProduct.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
            />
            {hasDiscount && (
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                Vanaf €{lowestPrice.toFixed(2).replace('.', ',')}
              </Badge>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
              {selectedProduct.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {selectedProduct.variants.length} condities beschikbaar
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-foreground">
                €{lowestPrice.toFixed(2).replace('.', ',')}
              </span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  €{highestPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {totalStock > 0 ? (
                totalStock <= 5 ? (
                  <span className="text-amber-600">Nog {totalStock} op voorraad</span>
                ) : (
                  'Op voorraad – morgen in huis'
                )
              ) : (
                <span className="text-destructive">Uitverkocht</span>
              )}
            </p>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default CaseCardWithVariants;
