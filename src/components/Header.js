import propTypes from "prop-types";
import Button from "./Button";

function Header({ title }) {
  const onClick = (e) => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
