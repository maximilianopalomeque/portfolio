"use client";

import LayoutContainer from "../LayoutContainer";
import toast from "react-hot-toast";

import { LINKEDIN_URL } from "@/contants";

export default function Footer() {
  function copyToClipboard(text: string, type: string) {
    toast.success(`${type} copied to clipboard!`);
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="bg-accent">
      <LayoutContainer>
        <div className="py-4">
          <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
            <div className="lg:tooltip lg:tooltip-primary" data-tip="Copy">
              <h2
                className="xl:hover:text-secondary xl:hover:cursor-pointer xl:ease-in-out xl:transition-all"
                onClick={() =>
                  copyToClipboard("maximilianopalomeque@gmail.com", "Email")
                }
              >
                maximilianopalomeque@gmail.com
              </h2>
            </div>
            <span className="hidden md:block">/</span>

            <div className="lg:tooltip lg:tooltip-primary" data-tip="Copy">
              <h2
                className="xl:hover:text-secondary xl:hover:cursor-pointer xl:ease-in-out xl:transition-all"
                onClick={() => copyToClipboard("2215739485", "Phone number")}
              >
                221 573 9485
              </h2>
            </div>

            <span className="hidden md:block">/</span>

            <div className="lg:tooltip lg:tooltip-primary" data-tip="Visit">
              <a
                href={LINKEDIN_URL}
                className="xl:hover:text-secondary xl:hover:cursor-pointer xl:ease-in-out xl:transition-all"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
}
