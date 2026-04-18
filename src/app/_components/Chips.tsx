import Image, { StaticImageData } from "next/image";
import classes from "../styles/chips.module.scss";
interface ChipsProps {
  id: number;
  name: string;
  icon: StaticImageData;
}
const Chips = ({ id, name, icon }: ChipsProps) => {
  return (
    <div className={classes.chip} key={id}>
      <Image
        src={icon}
        alt={name}
        width={20}
        height={20}
        className={classes.icon}
      />
      <p className={classes.trustName}>{name}</p>
    </div>
  );
};

export default Chips;
