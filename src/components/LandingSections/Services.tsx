"use client";
import LayoutContainer from "../LayoutContainer";
import ServicesMapper from "../ServicesMapper";
import { useTranslations } from "next-intl";

export default function Services() {
  const translation = useTranslations("landing.services");

  return (
    <div className="bg-accent py-12" id="services">
      <LayoutContainer>
        <h2 className="text-2xl font-bold text-center mb-8">
          {translation("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4">
          <ServicesMapper />
        </div>
      </LayoutContainer>
    </div>
  );
}
