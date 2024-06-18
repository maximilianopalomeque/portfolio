import LayoutContainer from "../LayoutContainer";
import { useLocale, useTranslations } from "next-intl";

export default function Header() {
  const locale = useLocale();
  const translation = useTranslations("landing");
  const titleDev = translation("header.title-dev");
  const title1 = translation("header.title-1");
  const title2 = translation("header.title-2");
  const title3 = translation("header.title-3");
  const title4 = translation("header.title-4");

  return (
    <LayoutContainer>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-gray-600 mb-1 text-center text-sm scale-in-ver-bottom">
          {titleDev}
        </h2>
        <h2 className={`text-center text-5xl xl:text-9xl`}>
          <div className="scale-in-ver-bottom">{title1}</div>
          <div className="font-semibold scale-in-ver-bottom">
            {title2}{" "}
            <span
              className={`${
                locale === "en" ? "hidden" : "visible"
              } font-normal`}
            >
              {title3}
            </span>
          </div>
          <div className="font-semibold scale-in-ver-bottom">
            <span
              className={`${
                locale === "es" ? "hidden" : "visible"
              } font-normal`}
            >
              {title3}
            </span>{" "}
            {title4}
          </div>
        </h2>
        <div className="scroll-indicator absolute bottom-5">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </LayoutContainer>
  );
}
