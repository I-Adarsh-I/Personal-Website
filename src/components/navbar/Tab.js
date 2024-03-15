import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Resume from "../../pages/resume/Resume";
import Project from "../../pages/projects/Project";

const NavTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"center"}
        bgcolor={"rgba(203, 213, 225, 0.3)"}
        p={"5px"}
        sx={{
          width: "100%",
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
  );
};

export default NavTabs;
