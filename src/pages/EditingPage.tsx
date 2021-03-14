import { DnDClass } from "data/model/dndModel";
import { Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStoreState } from "stores";

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
      <Col className="my-2 fluid" xs={12} md={12} lg={4}>
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

      <Col className="my-2 fluid" xs={12} md={12} lg={4}>
        <Card className="p-4 h-100">
          <h5 className="text-capitalize">Save Stats</h5>

          <Text>Will Save: {classStat.willSave}</Text>
          <Text>Ref Save: {classStat.refSave}</Text>
          <Text>Fortitude Save: {classStat.fortSave}</Text>
        </Card>
      </Col>

      <Col className="my-2 fluid" xs={12} md={12} lg={4}>
        <Card className="p-4 h-100">
          <h5 className="text-capitalize">Character Stats</h5>

          <Text>Level: {classStat.level}</Text>
          <Text>HP: {classStat.hp}</Text>
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
      <Col className="my-2" md={6}>
        <Card className="p-4 h-100">
          <h5 className="text-capitalize">About Character</h5>

          <Text className="text-capitalize">Class: {classStat?.name}</Text>
          <Text className="text-capitalize">Name: {name}</Text>
          <Text className="text-capitalize">Gender: {gender}</Text>
          <Text className="text-capitalize">Alignment: {alignment}</Text>
        </Card>
      </Col>

      <Col className="my-2" md={6}>
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
  classToEdit: DnDClass;
}

export const EditingPage = () => {
  const classStat = useStoreState((state) => state.api.classStat);
  const characterSheet0 = useStoreState((state) => state.api.characterSheet);

  return (
    <Container className="mt-4">
      <h4>Character Editing (WIP)</h4>

      <Row>
        <Col lg={6} className="my-2">
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
        </Col>
        
        <Col lg={6} className="my-2">
           <Form>

           </Form>
        </Col>
      </Row>

      <Row>
        <Col lg={3} className="my-2">
          <Row lg={6}>
          <Form>
            <Card className="p-4">
              <h5>Download</h5>

              <a
                type="button"
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(characterSheet0)
                )}`}
                download="character_sheet_old.json"
                className="mt-2"
              >
                Download Old Character
              </a>

              <a
                type="button"
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify("temp")
                )}`}
                download="character_sheet_new.json"
                className="mt-2"
              >
                Download Edited Character
              </a>
            </Card>
          </Form>
          </Row>
        </Col>

        <Col>
          <Card>
            <h4> Edited Character </h4>
          <Row>
            <PersonalityTraitBox />
          </Row>

          <Row>
            <ClassTraitBox />
          </Row>

          <Row>
            <RaceTraitBox />
          </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
