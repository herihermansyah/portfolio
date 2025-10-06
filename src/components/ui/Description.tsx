import React from "react";

type DescriptionProps = {
  articleClass?: string;
  parafClass?: string;
  children?: React.ReactNode;
};

function Description({
  articleClass = "",
  parafClass = "",
  children,
}: DescriptionProps) {
  return (
    <article className={articleClass}>
      {Array.isArray(children) ? (
        children.map((text, index) => (
          <p key={index} className={parafClass}>
            {text}
          </p>
        ))
      ) : (
        <p className={parafClass}>{children}</p>
      )}
    </article>
  );
}

export default Description;
