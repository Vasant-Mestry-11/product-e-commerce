import Image, { StaticImageData } from "next/image";

interface ChipsProps {
  id: number;
  name: string;
  icon: StaticImageData;
}
const Chips = ({ id, name, icon }: ChipsProps) => {
  return (
    <div key={id}>
      {/* {icon} */}
      <Image src={icon} alt={name} width={20} height={20} />
      <p>{name}</p>
    </div>
  );
};

export default Chips;
