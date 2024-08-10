import React from "react";
import Grid from "../../components/grid/Grid";
import "./homepage.css";

const HomePage = () => {
  const size = 30;
  return (
    <div className="home-page">
      <Grid size={size} />
    </div>
  );
};

export default HomePage;
