import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav className={styles["menu-container"]}>
        {menuItems.map((e) => (
          <ActiveLink key={e.text} text={e.text} href={e.href} />
          ))}
      </nav>
    </>
  );
};
