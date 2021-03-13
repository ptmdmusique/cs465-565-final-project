import {
  Alignment,
  alignmentList,
  DnDClass,
  mapperClassList,
} from "data/model/dndModel";
import React, { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useStoreActions, useStoreState } from "stores";

const Text = (props: { children: any; className?: string }) => (
  <p className={`text-left ${props.className}`}>{props.children}</p>
);

const RaceTraitBox = () => {
  const race = useStoreState((state) => state.api.race);

  if (!race) {
    return null;
  }

  return (
    <Col className="my-2 fluid">
      <Card className="p-4">
        <h5>Race Stats ({race.name})</h5>

        <h6 className="text-left">Race Description</h6>
        <Text>{race.age}</Text>
        <Text>{race.size_description}</Text>

        {race.subraces && race.subraces.length > 0 && (
          <>
            <h6 className="text-left">Subraces</h6>
            {race.subraces?.map((entry, index) => (
              <Text key={index}>{entry.name}</Text>
            ))}
          </>
        )}

        {race.traits && race.traits.length > 0 && (
          <>
            <h6 className="text-left">Race Traits</h6>
            {race.traits?.map((entry, index) => (
              <Text key={index}>{entry.name}</Text>
            ))}
          </>
        )}
      </Card>
    </Col>
  );
};

const statToFullTextMap = {
  ac: "Accuracy",
  cha: "Charisma",
  con: "Constitution",
  dex: "Dexterity",
  int: "Intellect",
  str: "Strength",
  wis: "Wisdom",
} as const;
type AbilityStat = keyof typeof statToFullTextMap;
const ClassTraitBox = () => {
  const classStat = useStoreState((state) => state.api.classStat);

  if (!classStat) {
    return null;
  }

  return (
    <>
      <Col className="my-2">
        <Card className="p-4 h-100">
          <h5 className="text-capitalize">Ability Scores</h5>

          {Object.entries(statToFullTextMap).map(
            ([key, displayText], index) => (
              <Text key={index}>
                {displayText}: {classStat[key as AbilityStat]}
              </Text>
            )
          )}
        </Card>
      </Col>

      <Col className="my-2">
        <Card className="p-4 h-100">
          <h5 className="text-capitalize">Save Stats</h5>

          <Text>Will Save: {classStat.willSave}</Text>
          <Text>Ref Save: {classStat.refSave}</Text>
          <Text>Fortitude Save: {classStat.fortSave}</Text>
        </Card>
      </Col>

      <Col className="my-2">
        <Card className="p-4 h-100">
          <h5 className="text-capitalize">Character Stats</h5>

          <Text>Level: {classStat.level}</Text>
          <Text>HP: {classStat.hp}</Text>
          {/* <Text>Name: {classStat.}</Text> */}
          <Text>Feats: {classStat.feats}</Text>
          <Text>Skill Points: {classStat.skillPoints}</Text>
          <Text>Spells Per Day: {classStat.spellsPerDay}</Text>
          <Text>Feats: {classStat.feats}</Text>
        </Card>
      </Col>
    </>
  );
};

const PersonalityTraitBox = () => {
  const classStat = useStoreState((state) => state.api.classStat);

  const personalityTraits = useStoreState(
    (state) => state.api.personalityTraits
  );

  const name = useStoreState((state) => state.api.name);

  const alignment = useStoreState((state) => state.api.alignment);

  const gender = useStoreState((state) => state.api.gender);
  const genderText = gender === "female" ? "She" : "He";

  return (
    <>
      <Col className="my-2">
        <Card className="p-4 h-100">
          <h5 className="text-capitalize">About Character</h5>

          <Text className="text-capitalize">Class: {classStat?.name}</Text>
          <Text className="text-capitalize">Name: {name}</Text>
          <Text className="text-capitalize">Gender: {gender}</Text>
          <Text className="text-capitalize">Alignment: {alignment}</Text>
        </Card>
      </Col>

      <Col className="my-2">
        <Card className="p-4 h-100">
          <h5 className="text-capitalize">Personality Trait</h5>

          {personalityTraits.map((trait, key) => (
            <Text key={key}>{`${genderText} ${trait}`}</Text>
          ))}
        </Card>
      </Col>
    </>
  );
};

interface FormField {
  class: DnDClass;
  race: string;
  alignment: Alignment;
}
export const GeneratingPage = () => {
  const { register, handleSubmit } = useForm<FormField>();

  const { initializeStore, generate, setAlignment } = useStoreActions(
    (actions) => actions.api
  );
  const races = useStoreState((state) => state.api.races);
  const characterSheet = useStoreState((state) => state.api.characterSheet);

  const onSubmit = handleSubmit((data) => {
    setAlignment(data.alignment);
    generate({ myClass: data.class, race: data.race });
  });

  useEffect(() => {
    initializeStore();
  }, [initializeStore]);

  const renderSelectGroup = (formName: string, dataList: string[]) => {
    return (
      <Form.Group className="d-flex flex-column align-content-start">
        <Form.Label className="text-left text-capitalize">
          {formName}
        </Form.Label>

        <Form.Control
          as="select"
          className="text-capitalize"
          name={formName}
          ref={register}
          onChange={(val) => {
            console.log(val);
          }}
        >
          {dataList.map((entry, index) => (
            <option key={index} className="text-capitalize" value={entry}>
              {entry}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  };

  return (
    <Container className="mt-4">
      <h4>Character Generation</h4>

      <Row>
        <Col sm={3} className="my-2">
          <Form onSubmit={onSubmit}>
            <Card className="p-4">
              <h5>NPC Generator</h5>

              {renderSelectGroup("alignment", ([
                "random",
                ...alignmentList,
              ] as any) as Alignment[])}
              {renderSelectGroup("race", ["random", ...races])}
              {renderSelectGroup("class", (mapperClassList as any) as string[])}

              <Button variant="primary" type="submit">
                Generate
              </Button>

              <a
                type="button"
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(characterSheet)
                )}`}
                download="character_sheet.json"
                className="mt-2"
              >
                Download
              </a>
            </Card>
          </Form>
        </Col>

        <Col>
          <Row>
            <PersonalityTraitBox />
          </Row>

          <Row>
            <ClassTraitBox />
          </Row>

          <Row>
            <RaceTraitBox />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
