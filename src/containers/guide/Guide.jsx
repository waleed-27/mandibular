import React from "react";
import "./guide.css";
import { Gbox } from "../../components/";
import g0 from "../../assets/g0.png";
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";

const Guide = () => {
  return (
    <div className="klg__guide">
      <div className="klg__guide-heading">
        <h1>Grade Guide</h1>
      </div>
      <div className="klg__guide-content1">
        <Gbox
          imgUrl={g0}
          title="Normal"
          subtitle="Grade 0"
          text={["No evidence of osteoarthritis (OA; green)"]}
        />
        <Gbox
          imgUrl={g1}
          title="Doubtful"
          subtitle="Grade 1"
          text={[
            "Possibility of joint space narrowing (orange)",
            "Possibility of osteophyte formation (blue)",
          ]}
        />
        <Gbox
          imgUrl={g2}
          title="Mild"
          subtitle="Grade 2"
          text={[
            "definite osteophyte formation (blue)",
            "possible joint space narrowing (orange)",
          ]}
        />
      </div>
      <div className="klg__guide-content2">
        <Gbox
          imgUrl={g3}
          title="Moderate"
          subtitle="Grade 3"
          text={[
            "multiple osteophytes(blue)",
            "definite joint space narrowing (orange)",
            "sclerosis (purple)",
          ]}
        />
        <Gbox
          imgUrl={g4}
          title="Severe"
          subtitle="Grade 4"
          text={[
            "bone deformity (pink)",
            "severe sclerosis (purple)",
            "joint space narrowing (orange)",
            "large osteophytes (blue)",
          ]}
        />
      </div>
    </div>
  );
};

export default Guide;
