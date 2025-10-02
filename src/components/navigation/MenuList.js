import React from "react";

function MenuList({
  children,
  data,
  title,
  path,
  icon,
  ulClass = "",
  iconClass = "",
  titleClass = "",
  liClass = "",
  aClass = "",
}) {
  return (
    <nav>
      <ul className={`${ulClass}`}>
        {data.map((item, index) => {
          const Icon = icon ? icon(item) : null;
          return (
            <li className={`${liClass}`} key={index}>
              <a className={`${aClass}`} href={path(item)}>
                {icon && (
                  <span className={`${iconClass}`}>
                    <Icon />
                  </span>
                )}
                <span className={`${titleClass}`}>{title(item)}</span>
              </a>
            </li>
          );
        })}
        {children && <li>{children}</li>}
      </ul>
    </nav>
  );
}

export default MenuList;
