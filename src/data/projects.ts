export type ProjectsType = {
  id: number;
  title: string;
  projectUrl: string;
  codeUrl: string;
  status: string;
};

export const projects: ProjectsType[] = [
  {
    id: 1,
    title: "Portfolio",
    projectUrl: "https://herihermansyah.vercel.app/",
    codeUrl: "https://github.com/herihermansyah/portfolio",
    status: "Responsive Design",
  },
  {
    id: 2,
    title: "Multipage",
    projectUrl: "https://multi-page-three.vercel.app/",
    codeUrl: "https://github.com/herihermansyah/multi-page",
    status: "Desktop Only",
  },
  {
    id: 3,
    title: "Ecommerce redux toolkit",
    projectUrl: "https://redux-toolkit-ecommerce-brown.vercel.app/",
    codeUrl: "https://github.com/herihermansyah/redux-toolkit-ecommerce",
    status: "Smartphone Only",
  },
];
