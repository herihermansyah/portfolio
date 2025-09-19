import {useState, useEffect} from "react";
import {BarChart} from "@mui/x-charts/BarChart";

const DesignCharts = () => {
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
          {data: [80], label: "Photoshop", color: "#f87171"},
          {data: [75], label: "Premiere", color: "#60a5fa"},
          {data: [65], label: "After Effect", color: "#facc15"},
        ]}
        xAxis={[{data: ["Design & Media Tools"], scaleType: "band"}]}
        yAxis={[{min: 0, max: 100}]}
        width={Math.min(width * 0.9, 500)}
        height={400}
      />
    </div>
  );
};

export default DesignCharts;
