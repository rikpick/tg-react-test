import React from "react";
import './productitem.css';
import Button from "../button/button";
import clever from "./clever.png"

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(product)
    }
    
    return (
       <div className={'product ' + className}>
         <div className={'img'}><img src={clever}/></div>
         <div className={'title'}>{product.title}</div>
         <div className={'description'}>{product.description}</div>
         <div className={'price'}>
            <span><b>₴{product.price}</b></span>
         </div>
         <Button className={'add-btn'} onClick={onAddHandler}>
                В корзину
            </Button>
       </div>
    );
};

export default ProductItem;