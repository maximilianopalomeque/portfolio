import LayoutContainer from "../LayoutContainer";
import handshakeImg from "../../../public/img/handshake.png";

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import AOSComponent from "../AOS";

export default function Contact() {
  return (
    <AOSComponent>
      <div className="py-20" id="contact">
        <LayoutContainer>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent flex justify-center items-center p-3">
              <img src={handshakeImg.src} alt="handshake icon" />
            </div>
            <h2 className="text-center text-4xl font-bold max-w-md mt-4">
              Contame sobre tu proximo proyecto!
            </h2>
            <div className="flex gap-2 mt-6">
              <a href="mailto:maximilianopalomeque@gmail.com">
                <button className="btn btn-outline">
                  <MdOutlineEmail /> Email
                </button>
              </a>
              <a href="https://wa.me/542215739485" target="_blank">
                <button className="btn btn-accent">
                  <FaWhatsapp />
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </LayoutContainer>
      </div>
    </AOSComponent>
  );
}
