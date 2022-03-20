import "./Display.css";

const Display = (props) => {
  return (
    <>
      <div id="formula">{props.formula}</div>
      <div id="display">{props.display}</div>
    </>
  );
};

export default Display;
