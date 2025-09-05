import React from "react";
import Media from "./article/Media";
import ArticleHero from "./article/ArticleHero";

const Discover = () => {
  return (
    <div className="flex flex-col gap-4 xl:gap-8">
      <ArticleHero />
      <Media />
    </div>
  );
};

export default Discover;
