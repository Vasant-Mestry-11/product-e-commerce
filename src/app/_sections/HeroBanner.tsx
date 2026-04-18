import Image from "next/image";
import classes from "../styles/hero.module.scss";
import HeroBG from "../_assets/hero-bg.webp";
import Hero from "../_assets/hero.webp";
import Button from "../_components/Button";

const HeroBanner = () => {
  return (
    <section className={`container ${classes.heroBanner}`}>
      <Image
        src={HeroBG}
        alt="Hero Background"
        fill
        priority
        placeholder="blur"
      />
      <div className={classes.overlay} aria-hidden="true"></div>

      <div className={classes.left}>
        <p className={classes.topDescription}>
          From Mumbai Kitchens Since 2004
        </p>
        <h3 className={classes.main_heading}>Born in Mumbai.</h3>
        <h3 className={classes.sub_heading}>Build for Kitchen.</h3>
        <p className={classes.description}>
          Trusted by 10lakh+ families across Maharshtra. #1 on Blinkit. <br />
          At you door in 10 minutes.
        </p>

        <div className={classes.cta}>
          <Button type="primary" className={`${classes.primaryCta}`}>
            Order Now - 10 Min Delivery
          </Button>
          <Button type="secondary" className={classes.secondaryCta}>
            View Products
          </Button>
        </div>
      </div>
      <div className={classes.right}>
        <Image
          src={Hero}
          className={classes.heroImage}
          alt="Hero Image"
          height={300}
          width={250}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
