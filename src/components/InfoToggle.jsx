import { useState } from "react";
import { Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

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
        <Button
          onClick={handleToggle}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="warning"
        >
          {buttonLabel}
        </Button>
      </div>

      {/* Info Box */}
      <Collapse in={open}>
        <div>{props.content}</div>
      </Collapse>
    </>
  );
};

export default InfoToggle;
