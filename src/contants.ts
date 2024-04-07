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

const BOLDER_IMAGES = [
  bolderDesktop1,
  bolderDesktop2,
  bolderDesktop3,
  bolderDesktop4,
  bolderMobile1,
  bolderMobile2,
];

const BOLDER_DASHBOARD_IMAGES = [
  bolderDashboardDesktop1,
  bolderDashboardDesktop2,
  bolderDashboardDesktop3,
  bolderDashboardDesktop4,
  bolderDashboardDesktop5,
  bolderDashboardDesktop6,
];

const PHYSIOCARE_LANDING_IMAGES = [
  physiocareLandingDesktop1,
  physiocareLandingDesktop2,
  physiocareLandingDesktop3,
  physiocareLandingDesktop4,
  physiocareLandingDesktop5,
  physiocareLandingDesktop6,
];

export const PROJECTS = [
  {
    id: 1,
    title: "The Bolder",
    description:
      "A brand-influencer matching app. This solution includes a user-friendly landing page, login functionality, and a seamless registration process.",
    images: BOLDER_IMAGES,
  },
  {
    id: 2,
    title: "The Bolder Dashboard",
    description:
      "Dashboard that allow users to upload videos and display it in their sites.",
    images: BOLDER_DASHBOARD_IMAGES,
  },
  {
    id: 3,
    title: "Physiocare Landing Page",
    description:
      "Landing pages dynamically generated with physiotherapy content managed through the Physiocare Admin interface, ensuring up-to-date and user-friendly experiences.",
    images: PHYSIOCARE_LANDING_IMAGES,
  },
];
