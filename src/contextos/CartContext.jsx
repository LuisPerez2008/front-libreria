import  { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Agregar producto al carrito
    const agregarAlCart = (product) => {
        const cantidad =
            product.quantity && product.quantity > 0 ? product.quantity : 1;

        setCartItems((prevItems) => {
            const existing = prevItems.find((item) => item.id === product.id);
            if (existing) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + cantidad }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: cantidad }];
            }
        });
    };

    // Quitar producto
    const quitarDeCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };

    // Vaciar carrito
    const vaciarCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                agregarAlCart,
                quitarDeCart,
                vaciarCart,
                totalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
