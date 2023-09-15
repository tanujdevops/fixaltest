import styles, { layout } from "../style";
import Lottie from 'lottie-react';
import animation from '../assets/animation_how.json';

const HowWeWork = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Lottie animationData={animation} className="w-[500px] h-[500px] relative z-[5]" />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Let's Experience <br className="sm:block hidden" /> How It Work
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Fixal offers apartment maintenance services through WhatsApp for quick and easy booking. 
      Clients can simply message us their maintenance needs, 
      and we'll promptly respond with available slots and service options. 
      Our convenient WhatsApp platform ensures hassle-free communication and efficient scheduling, 
      making apartment maintenance a breeze.
      </p>

    </div>
  </section>
);

export default HowWeWork;
