"use client";
import React, {JSX, useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {SkillsType, ItemType} from "@/data/skills";

type SkillsProps = {
  skills: SkillsType;
  showCategory?: boolean;
  boxClass?: string;
  boxClass2?: string;
  boxClass3?: string;
  boxClass4?: string;
  titleClass?: string;
  iconClass?: string;
  icon?: (item: ItemType) => JSX.Element;
  title?: (item: ItemType) => string;
};

function SkillsCard({
  skills,
  showCategory,
  icon,
  title,
  boxClass = "",
  boxClass2 = "",
  boxClass3 = "",
  boxClass4 = "",
  titleClass = "",
  iconClass = "",
}: SkillsProps) {
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={boxClass}>
      {skills.map((group, idx) => (
        <div className={boxClass2} key={idx}>
          {showCategory && <h3 className="font-bold mb-2">{group.category}</h3>}
          <div
            className={`${boxClass3} ${
              theme === "dark" ? "bg-headerDark" : "bg-headerLight"
            }`}
          >
            {group.items.map((item, index) => {
              return (
                <div className={boxClass4} key={index}>
                  {icon && (
                    <div className={iconClass}>
                      <div>{icon(item)}</div>
                    </div>
                  )}
                  {title && <span className={titleClass}>{title(item)}</span>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsCard;
