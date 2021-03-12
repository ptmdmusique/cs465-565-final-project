import React from "react";
import { DnDClass, mapperClassList } from "data/model/dndModel";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useStoreActions, useStoreState } from "stores";

interface FormField {
  classToEdit: DnDClass;
}

export const EditingPage = () => {

  const { register, handleSubmit } = useForm<FormField>();

  //const { editDndClass } = useStoreActions((actions) => actions.api);
  const classStat = useStoreState((state) => state.api.classStat);

  //const editOnSubmit = handleSubmit((data) => {
  //  editDndClass(data.classToEdit);
  //});

  return (
    //<div>Page to edit generated character</div>

    <Container className="mt-4">
    <h4>Character Editing</h4>

    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Choose a character to edit</Form.Label>
        <Form.Control
          as="select"
          className="text-capitalize"
          name="classToEdit"
          ref={register}
        >

        {mapperClassList.map((DndClass, index) => (
          //  <option key={index} className="text-capitalize" value={DndClass}>
          //    {DndClass === "Bard" ? "Random" : DndClass}
          //  </option>
          'pickme'
          ))}
          
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Edit
      </Button>
    </Form>

    {classStat && (
      <ListGroup className="mt-4">
        {Object.entries(classStat).map(([key, value], index) => (
          <ListGroup.Item key={index}>
            <span className="text-capitalize">{`${key}: `}</span>
            <span>{JSON.stringify(value)}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}


  <Row>
  <Col sm={3} className="my-2">
      <Form>
        <Card className="p-4">
          <h5>NPC Generator</h5>
          <a
            type="button"
            href={`/generate`}
            className="mt-2"
          >
            Generate
          </a>
        </Card>
      </Form>
  </Col>
  </Row>
  </Container>
  );
};
