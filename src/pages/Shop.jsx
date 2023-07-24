import React from 'react'
import { useCart } from 'react-use-cart';
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Shop_add from '../fragments/Shop_add/Shop_add';
import Shop_empty from '../fragments/Shop_empty/Shop_empty';

const Shop = () => {

    const { isEmpty } = useCart();


    return (
        <>
            <Nav />
            {isEmpty ? (
                <Shop_empty />
            ) : (
                <Shop_add />
            )}
            <Footer />
        </>
    )
}

export default Shop