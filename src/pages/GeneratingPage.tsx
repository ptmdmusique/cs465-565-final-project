import { DnDClass, DnDClassStats, mapperClassList } from "data/model/dndModel";
import React, { useEffect, Fragment } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useStoreActions, useStoreState } from "stores";

interface FormField {
  classToGenerate: DnDClass;
}
export const GeneratingPage = () => {
  const { register, handleSubmit } = useForm<FormField>();

  const { generateDndClass, generateClasses } = useStoreActions((actions) => actions.api);
  const classStat = useStoreState((state) => state.api.classStat);
  const classes = useStoreState((state) => state.api.classes);

  useEffect(() => {
    generateClasses();
  }, [generateClasses]);

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
            {classes != null
                  ? <Fragment>
                    <option key={"dndClass" + 0} className="text-capitalize" value={'class'}>
                      {"Random"}
                    </option>
                    {classes && classes.map((dndClass: any, index: number) => (
                      <option key={"dndClass" + (index + 1).toString()} className="text-capitalize" value={dndClass.index}>
                        {dndClass.name}
                      </option>
                    ))}
                  </Fragment>
                  : <option key={'loading'} className="text-capitalize" value={'loading'}>
                    {"Loading..."}
                  </option>
                }
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
