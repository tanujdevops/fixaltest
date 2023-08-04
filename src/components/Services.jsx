import styles, { layout } from "../style";
import Button from "./Button";
import Lottie from 'lottie-react';
import animation from '../assets/animation_services.json';

const Services = () => (
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Let's Experience <br className="sm:block hidden" /> Our Services
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      At FIXAL, we go beyond constructing with concrete and steel; 
      we forge enduring relationships. 
      Our partnership approach is at the heart of every project we manage, 
      be it major developments or remedial services. From concept to completion, 
      we assist our clients and take pride in offering comprehensive construction-based solutions.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <Lottie animationData={animation} className="w-[600px] h-[600px] relative z-[5]" />
    </div>
  </section>
);

export default Services;
