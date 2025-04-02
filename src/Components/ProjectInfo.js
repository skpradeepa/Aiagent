npm install react@18 react-dom@18
import React, { useState } from "react";
import { Box, TextField, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import emailjs from "@emailjs/browser";

const ProfileCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    projectInfo: "",
  });

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(""); // To store the file name
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setFileName(uploadedFile ? uploadedFile.name : ""); // Store file name
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare email template parameters
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      mobile: formData.mobile,
      company: formData.company,
      project_info: formData.projectInfo,
    };

    // Send email using EmailJS
    emailjs
      .send("service_7665cjf", "template_hwhbv9f", emailParams, "2TRuML2EJtcVQFloX")
      .then((response) => {
        console.log("Email sent successfully!", response);
        setMessage("Your request has been sent successfully!");
      })
      .catch((error) => {
        console.error("Email send failed!", error);
        setMessage("Failed to send email. Please try again.");
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: isMobile ? 2 : 3,
          borderRadius: 2,
          boxShadow: 3,
          marginTop: 5,
        }}
      >
        <Typography variant={isMobile ? "h6" : "h5"} component="h1" textAlign="center" mb={1}>
          Tell Us About Your Project
        </Typography>
        <Box
          sx={{
            width: isMobile ? "60%" : "50%",
            height: "2px",
            backgroundColor: "blue",
            margin: "0 auto 16px auto",
          }}
        />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Your Name" variant="outlined" name="name" value={formData.name} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Your Email" variant="outlined" name="email" value={formData.email} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Mobile Number" variant="outlined" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Company" variant="outlined" name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Project Information" variant="outlined" name="projectInfo" value={formData.projectInfo} onChange={handleChange} multiline rows={4} required />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: "center",
                  mt: 3,
                }}
              >
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    width: isMobile ? "100%" : "30%",
                    borderRadius: "8px",
                  }}
                >
                  Choose File
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>
                <Typography
                  variant="body2"
                  sx={{
                    marginLeft: isMobile ? 0 : 2,
                    marginTop: isMobile ? 1 : 0,
                    color: "textSecondary",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  {fileName ? fileName : "No file selected"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button type="submit" variant="contained" color="primary" sx={{ width: isMobile ? "100%" : "50%", borderRadius: "8px" }}>
                Request a Quote
              </Button>
            </Grid>
          </Grid>
        </form>
        {message && <Typography mt={2} color="green" textAlign="center">{message}</Typography>}
      </Box>
    </Container>
  );
};

export default ProfileCard;
