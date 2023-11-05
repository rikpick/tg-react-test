import React, { useState } from "react";
import './productlist.css';
import { useTelegram } from "../../hooks/useTelegram";
import ProductItem from "../productitem/productitem";

const products = [
    {id: '1', title: '1g', price: '699', description: '1 gr'},
    {id: '2', title: '2g', price: '1499', description: '2 gr'},
    {id: '3', title: '3g', price: '2099', description: '3 gr'},
    {id: '4', title: '4g', price: '2500', description: '4 gr'},
    {id: '5', title: '5g', price: '2999', description: '5 gr'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => { 
    const [addedItems, setAddedItems] = useState([]);

    const {tg} = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            });
        }

    }
    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;