import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import React from "react";
import {borderStyle} from "./styles";

const Product = () => {
    return (
        <Grid container spacing={2} style={borderStyle} >
            <Grid item>
                <Typography sx={{ mb: 2 }} variant="h5" component="div">
                    Wingdings Wonder Translator
                </Typography>
                <Typography sx={{ mt: 3, mb: 2 }} variant="h6" component="div">
                    Price: $50.00
                </Typography>
                <Typography sx={{ mt: 3, mb: 2 }} component="p">
                    Meet the Wingdings Wonder Translator—a compact gadget turning your messages into playful symbols, adding fun to conversations. With a sleek design and user-friendly interface, this device brings creativity to communication. Break free from the ordinary with the Wingdings Wonder Translator—a quirky tool for expression!
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Product;