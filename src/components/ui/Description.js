import React from "react";

function Description({articleClass = "", parafClass = "", children}) {
  return (
    <article className={`${articleClass}`}>
      {Array.isArray(children) ? (
        children.map((text, index) => (
          <p key={index} className={`${parafClass}`}>
            {text}
          </p>
        ))
      ) : (
        <p className={`${parafClass}`}>{children}</p>
      )}
    </article>
  );
}

export default Description;
