import React from "react";
import Memoji from "../../assets/memoji.png";
import FeedsComponent from "../../component/Feeds/feed-component";
import "./feeds.css";
import SideNav from "../../Dashboard/SideNav";
import DashboardHeader from "../../Dashboard/header";
import AddIcon from "@mui/icons-material/Add";

const Feeds = () => {
  const data = [
    {
      img: Memoji,
      headerText: "Welcome To Autominer!",
      textContent:
        "We are happy to have you in our community of miners where we make your mine into cryptocurrency fro your life long plans.",
      time: "30 seconds ago",
      id: 1,
    },
    {
      img: Memoji,
      headerText: "Welcome To Autominer!",
      textContent:
        "We are happy to have you in our community of miners where we make your mine into cryptocurrency fro your life long plans.",
      time: "30 seconds ago",
      id: 2,
    },
    {
      img: Memoji,
      headerText: "Welcome To Autominer!",
      textContent:
        "We are happy to have you in our community of miners where we make your mine into cryptocurrency fro your life long plans.",
      time: "30 seconds ago",
      id: 3,
    },
    {
      img: Memoji,
      headerText: "Welcome To Autominer!",
      textContent:
        "We are happy to have you in our community of miners where we make your mine into cryptocurrency fro your life long plans.",
      time: "30 seconds ago",
      id: 4,
    },
    {
      img: Memoji,
      headerText: "Welcome To Autominer!",
      textContent:
        "We are happy to have you in our community of miners where we make your mine into cryptocurrency fro your life long plans.",
      time: "30 seconds ago",
      id: 5,
    },
    {
      img: Memoji,
      headerText: "Welcome To Autominer!",
      textContent:
        "We are happy to have you in our community of miners where we make your mine into cryptocurrency fro your life long plans.",
      time: "30 seconds ago",
      id: 6,
    },
  ];
  return (
    <div className="Dashboard">
      <div className="sidebar">
          <SideNav />
      </div>

      <div className="dashboardNav">
        <DashboardHeader title="OverView"  LoginUser="Cyber User" />
      </div>
      
      <div className="MiddleContent">
       
        <div className="feeds-container">
        <div className="btn-container">
          <button className="feeds-btn">
            <AddIcon /> Add New Feed
          </button>
        </div>
        
          {data.map(({ img, headerText, textContent, time, id }) => (
            <FeedsComponent
              img={img}
              headerText={headerText}
              textContent={textContent}
              time={time}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feeds;
