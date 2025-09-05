import React from "react";

const DevelopmentTools = () => {
  return (
    <div>
      <h2 className="font-bold">Development Tools</h2>
      <div className="text-6xl flex items-center gap-10 bg-hover rounded-2xl p-3 mt-2 h-25">
        <span class="devicon-github-original colored"></span>
        <span class="devicon-vscode-plain colored"></span>
        <div className="flex items-center flex-col gap-4">
          <span className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg"
              width={100}
              alt=""
            />
          </span>
          <span className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/OpenAI_logo_2025.svg"
              width={100}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTools;
