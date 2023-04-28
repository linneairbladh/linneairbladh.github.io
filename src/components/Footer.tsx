import { useNavigate } from "react-router-dom";
import { emailAddress } from "../config/contactInfo";
import { Page } from "../config/pages";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 h-30 w-full bg-color-primary flex flex-row justify-center items-center gap-x-4 text-sm text-white">
      <span>© Kongagården Rehab, 2023.</span>
      <span>|</span>

      <a className="hover:underline" href={"mailto:" + emailAddress}>
        {emailAddress}
      </a>
    </div>
  );
};

export default Footer;
