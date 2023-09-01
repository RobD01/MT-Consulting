import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import CommunityGrid from "../components/CommunityGrid";
import InfoToggle from "../components/InfoToggle";
import Form from "react-bootstrap/Form";
import handleSubmit from "../components/FormSubmit/community";

const Community = ({ data }) => {
  const messageBoard = (
    <>
      <CommunityGrid list={data} />
    </>
  );

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
          name="Title"
          className="m-2"
          type="text"
          placeholder="Post Title"
        />
        <Form.Control
          name="Message"
          className="m-2"
          type="text"
          placeholder="Post Message"
        />
        <Form.Control
          name="Tags"
          className="m-2"
          type="text"
          placeholder="Post Tags"
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
      <h2 className="text-center">Community</h2>

      <p>
        We encourage the open discussion so that we can learn from each other,
        and share ideas. <br />
        This is a simple forum app with no user log in, and no reply function.
        <br />
        After submitting the form, refresh the page to display the new message
      </p>

      {/* Message Data */}
      <div>
        <InfoToggle section="Message Board" content={messageBoard} />
      </div>

      {/* Google Form */}
      <div>
        <InfoToggle section="Input Form" content={inputForm} />
      </div>
    </div>
  );
};

export default Community;
