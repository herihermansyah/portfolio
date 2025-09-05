import React from "react";
import Language from "./Language";
import FrontendLibrary from "./FrontendLibrary";
import UiFramework from "./UiFramework";
import DevelopmentTools from "./DevelopmentTools";
import DesignMediaTools from "./DesignMediaTools";

const CardList = () => {
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
      <Language />
      <FrontendLibrary />
      <UiFramework />
      <DevelopmentTools />
      <DesignMediaTools />
    </div>
  );
};

export default CardList;
