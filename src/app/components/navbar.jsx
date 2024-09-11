"use client"

import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Menu } from "@mui/icons-material";
import Image from "next/image";


export default function NavBarComponent({ navItems, children }) {
    const drawerWidth = 240;
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > (window.innerHeight - 500)) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Bsides Nairobi
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Box sx={{ display: 'flex', zIndex: 10 }}>
            <CssBaseline />
            <AppBar position="fixed" component={'nav'} sx={{ color: "#fff" }}
                style={{
                    backgroundColor: isScrolled ? "#000000" : 'transparent',
                    transition: 'background-color 0.3s ease-in-out'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open Sidebar"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Box
                        sx={{ flexGrow: 1, display: { xs: "block" } }}
                    >
                        <Image
                            src={'/images/bsidesLogo.png'}
                            width={100}
                            height={100}
                            alt="Bsides Logo"
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}


