import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Condition, conditionLabels } from '@/data/mockProducts';

export interface CartItem {
  productId: string;
  productSlug: string;
  productName: string;
  condition: Condition;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: string, condition: Condition) => void;
  updateQuantity: (productId: string, condition: Condition, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'repairpods-cart';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Load from localStorage on init
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems((currentItems) => {
      // Check if item already exists with same product and condition
      const existingIndex = currentItems.findIndex(
        (item) => item.productId === newItem.productId && item.condition === newItem.condition
      );

      if (existingIndex >= 0) {
        // Increase quantity
        const updated = [...currentItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      // Add new item
      return [...currentItems, { ...newItem, quantity: 1 }];
    });
  };

  const removeItem = (productId: string, condition: Condition) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.productId === productId && item.condition === condition)
      )
    );
  };

  const updateQuantity = (productId: string, condition: Condition, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, condition);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.condition === condition
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

