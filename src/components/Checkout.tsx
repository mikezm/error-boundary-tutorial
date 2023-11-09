import Grid from '@mui/material/Grid';
import Product from './Product';
import Bumps from "./Bumps";
import ErrorBoundary from "../ErrorBoundary";
import React from "react";

export default function Checkout() {

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, }} alignItems="baseline">
            <Grid item xs={12} md={8}>
                {/*<ErrorBoundary fallback={<h1>Only Order Bumps are broken</h1>}>*/}
                    <Bumps/>
                {/*</ErrorBoundary>*/}
            </Grid>
            <Grid item xs={12} md={4}>
                <Product />
            </Grid>
        </Grid>
    );
}