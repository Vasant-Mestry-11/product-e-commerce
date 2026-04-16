import Link from "next/link";
import classes from "../styles/navbar.module.scss";

interface NavLinks {
  id: number;
  name: string;
  href: string;
}

const NAV_LINKS: Array<NavLinks> = [
  { id: 1, name: "Home", href: "" },
  { id: 2, name: "Products", href: "products" },
  { id: 3, name: "Recipe", href: "recipe" },
  { id: 4, name: "Our Story", href: "story" },
  { id: 5, name: "Quality", href: "quality" },
  { id: 6, name: "Contact", href: "contact" },
];

const Navbar = () => {
  return (
    <nav className={`${classes.navbar} container`}>
      <div className={classes.logo}>Ecavo</div>
      <div className={classes.navlinks}>
        {NAV_LINKS.map(({ id, name, href }) => (
          <Link key={id} href={href}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
