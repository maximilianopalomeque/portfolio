import LayoutContainer from "../LayoutContainer";
import handshakeImg from "../../../public/img/handshake.png";

import { MdOutlineEmail } from "react-icons/md";
import AOSComponent from "../AOS";
import { useTranslations } from "next-intl";

export default function Contact() {
  const translation = useTranslations("landing");
  const contactTitle = translation("contact-text");

  return (
    <AOSComponent>
      <div className="pb-12" id="contact">
        <LayoutContainer>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent flex justify-center items-center p-3">
              <img src={handshakeImg.src} alt="handshake icon" />
            </div>
            <h2 className="text-center text-4xl font-bold max-w-sm mt-4">
              {contactTitle}
            </h2>
            <div className="flex gap-2 mt-6">
              <a href="mailto:maximilianopalomeque@gmail.com">
                <button className="btn btn-accent">
                  <MdOutlineEmail /> Email
                </button>
              </a>
            </div>
          </div>
        </LayoutContainer>
      </div>
    </AOSComponent>
  );
}
