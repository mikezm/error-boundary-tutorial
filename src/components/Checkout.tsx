import Grid from '@mui/material/Grid';
import Product from './Product';
import CartItems from "./CartItems";
import ErrorBoundary from "../ErrorBoundary";
import React, {useState} from "react";
import Summary from "./Summary";
import {BumpedItems} from "../models/checkout";

export default function Checkout() {
    const [price, setPrice] = useState(50);
    const [quantity, setQuantity] = useState(1);

    const handleBumpChange = (data: BumpedItems) => {
        setPrice(50 + data.total);
        setQuantity(1 + data.quantity);

    }

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, }} alignItems="baseline">
            <Grid item xs={12} md={5}>
                <Product />
            </Grid>
            <Grid item xs={12} md={7}>
                {/*<ErrorBoundary fallback={<h1>Only Order CartItems are broken</h1>}>*/}
                    <CartItems onBumpSelect={handleBumpChange}/>
                {/*</ErrorBoundary>*/}
                <Summary price={price} itemQuantity={quantity}/>
            </Grid>
        </Grid>
    );
}