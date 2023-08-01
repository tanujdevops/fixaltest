import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Typical from 'react-typical';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Maintenance <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Made </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
      
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          <Typical 
            loop={Infinity} steps={['Easy.',2000,'Flexible.',2000,'Secured.',2000]}>
          </Typical>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our company is dedicated to making your apartment a comfortable and well-maintained home that you can be proud of.
        </p>
        
        <div style={{ height: "30px" }}></div>
  
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/*<img src={robot} alt="billing" className="w-[400px] h-[400px] relative z-[5]" />*/}
        <Lottie animationData={animationData} className="w-[450px] h-[450px] relative z-[5]"/>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[90%] h-[90%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
