import React from "react";
import Grid from "@mui/material/Grid";
import {borderStyle, buttonStyle} from "./styles";
import {Button} from "@mui/material";

interface SummaryProps {
    itemQuantity: number,
    price: number
}

const Summary: React.FC<SummaryProps> = ({itemQuantity, price}) => {
    return (
        <Grid container spacing={2} style={borderStyle}>
            <Grid item xs={7}>
                Total items in cart: {itemQuantity}
            </Grid>
            <Grid item xs={5} >
                <Button style={buttonStyle} variant="outlined">Buy Now for only ${price}.00 </Button>
            </Grid>
        </Grid>
    );
}

export default Summary;