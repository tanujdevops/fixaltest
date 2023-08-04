import styles, { layout } from "../style";
import Button from "./Button";
import Lottie from 'lottie-react';
import animation from '../assets/animation_services.json';

const Services = () => (
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Services
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At FIXAL, we offer a wide range of services to meet your construction and maintenance needs. Our services include:
      </p>

      <ul className={`${styles.paragraph} mt-5 list-disc pl-8`}>
        <li>Waterproofing</li>
        <li>Electrical services</li>
        <li>Plumbing solutions</li>
        <li>Painting and refinishing</li>
        <li>Tile fitting and installation</li>
        <li>Carpentry and woodwork</li>
        <li>Metal fabrication</li>
        <li>Masonry and bricklaying</li>
        <li>Aluminum window installation</li>
        <li>All construction services</li>
      </ul>

      <Button styles={`mt-10`} buttonText="Get a Quote" />
    </div>

    <div className={layout.sectionImg}>
      <Lottie animationData={animation} className="w-[600px] h-[600px] relative z-[5]" />
    </div>
  </section>
);

export default Services;
