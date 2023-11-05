import React from "react";
import './productitem.css';
import Button from "../button/button";

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(product)
    }
    


    return (
       <div className={'product ' + className}>
         <div className={'img'}/>
         <div className={'title'}>{product.title}</div>
         <div className={'description'}>{product.description}</div>
         <div className={'price'}>
            <span>Цена: <b>{product.price}</b></span>
         </div>
          <Button className={'add-btn'} onclick={onAddHandler}>
             В корзину
          </Button>
       </div>
    );
};

export default ProductItem;