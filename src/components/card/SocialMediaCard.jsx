import React from "react";

function SocialMediaCard({media}) {
  return (
    <div className="flex gap-8">
      {media.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index}>
            <a href={item.link} target="_blank">
              <Icon size={32} />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default SocialMediaCard;
