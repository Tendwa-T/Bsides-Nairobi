"use client"

import { Box, CircularProgress, Skeleton, Typography } from "@mui/material"

export default function LoadingPage() {
    return (
        <Box sx={{ display: "flex", width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
            <Typography variant="h1">Loading</Typography>
        </Box>
    )
}