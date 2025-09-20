import React, {useContext} from "react";
import {ThemeContext} from "../../context/ThemeProvider";

function GroupCard({skillsData}) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
      {skillsData.map((group, idx) => (
        <div key={idx}>
          <h3 className="font-bold mb-2">{group.category}</h3>
          <div
            className={`flex gap-6 p-2 rounded-md ${
              theme === "light" ? "bg-headerLight" : "bg-headerDark"
            } `}
          >
            {group.items.map((skill) => {
              const Icon = skill.icon;
              return <Icon className="text-white" key={skill.id} size={42} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroupCard;
