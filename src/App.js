import logo from './logo.svg';
import './App.css';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import GamesDashboard from "./Components/GamesDashboard";
import AiAgent from "./Components/AiAgent";
import ProjectInfo from "./Components/ProjectInfo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AIServiceCards from "./Components/body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <AiAgent />
  <Footer />
  </>
  
  );
}

export default App;
