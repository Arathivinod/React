// src/App.js
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  selectedSkillsState,
  availableSkillsState,
  userProfileState,
} from './atoms';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const CARD_WIDTH = '300px'; // Fixed width for the cards

const SkillCard = ({ title, skills, onSkillSelect, onSkillDeselect }) => (
  <Card bg="light" style={{ width: CARD_WIDTH, height: '100%' }}>
    <Card.Body className="d-flex flex-column">
      <Card.Title>{title}</Card.Title>
      <Table responsive hover>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id}>
              <td>{skill.name}</td>
              <td>
                {onSkillDeselect ? (
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onSkillDeselect(skill)}
                  >
                    Deselect
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onSkillSelect(skill)}
                  >
                    Select
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);

function App() {
  const [selectedSkills, setSelectedSkills] = useRecoilState(selectedSkillsState);
  const availableSkills = useRecoilValue(availableSkillsState);
  const userProfile = useRecoilValue(userProfileState);

  const handleSkillSelect = (skill) => {
    // Check if the skill is not already selected
    if (!selectedSkills.find((selectedSkill) => selectedSkill.id === skill.id)) {
      setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, skill]);
    }
  };

  const handleSkillDeselect = (skill) => {
    setSelectedSkills((prevSelectedSkills) =>
      prevSelectedSkills.filter((s) => s !== skill)
    );
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Header />
      <Container className="mt-4 flex-grow-1 d-flex">
        <Row className="w-100">
          <Col md={6} className="d-flex">
            <SkillCard
              title="Select Skills"
              skills={availableSkills}
              onSkillSelect={handleSkillSelect}
            />
          </Col>
          <Col md={6} className="d-flex">
            <Card bg="light" style={{ width: CARD_WIDTH, height: '100%' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title>User Profile</Card.Title>
                <Table responsive hover>
                  <tbody>
                    {selectedSkills.map((skill) => (
                      <tr key={skill.id}>
                        <td>{skill.name}</td>
                        <td>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleSkillDeselect(skill)}
                          >
                            Deselect
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
