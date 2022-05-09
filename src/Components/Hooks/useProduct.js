import { useEffect, useState } from "react";

const useProduct = () =>{
    const[product, setProduct] = useState([])
    useEffect(() => {
      fetch('https://immense-shore-38517.herokuapp.com/product')
          .then(response => response.json())
          .then(data => setProduct(data))
          
  }, []);
  return [product, setProduct]
 
}
export default useProduct;
