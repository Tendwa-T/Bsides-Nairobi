import { Box, Typography, Slide } from "@mui/material";


export default function LandingSection() {
    return (
        <Box sx={{
            display: 'flex', width: '100vw', p: '2em', justifyContent: 'center', alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url(/images/nairobi.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to right, rgb(0, 0, 0, 0.5), rgba(0,0,0, 0.5))',
                zIndex: 1
            }
        }}>
            <Slide
                direction="right"
                in={true}
                mountOnEnter
                unmountOnExit
                timeout={{ enter: 900, exit: 300 }}
            >
                <Box sx={{ position: 'absolute', top: '18vh', left: '15vw', zIndex: 2 }}>
                    <Typography variant="h2" fontWeight={"bold"} sx={{ color: 'white' }}>
                        Welcome to
                    </Typography>
                </Box>
            </Slide>


            <Slide
                direction="left"
                in={true}
                mountOnEnter
                unmountOnExit
                timeout={{ enter: 900, exit: 300 }}
            >
                <Box sx={{
                    display: 'flex', width: '55vw', color: 'white', height: '50vh', p: '2em', justifyContent: 'center', alignItems: 'center',
                    backgroundImage: 'url(/images/bsidesLogo.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: '20vh',
                    zIndex: 1
                }} />
            </Slide>
            <Typography variant="h3" fontWeight={"bold"} sx={{ position: 'absolute', bottom: "18vh", color: "#fff", zIndex: 2 }}>
                Call For papers
            </Typography>

        </Box>

    )
}