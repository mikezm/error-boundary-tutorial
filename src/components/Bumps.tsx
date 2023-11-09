import React, { useState } from "react";
import Grid from "@mui/material/Grid";

type BumpItem = {
    name: string;
    price: number;
    description: string;
}

const Bumps = () => {
    const [ selectedBump, setSelectedBump ] = useState({});

    const borderStyle = {
        border: '1px solid white',
        marginTop: '1rem',
        paddingBottom: '1rem',
    }

    const titleStyle = {
        fontsize: '2rem',
        paddingBottom: '1rem',
        textDecoration: 'underline',
    }

    const bumpsList: Array<BumpItem> = [
        {
            name: 'First Bump',
            price: 20,
            description: 'This products is great',
        },
        {
            name: 'Second Bump',
            price: 50,
            description: 'This products is even greater',
        }
    ];

    //throw new Error("oops, I made a mistake!");

    return (
        <Grid container spacing={2} style={borderStyle}>
            <Grid item xs={4} style={titleStyle}>Name</Grid>
            <Grid item xs={2} style={titleStyle}>Price</Grid>
            <Grid item xs={6} style={titleStyle}>Description</Grid>
            {bumpsList.map((bump) => (
                <>
                    <Grid item xs={4}>
                        {bump.name}
                    </Grid>
                    <Grid item xs={2}>
                        {bump.price}
                    </Grid>
                    <Grid item xs={6}>
                        {bump.description}
                    </Grid>
                </>
            ))}
        </Grid>
    );
}

export default Bumps;