import React, { useEffect, useState } from "react";
import "./project.css";
import Footer from "../../components/footer/Footer";
import NavTab from "../../components/navbar/Tab";
import { DesignProj } from "../../components/cards/Cards";
import { Fade } from "react-awesome-reveal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DevProj from "./DevProj";

function Project() {
  useEffect(() => {
    document.title = "Projects | Adarsh Singh";
  }, []);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="w-100 flex justify-center z-10 sticky top-4 tabs mt-20">
      <Box
        display={"flex"}
        justifyContent={"center"}
        bgcolor={"rgba(203, 213, 225, 0.3)"}
        p={"5px"}
        sx={{
          borderRadius: "100px",
          backdropFilter: "blur(20px)",
        }}
      >
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
          className="rounded-full"
        >
          <Tab label="Dev projects" sx={{ textTransform: "unset" }} className="fontFam rounded-full" />
          <Tab label="Design projects" sx={{ textTransform: "unset" }} className="fontFam rounded-full" />
        </Tabs>
      </Box>
      
      </div>
      <Fade>
        <div className=" project-main-container">
          {value === 0 && <DevProj />}
          {value === 1 && <DesignProj />}
        </div>
      </Fade>
      <Footer />
    </>
  );
}

export default Project;
