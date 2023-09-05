import Form from "react-bootstrap/Form";
import Select from "react-select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const SearchBar = (props) => {
  const options = [
    { value: "Name", label: "Name" },
    { value: "Title", label: "Title" },
    { value: "Message", label: "Message" },
    { value: "Tags", label: "Tags" },
  ];

  return (
    <div className="form">
      <Container fluid="md">
        <Row>
          <Col xs={12} md={8}>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search and filter"
                  value={props.search}
                  onChange={props.handleSearch}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} md={4}>
            <Select
              options={options}
              onChange={props.handleSearchCategory}
              value={props.searchCategory}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
