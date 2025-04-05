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
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import image1 from "../Resource/cubeailogo.jpeg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openPopup, setOpenPopup] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
const isActive = (item) => {
  if (item === "Computer Vision" && location.pathname === "/Aisection2") return true;
  if (item === "About us" && location.pathname === "/") return true;
  // Add more conditions if needed
  return false;
};

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const scrollToExperts = () => {
    const section = document.getElementById("experts-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✨ Popup content for each item
  const contentMap = {
    "About us": "We are a leading AI company offering innovative solutions across multiple industries.",
    "Services": "We provide services such as AI development, custom software, and cloud integration.",
    "Hire Developers": "Hire skilled developers in AI, web development, mobile apps, and more.",
    "Industries": "We serve industries like healthcare, finance, manufacturing, and logistics.",
    "Case Studies": "Explore our success stories and case studies from real-world client projects.",
    "Blog": "Check out the latest insights, news, and updates from our tech team."
  };

  const menuItems = [
    "About us",
    "Services",
    "Hire Developers",
    "AI/ML",
    "Computer Vision",
    "Industries",
    "Case Studies",
    "Blog"
  ];

  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ backgroundColor: "white", padding: "10px" }}>
      <Toolbar
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: { xs: 1, sm: 3 },
    py: 1,
  }}
>
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    justifyContent: "flex-start",
  }}
>
  <img
    src={image1}
    alt="Logo"
    style={{ height: 60, width: "auto", cursor: "pointer", padding: "1px" }}
  />
</Box>


          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
            <Button variant="outlined" sx={{ borderColor: "blue", color: "black", fontWeight: "600", fontSize: "1rem", px: 2, py: 0.5 }} onClick={scrollToExperts}>
              Inquire
            </Button>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                onClick={() => {
                  if (item === "AI/ML") {
                    navigate("/"); // Navigate to the page
                    setOpenPopup(null); // Ensure no popups open
                    setMobileOpen(false);
                    return; // Stop further execution
                  }
                  
                                  
                  if (item === "AI/ML") {
                    const section = document.getElementById("AI");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  } else if (item === "Computer Vision") {
                    const section = document.getElementById("CV");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                    navigate("/Aisection2");
                  } else {
                    setOpenPopup(item);
                  }
                }}
                sx={{
                  color:
                    (item === "Computer Vision" && location.pathname === "/Aisection2") ||
                    (item === "AI/ML" && location.pathname === "/")
                      ? "darkblue"
                      : item === "AI/ML" || item === "Computer Vision"
                      ? "blue"
                      : "#0D0D0D",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1.3rem",
                  "&:hover": { color: "darkblue" },
                  borderBottom:
                    (item === "Computer Vision" && location.pathname === "/Aisection2") ||
                    (item === "AI/ML" && location.pathname === "/")
                      ? "2px solid darkblue"
                      : "none"
                }}
              >
                {item}
              </Typography>
            ))}
            <Button variant="outlined" sx={{ borderColor: "blue", color: "black", fontWeight: "600", fontSize: "1.5rem", px: 3, py: 1 }} onClick={scrollToExperts}>
              Inquire
            </Button>
          </Box>

          <IconButton edge="end" color="inherit" sx={{ display: { xs: "block", md: "none" } }} onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Dialog 
        open={mobileOpen} 
        onClose={toggleDrawer(false)} 
        TransitionComponent={Transition} 
        fullWidth 
        maxWidth="sm"
        sx={{ "& .MuiDialog-paper": { maxHeight: "100vh" } }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "black" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
               if (item === "AI/ML") {
  navigate("/"); // Navigate normally
  setOpenPopup(null); // Close any open popups
  setMobileOpen(false);
  return; // Stop further execution
}

                  if (item === "Computer Vision") {
                    navigate("/AISection2");
                    setMobileOpen(false);
                  } else if (item === "AI/ML") {
                    navigate("/AIServiceCards");
                    setMobileOpen(false);
                  } else {
                    setOpenPopup(item);
                    setMobileOpen(false);
                  }
                  
                }}
              >
                <ListItemText primary={item} sx={{ fontSize: "1.2rem", fontWeight: "500" }} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>

      {/* Pop-up Content Dialog */}
      <Dialog open={Boolean(openPopup)} onClose={() => setOpenPopup(null)} fullWidth maxWidth="md" TransitionComponent={Transition}>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px" }}>
          <Typography sx={{ fontSize: "1.8rem", fontWeight: "600" }}>{openPopup}</Typography>
          <IconButton onClick={() => setOpenPopup(null)} sx={{ color: "black" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            {contentMap[openPopup] || `This is the pop-up content for ${openPopup}. You can customize this section.`}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
