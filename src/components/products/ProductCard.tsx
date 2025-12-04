import { Link, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, getLowestPrice, getHighestPrice, getTotalStock, getLocalizedProductName } from '@/data/mockProducts';

interface ProductCardProps {
  product: Product;
  isEnglish?: boolean;
}

const ProductCard = ({ product, isEnglish: isEnglishProp }: ProductCardProps) => {
  const location = useLocation();
  const isEnglish = isEnglishProp ?? location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';
  
  const lowestPrice = getLowestPrice(product);
  const highestPrice = getHighestPrice(product);
  const totalStock = getTotalStock(product);
  const hasDiscount = lowestPrice < highestPrice;
  
  const productName = getLocalizedProductName(product, isEnglish);
  const productSlug = isEnglish && product.slugEN ? product.slugEN : product.slug;

  return (
    <Link to={`${prefix}/product/${productSlug}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
        <div className="aspect-square bg-secondary/50 relative flex items-center justify-center p-8">
          <img
            src={product.images[0]}
            alt={productName}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
          {hasDiscount && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
              {isEnglish ? 'From' : 'Vanaf'} €{lowestPrice.toFixed(2)}
            </Badge>
          )}
          {totalStock < 10 && totalStock > 0 && (
            <Badge variant="secondary" className="absolute top-3 left-3">
              {isEnglish ? 'Limited stock' : 'Beperkte voorraad'}
            </Badge>
          )}
        </div>

        <div className="p-4">
          <div className="flex-1 mb-2">
            <h3 className="font-semibold text-base mb-1 line-clamp-2">
              {productName}
            </h3>
            <p className="text-sm text-muted-foreground">
              {product.variants.length} {isEnglish ? 'conditions available' : 'condities beschikbaar'}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">€{lowestPrice.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground">
                – €{highestPrice.toFixed(2)}
              </span>
            )}
          </div>

          {totalStock > 0 ? (
            <p className="text-xs text-muted-foreground mt-2">
              {isEnglish ? 'In stock – delivered tomorrow' : 'Op voorraad – morgen in huis'}
            </p>
          ) : (
            <p className="text-xs text-destructive mt-2">
              {isEnglish ? 'Temporarily out of stock' : 'Tijdelijk uitverkocht'}
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
