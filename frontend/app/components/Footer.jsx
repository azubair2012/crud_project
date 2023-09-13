import Link from "next/link";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FiDribbble } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" text-white border-double border-t-4 border-[#04FFF7] w-fit mt-auto text-center">
      <div className=" text-3xl pt-2">
        Building your online presence, one pixel at a time
      </div>

      <div className="flex justify-evenly p-4 gap-[64px]">
        <p>
          Built with 🤍 by{" "}
          <Link href="https://studiozubair.com/">Studio Zubair</Link>
        </p>
        {/* btn */}
        <div className="flex justify-center gap-4">
          <Link href="https://www.facebook.com/azubair108" target="_blank">
            <BsFacebook color="white" />
          </Link>
          <Link href="https://www.instagram.com/the_web_nomad/" target="_blank">
            <ImInstagram color="white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abu-zubair-a7482b1b7/"
            target="_blank"
          >
            <BsLinkedin color="white" />
          </Link>
          <Link href="https://www.instagram.com/the_web_nomad/" target="_blank">
            <FiDribbble color="white" />
          </Link>
          <Link href="https://wa.me/8801776909659" target="_blank">
            <BsWhatsapp color="white" />
          </Link>
        </div>
        <p className="">
          &copy; <span>{currentYear}</span> All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
