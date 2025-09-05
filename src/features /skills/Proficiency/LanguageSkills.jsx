import { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const LanguageSkills = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      <BarChart
        series={[
          { data: [90], label: "HTML", color: "#f87171" },
          { data: [85], label: "CSS", color: "#60a5fa" },
          { data: [75], label: "JavaScript", color: "#facc15" },
          { data: [85], label: "Tailwind CSS", color: "#14b8a6" },
          { data: [85], label: "MUI", color: "#9333ea" },
          { data: [75], label: "React.js", color: "#22c55e" },
          { data: [70], label: "Axios", color: "#f97316" },
        ]}
        xAxis={[
          {
            data: [
              "Skills & Languages",
            ],
            scaleType: "band",
          },
        ]}
        yAxis={[{ min: 0, max: 100 }]}
        width={Math.min(width * 0.9, 500)}
        height={400}
      />
    </div>
  );
};

export default LanguageSkills;
