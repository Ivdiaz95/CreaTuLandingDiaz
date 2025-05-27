const CartWidget = () => {
  return (
    <div style={styles.cart}>
      🛒
      <span style={styles.counter}>1000</span>{" "}
      {/* Este número puede venir luego de un estado */}
    </div>
  );
};

const styles = {
  cart: {
    position: "relative",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  counter: {
    position: "absolute",
    top: "-8px",
    right: "-10px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.8rem",
  },
};

export default CartWidget;
