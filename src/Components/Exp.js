import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { People, Code, ShoppingCart, Work } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

// Intersection Observer hook
const useIntersectionObserver = (onIntersect, resetOnIntersect) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        } else {
          resetOnIntersect();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    const elements = document.querySelectorAll(".counter");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [onIntersect, resetOnIntersect]);
};

const Counter = ({ targetValue }) => {
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);

  // Reset the count when the element goes out of view
  const resetCount = () => {
    setCount(0);
    setReset(true);
  };

  // Start the count animation when the element comes into view
  const startCount = () => {
    if (!reset) return; // Do not start counting if reset is not done

    let increment = targetValue / 100;
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        setCount(targetValue);
        clearInterval(interval);
        setReset(false); // Reset to prevent further counting unless triggered again
      } else {
        setCount(Math.floor(currentValue));
      }
    }, 1);
  };

  // Trigger count animation when the element comes into view
  useIntersectionObserver(startCount, resetCount);

  return (
    <Typography variant="h4" component="span">
      {count.toString().padStart(2, "0")}
      <span>+</span>
    </Typography>
  );
};

const ServiceStat = ({ label, count, icon }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: 2,
      }}
      className="counter"
    >
      {/* Icon */}
      <Box sx={{ marginBottom: 2 }}>{icon}</Box>

      {/* Count */}
      <Typography variant={isMobile ? "h5" : "h4"}>
        <Counter targetValue={count} />
      </Typography>

      {/* Label */}
      <Typography variant="body1">{label}</Typography>
    </Box>
  );
};

const ServiceStatsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2} sx={{ marginTop: 5 }}>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{
          borderRight: isMobile ? "none" : "2px solid #ddd",
          borderBottom: isMobile ? "2px solid #ddd" : "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ServiceStat
          label="Developers"
          count={50}
          icon={<People sx={{ fontSize: isMobile ? 30 : 40, color: "blue" }} />}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{
          borderRight: isMobile ? "none" : "2px solid #ddd",
          borderBottom: isMobile ? "2px solid #ddd" : "none",
        }}
      >
        <ServiceStat
          label="Software Products Delivered"
          count={50}
          icon={<Code sx={{ fontSize: isMobile ? 30 : 40, color: "blue" }} />}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{
          borderRight: isMobile ? "none" : "2px solid #ddd",
        }}
      >
        <ServiceStat
          label="Global Clients"
          count={50}
          icon={<ShoppingCart sx={{ fontSize: isMobile ? 30 : 40, color: "blue" }} />}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <ServiceStat
          label="Years of Experience"
          count={10}
          icon={<Work sx={{ fontSize: isMobile ? 30 : 40, color: "blue" }} />}
        />
      </Grid>
    </Grid>
  );
};

export default ServiceStatsSection;
