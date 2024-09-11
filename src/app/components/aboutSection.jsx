"use client";

import { Box, Typography } from "@mui/material";

export default function AboutSection() {
    return (
        <Box sx={{ display: 'flex', flexDirection: "column", width: '100vw', my: '3em', }}>
            <Box sx={{
                display: 'flex', width: '100vw', justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                flexDirection: 'column'
            }}
            >
                <Typography variant="h2" fontWeight={"100"}>
                    About Bsides Nairobi
                </Typography>
                <Box sx={{ height: '2em' }} />
                <Box sx={{ px: '10em' }}>
                    <Typography variant="body1" textAlign={"center"} gutterBottom >
                        Security BSides is a non-profit, community-driven, event built for and by members of the information security community. This creates opportunities for individuals to both present and participate in an intimate atmosphere that encourages innovation, inclusivity, networking and collaboration. Our aim is to help develop the Information Security community in Kenya. If you would like to learn more or get involved, please email info@bsidesnairobi.ke
                    </Typography>
                </Box>
                <Box sx={{ height: '2em' }} />
                <Box sx={{ display: 'flex', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography>
                        Let Us continue... Shall we
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}