// NavBar.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Dialog,
} from "@mui/material";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import flogo from "../assets/flogo.png";
import Image from "next/image";
import JoinUsForm from "./JoinUsForm";

const pages = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "What we do", id: "our-legacy" },
  { name: "Media", id: "why-choose-us" },
  { name: "Contact", id: "promise" },
];

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false); // New state for the form visibility

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50); // Navbar background changes after scrolling 50px
  });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const openForm = () => setFormOpen(true); // Open the form

  const closeForm = () => setFormOpen(false); // Close the form

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 1)"
              : "rgba(255, 255, 255, 1)",
            boxShadow: scrolled ? 1 : 0,
            transition: "background-color 0.3s ease",
            display: "flex",
            justifyContent: "center",
            height: "87px",
            paddingX: { lg: 9, sm: 0 },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
            }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                alt="logo"
                src={flogo}
                width={200}
                height={200}
                className="object-cover"
              />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" },gap:"1.5rem" }}>
              {pages.map((page) => (
                <Link
                  key={page.id}
                  to={page.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <Button
                    sx={{
                      my: 2,
                      color: scrolled ? "black" : "black", // Text color change on scroll
                      display: "block",
                      "&:hover": { color: "primary.main" },
                      textTransform: "initial",
                      fontSize:'1rem'
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#105A98",
                "&:hover": { backgroundColor: "#1565c0" },
                display: { xs: "none", md: "block" },
              }}
              onClick={openForm} // Open form on desktop click
            >
              Join Us
            </Button>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={toggleSidebar}
                sx={{
                  color: scrolled ? "black" : "black", // Hamburger icon color change on scroll
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={toggleSidebar}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "white",
          },
        }}
      >
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <Box sx={{ width: 240 }}>
            {/* Close Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
              <IconButton onClick={toggleSidebar}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Sidebar Content */}
            <List>
              {pages.map((page) => (
                <ListItem key={page.id} sx={{ textTransform: "none" }} disablePadding>
                  <Link
                    to={page.id}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={toggleSidebar}
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <ListItemButton>
                      <ListItemText primary={page.name} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>

            {/* Sidebar Join Us Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "#105A98" },
                "&:hover": { color: "#105A98" },
                display: "block",
                width: "80%",
                position: "relative",
                bottom: "50%",
                left: "10%",
                color: "#105A98",
              }}
              onClick={openForm} // Open form on mobile click
            >
              Join Us
            </Button>
          </Box>
        </motion.div>
      </Drawer>

      {/* Dialog for Join Us Form */}
      <Dialog open={formOpen} onClose={closeForm}>
        <JoinUsForm closeForm={closeForm} /> {/* Pass closeForm as a prop */}
      </Dialog>
    </>
  );
}

export default NavBar;
