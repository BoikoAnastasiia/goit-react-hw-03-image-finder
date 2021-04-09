const Button = () => (
  <button
    type="button"
    className="Button"
    onClick={window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })}
  >
    Load more
  </button>
);

export default Button;
