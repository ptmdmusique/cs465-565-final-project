import { Nav, Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
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
          <div style={{ backgroundColor: "green", borderRadius: "5px" }}>
              <span className={"feedback"}>Feedback</span>
          </div>
        </Col>
        <Col sm={4} className="my-2" />
      </Row>

    <Row>
        <Card className="feed-4">
          <Form onSubmit={onSubmit}>
            <h4>Submit feedback/comments here</h4>
          </Form>

        </Card>
    </Row>

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
