import { useEffect, useState } from "react";

const useProducts = () => {
  const [isLoading, SetIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    SetIsLoading(true);
    fetch("https://morning-wave-16762.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    SetIsLoading(false);
  }, []);
  return [products, isLoading];
};

export default useProducts;
