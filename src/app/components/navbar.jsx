"use client";

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Menu,
  Toolbar,
  Typography,
  Collapse,
} from "@mui/material";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/navigation";
import { ExpandLess, ExpandMore, Menu as MenuIcon } from "@mui/icons-material";

export default function NavBarComponent({ navItems }) {
  const drawerWidth = 240;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openNest, setOpenNest] = useState(true);
  const menuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNestClick = () => {
    setOpenNest(!openNest);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > window.innerHeight - 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (path, sectionID) => {
    router.push(path);
    setTimeout(() => {
      const section = document.getElementById(sectionID);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const recapPages = [
    {
      recapTitle: "2022",
      url: "/recap/2022",
    },
    {
      recapTitle: "2023",
      url: "/recap/2023",
    },
    {
      recapTitle: "2024",
      url: "/recap/2024",
    },
  ];

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bsides Nairobi
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => router.push(`${item.route}`)}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={"drawerBtn"} disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() =>
              router.push(
                "https://paydexp.com/contribution/bsides-2024-conference",
              )
            }
          >
            <ListItemText primary={"Donate"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"recap-nest"} disablePadding>
          <ListItemButton>
            <ListItemButton onClick={handleNestClick}>
              <ListItemText primary={"Recap"} />
              {openNest ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItemButton>
        </ListItem>
        <Collapse in={openNest} timeout="auto" unmountOnExit>
          <List component={"div"}>
            {recapPages.map((rec, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center", pl: 1 }}
                  onClick={() => router.push(`${rec.url}`)}
                >
                  <ListItemText primary={rec.recapTitle} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex", zIndex: 100 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        component={"nav"}
        sx={{ color: "#fff" }}
        style={{
          backgroundColor: isScrolled ? "#000000" : "transparent",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open Sidebar"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img
              src={"/images/bsidesLogo.png"}
              width={100}
              height={100}
              alt="Bsides Logo"
              onClick={() => router.push("/")}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "25em",
              mr: "2em",
              justifyContent: "space-around",
            }}
          >
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() =>
                  scrollToSection(`${item.route}`, `${item.sectionID}`)
                }
                sx={{ color: "#fff" }}
              >
                {item.title}
              </Button>
            ))}{" "}
            <Button
              href="https://paydexp.com/contribution/bsides-2024-conference"
              target="_blank"
            >
              Donate
            </Button>
            <Box sx={{ zIndex: 10 }}>
              <Button
                id="recap-btn"
                aria-controls={menuOpen ? "recap-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? "true" : undefined}
                onClick={handleMenuClick}
              >
                Recap
              </Button>
              <Menu
                id="recap-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "recap-btn",
                }}
              >
                <MenuItem onClick={() => router.push("/recap/2022")}>
                  2022 Recap
                </MenuItem>
                <MenuItem onClick={() => router.push("/recap/2023")}>
                  2023 Recap
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
