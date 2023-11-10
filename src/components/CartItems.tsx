import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {borderStyle, bumpStyle, buttonStyle} from "./styles";
import {BumpedItems, CheckoutItem} from "../models/checkout";
import {Button} from "@mui/material";

interface CartItemProps {
    onBumpSelect: (data: BumpedItems) => void;
}

const CartItems: React.FC<CartItemProps> = ({ onBumpSelect }) => {
    const [ selectedBumps, setSelectedBumps ] = useState<string[]>([]);
    const [ bumpTotal, setBumpTotal ] = useState(0);

    const cartItemList: Array<CheckoutItem> = [
        {
            name: 'First Item',
            price: 20,
            description: 'This product is great',
        },
        {
            name: 'Second Item',
            price: 30,
            description: 'This product is even better',
        },
        {
            name: 'Third Item',
            price: 100,
            description: 'This one maybe not so much',
        }
    ];

    const handleItemClick = (item: CheckoutItem) => {
        let items: string[];
        let total: number;
        if (!selectedBumps.includes(item.name)) {
            items = [...selectedBumps, item.name];
            total = bumpTotal + item.price;
        } else {
            items = selectedBumps.filter(name => name !== item.name);
            total = bumpTotal - item.price;
        }
        setSelectedBumps(items);
        setBumpTotal(total);
        onBumpSelect({quantity: items.length, total: total});
    }

    // throw new Error("oops, I made a mistake!");

    return (
        <Grid container spacing={2} style={borderStyle}>
            <Grid item xs={12}>Add some other items to your cart:</Grid>
            {cartItemList.map((bump) => (
                <Grid container key={bump.name} spacing={2} style={bumpStyle}>
                    <Grid item xs={3}>
                        {bump.name}
                    </Grid>
                    <Grid item xs={2}>
                        ${bump.price}.00
                    </Grid>
                    <Grid item xs={5}>
                        {bump.description}
                    </Grid>
                    <Grid item xs={2}>
                        <Button style={buttonStyle} variant="outlined" onClick={() => {handleItemClick(bump)}} >
                            {selectedBumps.includes(bump.name) ? '-' : '+'}
                        </Button>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
}

export default CartItems;