import React, {JSX} from "react";
import {MenuItem} from "../../data/menu";

export type MenuProps = {
  data: MenuItem[];
  title: (item: MenuItem) => string;
  path: (item: MenuItem) => string;
  icon?: (item: MenuItem) => JSX.Element;
  ulClass?: string;
  iconClass?: string;
  titleClass?: string;
  liClass?: string;
  aClass?: string;
  children?: React.ReactNode;
};

function MenuList({
  data,
  title,
  path,
  icon,
  ulClass = "",
  iconClass = "",
  titleClass = "",
  liClass = "",
  aClass = "",
  children,
}: MenuProps) {
  return (
    <nav aria-label="main navigation">
      <ul className={`${ulClass}`}>
        {data.map((item, index) => {
          return (
            <li className={`${liClass}`} key={index}>
              <a className={`${aClass}`} href={path(item)}>
                {icon && <span className={`${iconClass}`}>{icon(item)}</span>}
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
