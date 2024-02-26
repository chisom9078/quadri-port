import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn,FaInstagram,FaTwitter } from "react-icons/fa";
import { SiFigma, SiAdobeillustrator, SiAdobephotoshop, SiHtml5, SiCss3} from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["UI/UX Designer.", "Graphics Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className=" text-sky-500 capitalize"> QUADRI KAREEM OLANREWAJU</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#0DA5E9" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        Quadri is a product designer who has a great enthusiasm for designing digital products that make things better and touch someone’s life.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://twitter.com/KareemQuadrio?s=09" target="_blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
  </a>
            <a
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEpyNBl9BBRDAAAAY2eIX-gAaRigd91v6BixdI4Ff_PoJVn2w7El6DxCs2MZOpyBXCkWR0itRD3FwAhXW8rhRXiFjBiJKpJlHlDBeKuUmGLuIyTR3tEyOhgTGNpNVhSiW_t9As=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkareem-quadri-ola%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a
            href="https://www.instagram.com/quatechdesigns/?igsh=M2x5d3doazYycWQ2"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaInstagram/>
            </span>
          </a>
            
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
           
          <span className="bannerIcon">
              <SiAdobeillustrator />
            </span>
            <span className="bannerIcon">
              <SiAdobephotoshop />
</span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
      
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
