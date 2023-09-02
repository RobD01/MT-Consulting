import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Form from "react-bootstrap/Form";
import handleSubmit from "../components/FormSubmit/message";

const Message = () => {
  const inputForm = (
    <>
      <form id="form">
        <Form.Control
          name="Name"
          className="m-2"
          type="text"
          placeholder="Name"
        />
        <Form.Control
          name="Company"
          className="m-2"
          type="text"
          placeholder="Company"
        />
        <Form.Control
          name="Email"
          className="m-2"
          type="email"
          placeholder="Email"
        />
        <Form.Control
          name="Phone"
          className="m-2"
          type="text"
          placeholder="Phone"
        />
        <Form.Control
          name="Message"
          className="m-2"
          type="text"
          as="textarea"
          rows={3}
          placeholder="Message"
        />

        <button
          className="button-dark m-2"
          type="submit"
          id="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );

  return (
    <div className="container text-center">
      <h2 className="text-center">Inquiries / Send a Message</h2>
      <p>
        Please complete form below to send us a message. We will respond to you
        shortly
      </p>

      {inputForm}
    </div>
  );
};

export default Message;
