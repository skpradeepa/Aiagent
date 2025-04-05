import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import aiImage from "../Resource/AI11.jpg"; // Replace with actual image path
import Exp from "../Components/Exp";
import ProfileCard from "./ProjectInfo";
import Computervision from "./Computer";

const AISection2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToExperts = () => {
    const section = document.getElementById("experts-section");
    const headerOffset = 100; // Adjust based on header height
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 5, px: isMobile ? 2 : 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Content */}
        <Grid item xs={12} md={8}>
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            fontWeight="bold" 
            gutterBottom
            sx={{ textAlign: isMobile ? "center" : "left" }}
          >
            AI Agent Development Company
          </Typography> 
          <Typography 
            variant="body1" 
            color="textSecondary" 
            paragraph 
            sx={{ textAlign: isMobile ? "center" : "left" }}
          >
            As a reliable AI agent development company, we build task-focused and high-performing solutions using modern technologies like Vertex AI agent builder, AutoGen Studio, and crewAI. At SoluLab, we customize solutions to your specific business needs, whether you're trying to improve customer interactions or automate intricate procedures. From ideation to implementation, we work closely with you to develop future-ready AI agents.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "25px",
                padding: isMobile ? "8px 15px" : "10px 20px",
                mt: 2,
                fontSize: isMobile ? "0.9rem" : "1rem",
                "&:hover": { backgroundColor: "darkblue" },
              }}
              onClick={scrollToExperts}
            >
              Consult Our Experts
            </Button>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: isMobile ? "center" : "flex-end" }}>
          <Box
            component="img"
            src={aiImage}
            alt="AI Development"
            sx={{
              width: "100%",
              maxWidth: "400px",
              minWidth: isMobile ? "250px" : "280px",
              height: "auto",
              minHeight: "250px",
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>

      {/* Extra Components */}
      <Exp />
      <Computervision />

      {/* Experts Section (Target for Scroll) */}
      <Box id="experts-section" sx={{ mt: 4 }}>
        <ProfileCard sx/>
      </Box>
    </Container>
  );
};

export default AISection2;
