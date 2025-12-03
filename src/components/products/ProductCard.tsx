import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, getLowestPrice, getHighestPrice, getTotalStock } from '@/data/mockProducts';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const lowestPrice = getLowestPrice(product);
  const highestPrice = getHighestPrice(product);
  const totalStock = getTotalStock(product);
  const hasDiscount = lowestPrice < highestPrice;

  return (
    <Link to={`/product/${product.slug}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
        <div className="aspect-square bg-secondary/50 relative flex items-center justify-center p-8">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
          {hasDiscount && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
              Vanaf €{lowestPrice.toFixed(2)}
            </Badge>
          )}
          {totalStock < 10 && totalStock > 0 && (
            <Badge variant="secondary" className="absolute top-3 left-3">
              Beperkte voorraad
            </Badge>
          )}
        </div>

        <div className="p-4">
          <div className="flex-1 mb-2">
            <h3 className="font-semibold text-base mb-1 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {product.variants.length} condities beschikbaar
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
              Op voorraad – morgen in huis
            </p>
          ) : (
            <p className="text-xs text-destructive mt-2">Tijdelijk uitverkocht</p>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
