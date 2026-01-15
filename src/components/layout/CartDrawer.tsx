import { Link, useLocation } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const { t } = useTranslation('common');
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            {isEnglish ? 'Shopping Cart' : 'Winkelwagen'}
            {totalItems > 0 && (
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-12">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">
                {isEnglish ? 'Your cart is empty' : 'Je winkelwagen is leeg'}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {isEnglish 
                  ? 'Add products to get started'
                  : 'Voeg producten toe om te beginnen'
                }
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              asChild
            >
              <Link to={isEnglish ? '/en/single-airpods' : '/losse-airpods'}>
                {isEnglish ? 'View products' : 'Bekijk producten'}
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.condition}`}
                    className="flex gap-4 p-3 rounded-lg bg-muted/50"
                  >
                    {/* Product Image */}
                    <div className="h-20 w-20 rounded-md bg-background overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`${isEnglish ? '/en' : ''}/product/${item.productSlug}`}
                        onClick={() => onOpenChange(false)}
                        className="font-medium text-sm hover:text-primary transition-colors line-clamp-2"
                      >
                        {item.productName}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-0.5 capitalize">
                        {item.condition}
                      </p>
                      <p className="font-semibold text-primary mt-1">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.productId, item.condition, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.productId, item.condition, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.productId, item.condition)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              {/* Subtotal */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {isEnglish ? 'Subtotal' : 'Subtotaal'}
                  </span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {isEnglish ? 'Shipping' : 'Verzending'}
                  </span>
                  <span className="text-green-600 font-medium">
                    {isEnglish ? 'Free' : 'Gratis'}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-semibold text-lg">
                  <span>{isEnglish ? 'Total' : 'Totaal'}</span>
                  <span className="text-primary">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <Button 
                  className="w-full" 
                  size="lg" 
                  asChild
                  onClick={() => onOpenChange(false)}
                >
                  <Link to={isEnglish ? '/en/checkout' : '/checkout'}>
                    {isEnglish ? 'Checkout' : 'Afrekenen'}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => onOpenChange(false)}
                >
                  {isEnglish ? 'Continue shopping' : 'Verder winkelen'}
                </Button>
              </div>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                {isEnglish ? 'Clear cart' : 'Winkelwagen legen'}
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
