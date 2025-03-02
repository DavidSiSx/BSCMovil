// src/context/ItemsContext.js
import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [serviceItems, setServiceItems] = useState([]);

  // INVENTARIO
  const addInventoryItem = (item) => {
    setInventoryItems([...inventoryItems, item]);
  };

  const updateInventoryItem = (updated) => {
    setInventoryItems(
      inventoryItems.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  const deleteInventoryItem = (id) => {
    setInventoryItems(inventoryItems.filter((item) => item.id !== id));
  };

  // SERVICIOS
  const addServiceItem = (item) => {
    setServiceItems([...serviceItems, item]);
  };

  const updateServiceItem = (updated) => {
    setServiceItems(
      serviceItems.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  const deleteServiceItem = (id) => {
    setServiceItems(serviceItems.filter((item) => item.id !== id));
  };

  return (
    <ItemsContext.Provider
      value={{
        inventoryItems,
        addInventoryItem,
        updateInventoryItem,
        deleteInventoryItem,

        serviceItems,
        addServiceItem,
        updateServiceItem,
        deleteServiceItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
