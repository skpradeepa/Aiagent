import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  Grid,
  Checkbox,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import image1 from "../Resource/cubeailogo.jpeg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Header = () => {
  const [openPopup, setOpenPopup] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const scrollToExperts = () => {
    const section = document.getElementById("experts-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const servicesData = [
    { name: "Blockchain", subcategories: ["Blockchain", "Smart Contracts", "Cryptocurrency", "NFT", "Web3", "DeFi", "Metaverse"] },
    { name: "AI & ML", subcategories: [] },
    { name: "Generative AI", subcategories: [] },
    { name: "Software Development", subcategories: [] },
    { name: "IOT", subcategories: [] },
    { name: "Token", subcategories: [] },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          padding: "10px",
          "@media (max-width: 768px)": { padding: "5px" },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3, py: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={image1} alt="Logo" style={{ height: 80, width: "auto", cursor: "pointer" }} />
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {["About us", "Services", "Hire Developers", "Industries", "Case Studies", "Blog"].map((item, index) => (
              <Typography
                key={index}
                onClick={() => setOpenPopup(item)}
                sx={{
                  color: "#0D0D0D",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1.3rem",
                  "&:hover": { color: "blue" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>

          {/* Inquire Button */}
          <Button
            variant="outlined"
            sx={{
              borderColor: "blue",
              color: "black",
              fontWeight: "600",
              fontSize: "1.5rem",
              px: 3,
              py: 1,
              "@media (max-width: 768px)": {
                fontSize: "1rem",
                px: 2,
                py: 0.5,
              },
            }}
            onClick={scrollToExperts}
          >
            Inquire
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250, padding: 2 }}>
          {["About us", "Services", "Hire Developers", "Industries", "Case Studies", "Blog"].map((item, index) => (
            <ListItem button key={index} onClick={() => { setOpenPopup(item); setMobileOpen(false); }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Pop-up Dialog */}
      <Dialog open={Boolean(openPopup)} onClose={() => setOpenPopup(null)} fullWidth maxWidth="md" TransitionComponent={Transition}>
        <DialogTitle sx={{ fontSize: "1.8rem", fontWeight: "600" }}>{openPopup}</DialogTitle>
        <DialogContent>
          {openPopup === "Services" ? (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{ backgroundColor: "#FFF3F3", padding: 2 }}>
                {servicesData.map((service, index) => (
                  <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, my: 1 }}>
                    <Typography sx={{ fontSize: "1.2rem", fontWeight: "600" }}>{service.name}</Typography>
                    <Checkbox />
                  </Box>
                ))}
              </Grid>
              <Grid item xs={12} md={6} sx={{ backgroundColor: "#FFF3F3", padding: 2 }}>
                {servicesData[0].subcategories.map((subcategory, index) => (
                  <Typography key={index} sx={{ fontSize: "1.2rem", fontWeight: "500", my: 1 }}>
                    {subcategory}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          ) : (
            <Typography>This is the pop-up content for {openPopup}. You can customize this section.</Typography>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
