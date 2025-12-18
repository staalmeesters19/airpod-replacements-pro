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
        <div className="aspect-square bg-secondary/50 relative flex items-center justify-center p-2 md:p-8">
          <img
            src={product.images[0]}
            alt={productName}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
          {hasDiscount && (
            <Badge className="absolute top-1 right-1 md:top-3 md:right-3 bg-primary text-primary-foreground text-[8px] md:text-xs px-1 py-0.5 md:px-2 md:py-1">
              {isEnglish ? 'From' : 'Vanaf'}
            </Badge>
          )}
        </div>

        <div className="p-1.5 md:p-4">
          <div className="flex-1 mb-0.5 md:mb-2">
            <h3 className="font-semibold text-[10px] md:text-base mb-0.5 md:mb-1 line-clamp-2 leading-tight">
              {productName}
            </h3>
            <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
              {product.variants.length} {isEnglish ? 'conditions' : 'condities'}
            </p>
          </div>

          <div className="flex items-center space-x-1 md:space-x-2">
            <span className="text-xs md:text-lg font-bold">€{lowestPrice.toFixed(0)}</span>
            {hasDiscount && (
              <span className="text-[10px] md:text-sm text-muted-foreground hidden md:inline">
                – €{highestPrice.toFixed(2)}
              </span>
            )}
          </div>

          {totalStock > 0 ? (
            <p className="text-[10px] md:text-xs text-muted-foreground mt-1 md:mt-2 hidden md:block">
              {isEnglish ? 'In stock' : 'Op voorraad'}
            </p>
          ) : (
            <p className="text-[8px] md:text-xs text-destructive mt-0.5 md:mt-2">
              {isEnglish ? 'Out of stock' : 'Uitverkocht'}
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
