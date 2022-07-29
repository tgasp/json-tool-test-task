import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import "./styles.scss";
import useDocuments from "../../hooks/useDocument";
import { AiOutlineFileAdd, AiOutlineFile } from "react-icons/ai";

export function StartNavigation() {
  const { createDocument, openFromFile } = useDocuments();

  return (
    <Container className="start-navigation">
      <Row>
        <Col className="d-flex justify-content-center">
          <Stack direction="horizontal" gap={3}>
            <Button variant="success" onClick={() => createDocument()}>
              <AiOutlineFileAdd /> New document
            </Button>
            <Button variant="warning" onClick={() => openFromFile()}>
              <AiOutlineFile /> Open from file
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
