interface ButtonProps {
  type: "primary" | "secondary";
  onClick?: () => void;
  outlined?: boolean;
  children: React.ReactNode;
  className?: string;
}

const BUTTON_TYPE = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

const getClassname = (
  type: "primary" | "secondary",
  outlined: boolean = false,
) => {
  let classname: string = "";

  if (outlined) {
    classname += "outlined";
  }

  classname = classname + BUTTON_TYPE[type];

  return classname;
};

const Button = ({
  type,
  onClick,
  outlined,
  children,
  className,
}: ButtonProps) => {
  const classnames = getClassname(type, outlined);
  return (
    <button className={`${classnames} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
