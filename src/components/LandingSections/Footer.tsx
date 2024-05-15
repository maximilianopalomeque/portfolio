import LayoutContainer from "../LayoutContainer";

import { LINKEDIN_URL } from "@/contants";

export default function Footer() {
  return (
    <div className="bg-accent">
      <LayoutContainer>
        <div className="py-4">
          <div className="flex justify-between">
            <div className="flex flex-col text-sm xl:text-md">
              <h2 className="xl:hover:text-secondary xl:hover:cursor-pointer">
                maximilianopalomeque@gmail.com
              </h2>
              <h2 className="xl:hover:text-secondary xl:hover:cursor-pointer">
                221 573 9485
              </h2>
            </div>
            <div className="flex gap-2 text-sm xl:text-md">
              <a
                href={LINKEDIN_URL}
                className="xl:hover:text-secondary xl:hover:cursor-pointer"
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
