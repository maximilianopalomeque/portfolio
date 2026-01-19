"use client";

import LayoutContainer from "../LayoutContainer";
import toast from "react-hot-toast";

import { LINKEDIN_URL, GITHUB_URL } from "@/constants";
import { useTranslations } from "next-intl";

export default function Footer() {
  const translation = useTranslations("landing");
  const copyText = translation("footer.copy");
  const visitText = translation("footer.visit");
  const copiedText = translation("footer.copied-clipboard");

  function copyToClipboard(text: string, type: string) {
    toast.success(`${type} ${copiedText}`);
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="bg-accent">
      <LayoutContainer>
        <div className="py-4">
          <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
            <div className="lg:tooltip lg:tooltip-primary" data-tip={copyText}>
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

            <div className="lg:tooltip lg:tooltip-primary" data-tip={visitText}>
              <a
                href={LINKEDIN_URL}
                className="xl:hover:text-secondary xl:hover:cursor-pointer xl:ease-in-out xl:transition-all"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>

            <span className="hidden md:block">/</span>

            <div className="lg:tooltip lg:tooltip-primary" data-tip={visitText}>
              <a
                href={GITHUB_URL}
                className="xl:hover:text-secondary xl:hover:cursor-pointer xl:ease-in-out xl:transition-all"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
}
