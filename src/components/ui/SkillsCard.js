"use client";

import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";

function SkillsCard({skills}) {
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {skills.map((group, idx) => (
        <div className="flex flex-col gap-4" key={idx}>
          <h3>{group.category}</h3>
          <div
            className={`flex gap-8 p-2 rounded-md ${
              theme === "dark" ? "bg-headerDark" : "bg-headerLight"
            }`}
          >
            {group.items.map((skill) => {
              const Icon = skill.icon;
              return <Icon key={skill.id} size={40} color="white" />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsCard;
