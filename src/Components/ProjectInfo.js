import React, { useState } from "react";
import { Box, TextField, Button, Container, Grid, Typography, InputAdornment } from "@mui/material";
import { Person, Email, Phone, Business, Description } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ProfileCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    projectInfo: "",
  });

  const [message, setMessage] = useState("");

  const totalFields = Object.keys(formData).length;
  const filledFields = Object.values(formData).filter((value) => value.trim() !== "").length;
  const progressWidth = `${Math.max((filledFields / totalFields) * 50, 10)}%`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      mobile: formData.mobile,
      company: formData.company,
      project_info: formData.projectInfo,
    };

    emailjs
      .send("service_02xr95r", "template_wkpwtym", emailParams, "Qq2wx0VOIM1BtBRsE")
      .then((response) => {
        console.log("Email sent successfully!", response);
        setMessage("Your request has been sent successfully!");
      })
      .catch((error) => {
        console.error("Email send failed!", error);
        setMessage("Failed to send email. Please try again.");
      });
  };

  // Icon mapping with blue background
  const iconMapping = {
    name: <Person sx={{ color: "blue",borderRadius: "50%"}} />,
    email: <Email sx={{ color: "blue" }} />,
    mobile: <Phone sx={{ color: "blue"}} />,
    company: <Business sx={{ color: "blue" }} />,
    projectInfo: <Description sx={{ color: "blue" }} />,
  };

  return (
    <Container maxWidth="sm">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ backgroundColor: "#f9f9f9", padding: 3, borderRadius: 2, boxShadow: 3, marginTop: 5 }}>
          <Typography variant="h5" component="h1" textAlign="center" mb={1}>
            Tell Us About Your Project
          </Typography>

          {/* Progress Bar Animation */}
          <motion.div
            style={{
              width: progressWidth,
              maxWidth: "50%", 
              height: "3px",
              backgroundColor: "blue",
              margin: "0 auto 16px auto",
              borderRadius: "2px",
            }}
            animate={{ width: progressWidth }}
            transition={{ duration: 0.5 }}
          />

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {["name", "email", "mobile", "company"].map((field, index) => (
                <Grid item xs={12} sm={6} key={field}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TextField
                      fullWidth
                      label={field === "name" ? "Your Name" : field.charAt(0).toUpperCase() + field.slice(1)}
                      variant="outlined"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                     
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {iconMapping[field]}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}

              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <TextField
                    fullWidth
                    label="Project Information"
                    variant="outlined"
                    name="projectInfo"
                    value={formData.projectInfo}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                    
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{paddingBottom:"15%"}}>
                          {iconMapping["projectInfo"]}
                        </InputAdornment>
                      ),
                    }}
                  />
                </motion.div>
              </Grid>

              {/* Animated Button */}
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 3, borderRadius: "12px" }}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    borderColor: "transparent",
                    boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.5)",
                    borderRadius: "12px",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "100%",
                      borderRadius: "12px",
                      border: "2px solid transparent",
                    }}
                  >
                    Request a Quote
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </form>

          {message && (
            <Typography mt={2} color="green">
              {message}
            </Typography>
          )}
        </Box>
      </motion.div>
    </Container>
  );
};

export default ProfileCard;
