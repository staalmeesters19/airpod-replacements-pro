import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/mockProducts';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.slug}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
        <div className="aspect-square bg-secondary/50 relative flex items-center justify-center p-8">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
          {discount > 0 && (
            <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
          {product.stock < 5 && product.stock > 0 && (
            <Badge variant="secondary" className="absolute top-3 left-3">
              Nog {product.stock} op voorraad
            </Badge>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-1 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.condition === 'brand-new' && 'Gloednieuw'}
                {product.condition === 'like-new' && 'Zo goed als nieuw'}
                {product.condition === 'used' && 'Gebruikt'}
                {product.condition === 'heavily-used' && 'Erg gebruikt'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">€{product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                €{product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          {product.stock > 0 ? (
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
