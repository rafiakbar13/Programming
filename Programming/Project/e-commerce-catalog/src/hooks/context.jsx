import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(1);
  const [category, setCategory] = useState([]);
  const [empty, setEmpty] = useState(false);

  const handleSingleProduct = () => {
    if (index < 20) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
  };

  const emptyProduct = () => {
    setEmpty(true);
  };

  return (
    <AppContext.Provider
      value={{
        handleSingleProduct,
        emptyProduct,
        products,
        setProducts,
        index,
        category,
        setCategory,
        empty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
