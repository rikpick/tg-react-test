import React, { useState, useEffect, useCallback } from "react";
import './productlist.css';
import { useTelegram } from "../../hooks/useTelegram";
import ProductItem from "../productitem/productitem";

const chatId = '6852995611';

const products = [
    {id: '1', title: '1 шт', price: 699, description: '1 gr'},
    {id: '2', title: '2 шт', price: 1499, description: '2 gr'},
    {id: '3', title: '3 шт', price: 2099, description: '3 gr'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => { 
    const [addedItems, setAddedItems] = useState([]);

    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
           products: addedItems,
           totalPrice: getTotalPrice(addedItems),
           queryId,
        }
        fetch('https://cautious-laugh-production.up.railway.app/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }

    }, [onSendData])

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
                text: `Оформить заказ  ₴${getTotalPrice(newItems)}`,
                color: "#009400"
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