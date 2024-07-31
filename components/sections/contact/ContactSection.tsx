import { RefObject } from "react";
import ContactForm from "./ContactForm";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactSection = ({
  contactRef,
}: {
  contactRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2"
      ref={contactRef}
    >
      <ContactForm />
      <div className="flex flex-row gap-3">
        <a href="https://github.com/bertonceljmark" target="_blank">
          <FaGithub
            href="https://github.com/bertonceljmark"
            size={32}
            className="cursor-pointer text-white hover:text-zinc-400"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-bertoncelj-009b19248/"
          target="_blank"
        >
          <FaLinkedin
            href="https://www.linkedin.com/in/mark-bertoncelj-009b19248/"
            size={32}
            className="cursor-pointer text-white hover:text-zinc-400"
          />
        </a>
        <a href="https://www.instagram.com/berti_x_/" target="_blank">
          <FaInstagram
            size={32}
            className="cursor-pointer text-white hover:text-zinc-400"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
