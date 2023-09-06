import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import CommunityGrid from "../components/CommunityGrid";
import InfoToggle from "../components/InfoToggle";
import Form from "react-bootstrap/Form";
import handleSubmit from "../components/FormSubmit/community";
import SearchBar from "../components/SearchBar";
import _ from "lodash";
import PaginatedItems from "../components/PaginatedItems";

const Community = ({ data }) => {
  // Search Bar

  const [search, setSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleSearchCategory = (selectedOption) => {
    setSearchCategory(selectedOption);
  };

  const filter =
    search.length == 0 || searchCategory.length == 0
      ? data
      : _.filter(data, (item) =>
          item[searchCategory.value].toLowerCase().includes(search)
        );

  const messageBoard = (
    <>
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        searchCategory={searchCategory}
        handleSearchCategory={handleSearchCategory}
      />
      {/* <CommunityGrid list={filter} /> */}
      <PaginatedItems itemsPerPage={5} filter={filter} />
    </>
  );

  const inputForm = (
    <>
      <form id="form" className="form">
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
          as="textarea"
          rows={3}
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
        After submitting the form, the page will refresh to display the new
        message
        <br />
        The top form is a search bar to filter the posts
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
