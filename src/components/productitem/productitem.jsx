import React from "react";
import './productitem.css';
import Button from "../button/button";
import clever from "./clever.png"

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(product)

        document.getElementsByClassName(".add-btn").forEach(btn => {
            btn.addEventListener("click", () => {
              btn.classList.toggle("toggle")
              btn.textContent = btn.classList.contains("toggle") ? "Удалить" : "В корзину"
            })
          })
         }
    
    return (
       <div className={'product ' + className}>
         <div className={'img'}><img src={clever}/></div>
         <div className={'price-and-title'}> 
         <div className={'title'}>{product.title}</div>
         <div className={'price'}>
            <span><b>₴{product.price}</b></span>
         </div>
         </div>
         {/*<div className={'description'}>{product.description}</div>*/}
         <Button className={'add-btn'} onClick={onAddHandler}>
                В корзину
            </Button>
       </div>
    );
};

export default ProductItem;