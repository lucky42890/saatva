import React from 'react';

export const cartContext = React.createContext({
  cartNumber: undefined,
  increaseCartNumber: undefined
});

export const CartContextProvider = cartContext.Provider;
export const CartContextConsumer = cartContext.Consumer;