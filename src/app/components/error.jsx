'use client'
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (

        <Box sx={{ padding: '10em' }}>
            <Typography variant="h1">Error</Typography>
            <Typography variant="body1">An error occurred</Typography>
            <Typography variant="body2">{error.message}</Typography>

            <Button onClick={reset}>Reset</Button>
        </Box>

    )
}