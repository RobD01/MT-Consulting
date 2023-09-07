import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "../style/main.css";

const InfoToggle = (props) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const buttonLabel = open ? `Hide ${props.section}` : `View ${props.section}`;

  return (
    <>
      {/* Toggle Button */}
      <div className="text-center m-4">
        <button
          onClick={handleToggle}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="button-dark"
        >
          {buttonLabel}
        </button>
      </div>

      {/* Info Box */}
      <Collapse in={open}>
        <div>{props.content}</div>
      </Collapse>
    </>
  );
};

export default InfoToggle;
