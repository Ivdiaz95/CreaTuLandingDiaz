import CartWidget from "./cartwidget.jsx";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>GamerZone</h1>

      <ul style={styles.navLinks}>
        <li>
          <a href="#" style={styles.link}>
            Productos
          </a>
        </li>
        <li>
          <a href="#" style={styles.link}>
            Auriculares
          </a>
        </li>
        <li>
          <a href="#" style={styles.link}>
            Contacto
          </a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#222",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
