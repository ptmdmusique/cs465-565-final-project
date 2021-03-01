import { DnDClass, mapperClassList } from "data/model/dndModel";
import React from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useStoreActions, useStoreState } from "stores";

interface FormField {
  classToGenerate: DnDClass;
}
export const GeneratingPage = () => {
  const { register, handleSubmit } = useForm<FormField>();

  const { generateDndClass } = useStoreActions((actions) => actions.api);
  const classStat = useStoreState((state) => state.api.classStat);

  const onSubmit = handleSubmit((data) => {
    generateDndClass(data.classToGenerate);
  });

  return (
    <Container className="mt-4">
      <h4>Character Generation</h4>

      <Form onSubmit={onSubmit}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose a character class to generate</Form.Label>
          <Form.Control
            as="select"
            className="text-capitalize"
            name="classToGenerate"
            ref={register}
          >
            {mapperClassList.map((dndClass, index) => (
              <option key={index} className="text-capitalize" value={dndClass}>
                {dndClass === "class" ? "random" : dndClass}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Generate
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
    </Container>
  );
};
