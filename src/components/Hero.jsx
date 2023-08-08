  import styles from "../style";
  import Typical from 'react-typical';
  import Lottie from 'lottie-react';
  import animationData from '../assets/animation_home.json';
  import Button from "./Button";


  const Hero = () => {
    return (
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>  
          
          <div className="flex flex-row justify-between items-center w-full">

            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Maintenance <br className="sm:block hidden" />{" "}

              <span className="text-gradient"> Made </span>{" "}

            </h1>
            
          </div>
        
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">

            <Typical 
              loop={Infinity} 
              wrapper="span"
              steps={['Easy.',3000,'Reliable.',3000,'Secured.',3000]}>
            </Typical>

          </h1>

          <div>

              <Button styles={`mt-10`} />

          </div>

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            
            Apartment Maintenance via WhatsApp.

          </p>
          
          <div style={{ height: "30px" }}></div>
    
        </div>
        
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative items-center justify-center flex-col`}>
    
          <Lottie animationData={animationData} className="mb-10"/>

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[90%] h-[90%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
          
        </div>
        
      </section>
    );
  };

  export default Hero;
