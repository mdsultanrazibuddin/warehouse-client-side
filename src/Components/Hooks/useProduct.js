import { useEffect, useState } from "react";

const useProduct = () =>{
    const[product, setProduct] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/product')
          .then(response => response.json())
          .then(data => setProduct(data))
          
  }, []);
  return [product]
 
}
export default useProduct;