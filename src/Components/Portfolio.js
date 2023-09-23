import React, { useState } from "react";
import "../Styles/Portfolio.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import { CardActionArea } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import SchoolIcon from "@mui/icons-material/School";

import { skillsData, accomplishmentsData, educationData } from "./Data";

const Portfolio = () => {
  const [data, setdata] = useState(skillsData);
  const [accomplishedData, setAccomplishedData] = useState(accomplishmentsData);
  const [eduData, setEduData] = useState(educationData);
  const [expanded, setExpanded] = React.useState(true);

  return (
    <div style={{ paddingBottom: "5rem" }} id="tech">
      <h1 className="portfolio-heading">My Skills</h1>
      <div className="portfolio-body">
        {data.map((skill, index) => {
          return (
            <div style={{ paddingBottom: "2.6rem" }}>
              <Card sx={{ maxWidth: 250, maxHeight: 500, height: 500 }}>
                <CardActionArea sx={{ height: 500 }}>
                  <CardMedia
                    component="img"
                    src={skill.imgurl}
                    style={{
                      height: "250px",
                      width: "250px",
                      textAlign: "center",
                    }}
                  />
                  <CardContent sx={{ height: 200 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {skill.skillName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <h1 className="portfolio-heading">
          My Accomplishments
          <BusinessTwoToneIcon sx={{ marginLeft: 4 }} />
        </h1>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "2.6rem", marginLeft: "1rem" }}
        >
          (Persistent Systems)
        </Typography>
      </div>
      {accomplishedData.map((ele) => {
        return (
          <List
            sx={{
              paddingLeft: "170px",
              paddingRight: "12rem",
              paddingBottom: "0px",
              paddingTop: "0px",
            }}
            component="nav"
            aria-label="mailbox folders"
          >
            <ListItemButton
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/ameyaawatade/recent-activity/all/",
                  "_blank",
                  "noreferrer"
                );
              }}
            >
              <ListItemText primary={ele} />
            </ListItemButton>
            <Divider style={{ marginBottom: "2px", marginTop: "2px" }} />
          </List>
        );
      })}
      <h1 className="portfolio-heading">
        My Education
        <SchoolIcon sx={{ marginLeft: 4 }} />
      </h1>
      {eduData.map((ele, index) => {
        return (
          <Accordion
            style={{
              paddingLeft: "170px",
              paddingRight: "12rem",
              paddingBottom: "0px",
              paddingTop: "0px",
              backgroundColor: "#f0ecec",
              width: "100%",
              margin: "1px",
            }}
            expanded="true"
          >
            <AccordionSummary>
              <Typography sx={{ width: "70%", flexShrink: 4 }}>
                {ele.qualificationName}
              </Typography>
              <Typography sx={{ color: "text.primary" }}>
                {ele.instituteName} :{" "}
                <Typography sx={{ color: "text.secondary" }}>
                  {ele.periodOfEducation}
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "text.secondary" }}>
                {ele.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Portfolio;
