import CircleChecmark from "../_assets/circle checkmark.svg";
import ShieldOutlined from "../_assets/shield outlined.svg";
import PaperStack from "../_assets/paper stack.svg";
import CheckInCircle from "../_assets/check inside circle.svg";
import StarOutlined from "../_assets/star outlined 3.svg";
import Chips from "../_components/Chips";
import classes from "../styles/trusts.module.scss";

const CHIPS = [
  {
    id: 1,
    name: "Stone-Ground Chakki",
    icon: CircleChecmark,
  },
  {
    id: 2,
    name: "FSSC 22000 Certified",
    icon: ShieldOutlined,
  },
  {
    id: 3,
    name: "MP Sharbati Wheat",
    icon: PaperStack,
  },
  {
    id: 4,
    name: "Zero Preservatives",
    icon: CheckInCircle,
  },
  {
    id: 5,
    name: "4.5+ Rating on Blinkit",
    icon: StarOutlined,
  },
];

const Trusts = () => {
  return (
    <section className={`container ${classes.trusts}`}>
      {CHIPS.map(({ id, name, icon }) => (
        <Chips key={id} id={id} name={name} icon={icon} />
      ))}
    </section>
  );
};

export default Trusts;
