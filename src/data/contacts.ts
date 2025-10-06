import {FaSquareGithub} from "react-icons/fa6";
import {IoMail} from "react-icons/io5";
import {FaSquareWhatsapp} from "react-icons/fa6";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa";
import {AiFillTikTok} from "react-icons/ai";

export type ContactType = {
  id: number;
  title: string;
  path: string;
  icon: React.ElementType;
};

export const contacts: ContactType[] = [
  {
    id: 1,
    title: "github",
    path: "https://github.com/herihermansyah",
    icon: FaSquareGithub,
  },
  {
    id: 2,
    title: "email",
    path: "mailto:heryhermansyah563@gmail.com",
    icon: IoMail,
  },
  {
    id: 3,
    title: "whatsapp",
    path: "https://wa.me/6282337185381",
    icon: FaSquareWhatsapp,
  },
  {id: 4, title: "X", path: "https://x.com/petanikeju", icon: FaSquareXTwitter},
  {
    id: 5,
    title: "linkedin",
    path: "https://www.linkedin.com/in/heri-hermansyah/",
    icon: FaLinkedinIn,
  },
  {
    id: 6,
    title: "tiktok",
    path: "https://www.tiktok.com/@hertech.store",
    icon: AiFillTikTok,
  },
];
