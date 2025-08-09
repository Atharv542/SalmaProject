import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { PiYoutubeLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-3">
          <a
            href="https://www.instagram.com/theinnerbloomjourney/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl transition-transform transform hover:scale-110 "
          >
            <FaInstagram className="text-pink-500" />
          </a>

          <a
            href="https://www.facebook.com/share/1AwdKwVSov/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl transition-transform transform hover:scale-110"
          >
            <FaFacebook className="text-blue-500" />
          </a>

          <a
            href="https://www.linkedin.com/in/salma-nisha-657795117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="text-2xl transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-blue-400" />
          </a>
          <a
            href="https://www.youtube.com/@salmanisha2025"
            target="_blank"
            rel="noreferrer"
            className=" -mt-0.5 transition-transform transform hover:scale-110"
          >
            <img src="icons8-youtube-48.png" className="w-9 h-9 -mt-1"/>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Coaching with Salma – All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;