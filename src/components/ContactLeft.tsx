import {  FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white"> QUADRI KAREEM OLANREWAJU</h3>
        <p className="text-lg font-normal text-gray-400">
         UI/UX Designer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Quadri is a product designer who has a great enthusiasm for designing digital products that make things better and touch someone’s life.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234(0803817223)</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">quadri.kareem@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {/*<a href="https://www.youtube.com/@reactjsBD" target="_blank">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
  </a>*/}
            <a
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEpyNBl9BBRDAAAAY2eIX-gAaRigd91v6BixdI4Ff_PoJVn2w7El6DxCs2MZOpyBXCkWR0itRD3FwAhXW8rhRXiFjBiJKpJlHlDBeKuUmGLuIyTR3tEyOhgTGNpNVhSiW_t9As=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkareem-quadri-ola%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          
          
          <a href="https://web.facebook.com/karim.twez?_rdc=1&_rdr" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
</a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
