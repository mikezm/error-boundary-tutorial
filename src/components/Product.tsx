import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import React from "react";


const Product = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                    Primary Product
                </Typography>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Price: A lot!
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Product;