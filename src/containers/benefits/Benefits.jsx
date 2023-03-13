import React from "react";
import "./benefits.css";
import { Box } from "../../components/";
import Efficient from "../../assets/Efficient.png";
import Accurate from "../../assets/Accurate.png";
import Monitor from "../../assets/Monitor.png";
import Percent from "../../assets/Percent.png";

const Benefits = () => {
  return (
    <div className="klg__benefits">
      <div className="klg__benefits-heading">
        <h1>Benefits</h1>
      </div>
      <div className="klg__benefits-content">
        <Box
          imgUrl={Efficient}
          title="Efficient"
          text="Improves workflow by generating report under 95 seconds"
        />
        <Box
          imgUrl={Accurate}
          title="Accurate"
          text="Produces Robust Results despite of the tough Criteria of kl grade"
        />
        <Box
          imgUrl={Monitor}
          title="Easy to Monitor"
          text="Makes it easier to track the progress of knee osteoarthritis"
        />
        <Box
          imgUrl={Percent}
          title="Risk"
          text="The lifetime risk of symptomatic knee OA is 44.7%"
        />
      </div>
    </div>
  );
};

export default Benefits;
