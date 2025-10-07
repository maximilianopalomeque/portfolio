"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const translation = useTranslations("landing");
  const servicesText = translation("navbar.navigation.services");
  const jobsText = translation("navbar.navigation.jobs");
  const contactText = translation("navbar.navigation.contact");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToIdAndCenter(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const elementHeight = element.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight;
      const offsetPosition =
        elementPosition - (viewportHeight - elementHeight) / 2;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  function scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 80; // 80px offset for navbar

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  const TransparentHeaderElements = () => {
    return (
      <>
        <div className="mx-auto px-2 xl:px-0 flex items-center justify-between max-w-[1280px] 2xl:max-w-[1520px] w-full py-1">
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <h2
                className="text-xl font-bold btn btn-ghost xl:hover:bg-accent"
                onClick={scrollToTop}
              >
                MP
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center xl:gap-1">
              <button
                className="btn btn-ghost btn-sm xl:hover:bg-accent"
                onClick={() => scrollToIdAndCenter("services")}
              >
                {servicesText}
              </button>
              <button
                className="btn btn-ghost btn-sm xl:hover:bg-accent"
                onClick={() => scrollToId("experience")}
              >
                {jobsText}
              </button>
              <button
                className="btn btn-ghost btn-sm xl:hover:bg-accent"
                onClick={() => scrollToId("contact")}
              >
                {contactText}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </>
    );
  };

  const BlurredHeaderElements = () => {
    return (
      <>
        <div className="mx-auto px-2 xl:px-0 flex items-center justify-between max-w-[1280px] 2xl:max-w-[1520px] w-full">
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <h2
                className="text-xl font-bold btn btn-ghost xl:hover:bg-accent"
                onClick={scrollToTop}
              >
                MP
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center xl:gap-1">
              <button
                className="btn btn-ghost btn-sm xl:hover:bg-accent"
                onClick={() => scrollToIdAndCenter("services")}
              >
                {servicesText}
              </button>
              <button
                className="btn btn-ghost btn-sm xl:hover:bg-accent"
                onClick={() => scrollToId("experience")}
              >
                {jobsText}
              </button>
              <button
                className="btn btn-ghost btn-sm xl:hover:bg-accent"
                onClick={() => scrollToId("contact")}
              >
                {contactText}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all ease-in-out navbar ${
        isScrolled
          ? "bg-white bg-opacity-60 bg-clip-padding py-3 backdrop-blur-xl backdrop-filter md:py-2"
          : "bg-transparent py-4 md:py-7"
      }`}
    >
      {!isScrolled && <TransparentHeaderElements />}
      {isScrolled && <BlurredHeaderElements />}
    </header>
  );
}
