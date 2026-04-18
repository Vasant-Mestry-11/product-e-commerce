import classes from "../styles/wheretobuy.module.scss";

const WhereToBuy = () => {
  return (
    <section className={`container ${classes.whereToBuy}`}>
      <p className={classes.leftHeading}>Where to buy</p>
      <div className={classes.buttons}>
        <button className={classes.blinkit}>Blinkit</button>
        <button className={classes.zepto}>Zepto</button>
        <button className={classes.instamart}>Instamart</button>
        <button className={classes.bigbasket}>BigBasket</button>
      </div>
      <p className={classes.rightHeading}>
        + 25,000 retail stores across Mumbai
      </p>
    </section>
  );
};

export default WhereToBuy;
