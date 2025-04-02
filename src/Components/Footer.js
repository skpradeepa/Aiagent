import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Facebook, LinkedIn, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1E2A38", color: "white", py: 5, px: 7, marginTop: 5 }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* COMPANY Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" fontWeight="bold">COMPANY</Typography>
          {["About Us", "Our Team", "Case Studies", "Career", "Contact Us", "Confidentiality", "Partner with Us"].map(
            (item, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1, cursor: "pointer" }}>
                {item}
              </Typography>
            )
          )}
        </Grid>

        {/* SERVICES Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" fontWeight="bold">SERVICES</Typography>
          {["Web3 Development", "Blockchain Development", "DeFi Development", "Stablecoin Development", "Asset Tokenization Development", "Cryptocurrency Wallet Development", "Crypto Trading Bot Development"].map(
            (item, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1, cursor: "pointer" }}>
                {item}
              </Typography>
            )
          )}
        </Grid>

        {/* AI SERVICES Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" fontWeight="bold">AI SERVICES</Typography>
          {["AI Development", "Generative AI Development", "AI Copilot Development", "AI Consulting Company", "AI Chatbot Development", "AI Agent Development", "Machine Learning Development"].map(
            (item, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1, cursor: "pointer" }}>
                {item}
              </Typography>
            )
          )}
        </Grid>

        

        {/* CONNECT Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" fontWeight="bold">CONNECT</Typography>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Sales</Typography>
          {["cube@.com", "+1 347 270 8590", "+91 94270 26888"].map((item, index) => (
            <Typography key={index} variant="body2" sx={{ mt: 1 }}>
              □ {item}
            </Typography>
          ))}
          
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Hiring</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>HR : +91 98055 33953</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>Email : hr@cubeai.com</Typography>
        </Grid>
      </Grid>
        
      {/* Footer Bottom Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 4, borderTop: "1px solid gray", pt: 2, flexWrap: "wrap" }}>
        <Typography variant="body2" sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
          Cube@2025, All Rights Reserved.
        </Typography>
        
        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flex: 1 }}>
          <Facebook sx={{ cursor: "pointer" }} />
          <LinkedIn sx={{ cursor: "pointer" }} />
          <Twitter sx={{ cursor: "pointer" }} />
          <Instagram sx={{ cursor: "pointer" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
