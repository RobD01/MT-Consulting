import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import CommunityGrid from "../components/CommunityGrid";
import InfoToggle from "../components/InfoToggle";
import axios from "axios";
import queryString from "query-string";
import cors from "cors";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// To connect Google Forms into my own form?
// https://onlyoneaman.medium.com/link-your-form-with-google-form-for-responses-7a408dafb8f8

const Community = ({ data }) => {
  const [state, setState] = useState();

  const messageBoard = (
    <>
      <CommunityGrid list={data} />
    </>
  );

  // const refresh = () => {
  //   window.location.reload(false);
  // };

  // const inputForm = (
  //   <>
  //     <iframe
  //       src="https://docs.google.com/forms/d/e/1FAIpQLScRp7IM4dYw72UIdz2LMdMDBMO69mhMi9OaaIsfgpz75OdWSA/viewform?embedded=true"
  //       width="100%"
  //       height="1150"
  //       frameborder="0"
  //       marginheight="0"
  //       marginwidth="0"
  //     >
  //       Loading…
  //     </iframe>
  //     <button onClick={refresh} className="button-dark">
  //       Click Here
  //     </button>
  //     <p>
  //       Click on the button above after submitting, to refresh the page and
  //       update with your new post
  //     </p>
  //   </>
  // );

  const myRequest = (url) => {
    let response;
    try {
      response = axios.post(url, null, null);
    } catch (e) {
      response = e;
    }
    console.log(response);
  };

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const data = {
      ...state,
    };
    const id = "11XMF4FDbMRZOgMSIuvcCmDHL3P6NOt0pBNF8kFmCNMY"; //YOUR FORM ID
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/" + id + "/formResponse";
    const q = queryString.stringifyUrl({
      url: formUrl,
      query: data,
    });
    myRequest(q);
    e.preventDefault();
  };

  const inputForm = (
    <>
      <Form>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Name"
            name="entry.1886776765"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Post Title"
            name="entry.210904117"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Post Message"
            name="entry.1367927923"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Post Tags"
            name="entry.828154271"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
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
        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScRp7IM4dYw72UIdz2LMdMDBMO69mhMi9OaaIsfgpz75OdWSA/viewform?embedded=true"
          width="700"
          height="520"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe> */}
      </div>
    </div>
  );
};

export default Community;
