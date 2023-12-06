import React, { useState, useEffect, useCallback } from "react";
import './productlist.css';
import './form.css';
import { useTelegram } from "../../hooks/useTelegram";
import ProductItem from "../productitem/productitem";

const chatId = '6852995611';


const products = [
    {id: '1', title: '1 гр.', price: 300, description: '1 gr'},
    {id: '2', title: '5 гр.', price: 1500, description: '2 gr'},
    {id: '3', title: '10 гр.', price: 3000, description: '3 gr'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}



const {user, onClose} = useTelegram()

const ProductList = () => { 
    const [addedItems, setAddedItems] = useState([]);
    const [dost, setDost] = useState('amur')
    const [pay, setPay] = useState('card')
    const [sort, setSort] = useState('amnesia')
    const [klad, setKlad] = useState('klad')
    

    const {tg, queryId} = useTelegram();

    const cartPrice = (klad === 'klad' ? getTotalPrice(addedItems) : getTotalPrice(addedItems) + 50);

    useEffect(() => {
            tg.MainButton.hide();

            if (addedItems.length === 0) {
                tg.MainButton.setParams({
                    color: "#FFB000",
                    text_color: "#242424",
                    text: `Добавьте товар в Корзину`,
                });
            } else {
                tg.MainButton.show();
                tg.MainButton.setParams({
                    color: "#FFB000",
                    text_color: "#242424",
                    text: `Оформить заказ  ₴${cartPrice}`,
                })
            }


            
        },[addedItems, klad])


    const onSendData = useCallback(() => {
        const data = {
           products: addedItems,
           totalPrice: cartPrice,
           queryId,
           address: dost,
           username: user?.id,
           name: user.username,
           pay: pay,
           sort: sort,
           klad: klad
        }
        fetch('https://cautious-laugh-production.up.railway.app/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    }, [addedItems, queryId, dost, pay, sort, klad])

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

    }

    const onChangeDost = (e) => {
        setDost(e.target.value)
    }

    const onChangePay = (e) => {
        setPay(e.target.value)
    }

    const onChangeSort = (e) => {
        setSort(e.target.value)
    }

    const onChangeKlad = (e) => {
        setKlad(e.target.value) 
        
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
            <div className={"form"}>

        <h3>Сорт</h3>

        <select value={sort} onChange={onChangeSort} className={'select'}>
            <option value={'amnesia'}>Amnesia</option>
        </select>

        <h3>Район доставки</h3>
        
        <select value={dost} onChange={onChangeDost} className={'select'}>
            <option value={'amur'}>Амур-Нижнеднепровский</option>
        </select>

        <h3>Способ доставки</h3>

        <select value={klad} onChange={onChangeKlad} className={'select'}>
            <option value={'klad'}>Клад</option>
            <option value={'nova-pochta'}>Новая Почта (почтомат) +50 грн</option>
        </select>

        <h3>Способ оплаты</h3>

        <select value={pay} onChange={onChangePay} className={'select'}>
            <option value={'card'}>Оплата на карту</option>
            <option value={'crypto'}>Криптовалюта</option>
        </select>

       </div>
            

        </div>


    );
};

export default ProductList;