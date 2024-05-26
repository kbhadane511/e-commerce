import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContextProvider'
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { useSearchParams } from 'react-router-dom';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useSearchParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
    </div>
  )
}
