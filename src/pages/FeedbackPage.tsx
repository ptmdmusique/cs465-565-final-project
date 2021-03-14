import { Nav, Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/feedback.css";

// const FeedbackForm

interface FormField {
  comment: string;
}

export const FeedbackPage = () => {

  const { register, handleSubmit } = useForm<FormField>();

  const onSubmit = handleSubmit((comment) => {
    console.log(comment);
  });


  return (
    <Container className="mt-4">
      <Row>
        <Col sm={4} className="my-2" />
        <Col sm={4} className="my-2">
          <div style={{ backgroundColor: '#90EE90', borderRadius: "5px" }}>
            <Nav.Link as={NavLink} to="/feedback">
              <span className={"feedback"}>Feedback</span>
            </Nav.Link>
          </div>
        </Col>
        <Col sm={4} className="my-2" />
      </Row>

      <Row>
        <Col sm={3} className="my-2" />
        <Col sm={6} className="my-2">
        <Form onSubmit={onSubmit}>
          <Card className="feed-4">
            <p> </p>
            <label>Submit feedback/comments here: </label>
            <div>
              <input name="comment" type="comment" id="comment"></input>
            </div>
            <p> </p>

            <Button variant="primary" type="submit">
                Submit
            </Button>

          </Card>
        </Form>
        </Col>
        <Col sm={3} className="my-2" />
      </Row>

      <span>
        <p> </p>
        <p> </p>
        <p> </p>
      </span>

      <Row>
        <Col sm={12} className="my-2">
          <Image
            src={
              "https://www.enworld.org/attachments/dnd-rick-and-morty-starter-set-jpg.115957/"
            }
            width = "240px"
            height = "360px"
            className={"rick-and-morty-DnD-image"}
          />
        </Col>
      </Row>
    </Container>
  );
};
