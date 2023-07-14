import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext({
    items: [],
});


const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD":
            return {
                ...state,
                items: payload.items,
            };

        case "REMOVE":
            return {
                ...state,
                items: payload.items,
            };

        default:
            throw new Error("No case for that type");
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
    });

    useEffect(() => {
        // hydrate on mount
        const items = localStorage.getItem("cartItems");
        if (items) {
            console.log('found stored cart', items);
            dispatch({
                type: "ADD",
                payload: {
                    items: JSON.parse(items),
                },
            });
        }
    }, []);

    const addToCart = (product) => {
        const updatedCart = [...state.items, product];

        dispatch({
            type: "ADD",
            payload: {
                items: updatedCart,
            },
        });

        setSession(updatedCart)
    };

    const removeFromCart = (id) => {
        const updatedCart = state.items.filter(
            (currentProduct) => currentProduct.id !== id
        );

        dispatch({
            type: "REMOVE",
            payload: {
                items: updatedCart,
            },
        });

        setSession(updatedCart)
    };

    const setSession = (updatedCart) => {
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }

    const value = {
        items: state.items,
        addToCart,
        removeFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};