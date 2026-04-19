import Image from "next/image";
import { ArrowRightStroke } from "@boxicons/react";
import Rotis from "../_assets/images/lifestyle-rotis-plate.webp";
import Shira from "../_assets/images/lifestyle-halwa-cooking.webp";
import Button from "../_components/Button";
import classes from "../styles/ourkitchen.module.scss";

const FromOurKitchen = () => {
  return (
    <aside className={classes.centerSection}>
      <p className={classes.topHeading}>From our kitchen to yours</p>
      <h2 className={classes.mainHeading}>
        Real Food.
        <br />
        Real Taste.
      </h2>
      <p className={classes.description1}>No preservatives. No added colour.</p>
      <p className={classes.description2}>Just pure ingredients from Mumbai.</p>

      <Button type="primary" className={classes.cta}>
        See our receipe <ArrowRightStroke className={classes.ctaIcon} />
      </Button>
    </aside>
  );
};

const OurKitchen = () => {
  return (
    <section className={classes.kitchen}>
      <Image
        src={Rotis}
        alt="left image"
        width={600}
        height={400}
        loading="lazy"
      />
      <FromOurKitchen />
      <Image
        src={Shira}
        alt="right image"
        width={600}
        height={400}
        loading="lazy"
      />
    </section>
  );
};

export default OurKitchen;
