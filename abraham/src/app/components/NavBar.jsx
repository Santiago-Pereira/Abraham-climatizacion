"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const drawerWidth = 240;
const navItems = [
  { title: "Inicio", url: "/" },
  { title: "Sobre nosotros", url: "/#aboutUs" },
  { title: "Servicios", url: "/#services" },
  { title: "Contacto", url: "/#contact" },
];

export default function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List onClick={handleDrawerToggle}>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.url} passHref>
              <ListItemButton component="a">
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#B73932",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src="https://res.cloudinary.com/ddfz8iwnf/image/upload/v1695767009/abraham/logo1-nobg_n4thec.png"
              alt="logo principal"
              width={100}
              height={100}
            />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button className="underline" key={index} sx={{ color: "#fff" }}>
                <Link key={index} href={item.url}>
                  {item.title.toUpperCase()}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://res.cloudinary.com/ddfz8iwnf/image/upload/v1695767009/abraham/logo1-nobg_n4thec.png"
              alt="logo principal"
              width={150}
              height={150}
            />
          </Box>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
