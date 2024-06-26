import bolderDesktop1 from "../public/img/bolder-website/desktop-1.png";
import bolderDesktop2 from "../public/img/bolder-website/desktop-2.png";
import bolderDesktop3 from "../public/img/bolder-website/desktop-3.png";
import bolderDesktop4 from "../public/img/bolder-website/desktop-4.png";
import bolderMobile1 from "../public/img/bolder-website/mobile-1.png";
import bolderMobile2 from "../public/img/bolder-website/mobile-2.png";

import bolderDashboardDesktop1 from "../public/img/bolder-dashboard/desktop-1.png";
import bolderDashboardDesktop2 from "../public/img/bolder-dashboard/desktop-2.png";
import bolderDashboardDesktop3 from "../public/img/bolder-dashboard/desktop-3.png";
import bolderDashboardDesktop4 from "../public/img/bolder-dashboard/desktop-4.png";
import bolderDashboardDesktop5 from "../public/img/bolder-dashboard/desktop-5.png";
import bolderDashboardDesktop6 from "../public/img/bolder-dashboard/desktop-6.png";

import physiocareLandingDesktop1 from "../public/img/physiocare/desktop-1.png";
import physiocareLandingDesktop2 from "../public/img/physiocare/desktop-2.png";
import physiocareLandingDesktop3 from "../public/img/physiocare/desktop-3.png";
import physiocareLandingDesktop4 from "../public/img/physiocare/desktop-4.png";
import physiocareLandingDesktop5 from "../public/img/physiocare/desktop-5.png";
import physiocareLandingDesktop6 from "../public/img/physiocare/desktop-6.png";

import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiNodejs } from "react-icons/di";

// icons and tooltip
const nextjs = {
  text: "NextJs",
  icon: TbBrandNextjs,
};
const react = {
  text: "React",
  icon: FaReact,
};
const bootstrap = {
  text: "Bootstrap",
  icon: FaBootstrap,
};
const tailwind = {
  text: "TailwindCSS",
  icon: SiTailwindcss,
};
const daisyui = {
  text: "DaisyUI",
  icon: SiDaisyui,
};
const nodejs = {
  text: "NodeJs",
  icon: DiNodejs,
};
const mongodb = {
  text: "MongoDB",
  icon: DiMongodb,
};
//--------

export const BOLDER_IMAGES = [
  bolderDesktop1,
  bolderDesktop2,
  bolderDesktop3,
  bolderDesktop4,
  bolderMobile1,
  bolderMobile2,
];
export const BOLDER_ICONS = [nextjs, bootstrap, nodejs, mongodb];

export const BOLDER_DASHBOARD_IMAGES = [
  bolderDashboardDesktop1,
  bolderDashboardDesktop2,
  bolderDashboardDesktop3,
  bolderDashboardDesktop4,
  bolderDashboardDesktop5,
  bolderDashboardDesktop6,
];
export const BOLDER_DASHBOARD_ICONS = [
  nextjs,
  tailwind,
  daisyui,
  nodejs,
  mongodb,
];

export const PHYSIOCARE_LANDING_IMAGES = [
  physiocareLandingDesktop1,
  physiocareLandingDesktop2,
  physiocareLandingDesktop3,
  physiocareLandingDesktop4,
  physiocareLandingDesktop5,
  physiocareLandingDesktop6,
];
export const PHYSIOCARE_LANDING_ICONS = [nextjs, tailwind, nodejs, mongodb];

export const LINKEDIN_URL = "https://www.linkedin.com/in/maximilianopalomeque";
export const GITHUB_URL = "https://github.com/maximilianopalomeque";
