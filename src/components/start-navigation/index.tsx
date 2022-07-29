import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { documentsState } from "../../store/atoms";
import { DocumentModel } from "../../core/models/document.model";
import { useRecoilState } from "recoil";
import "./styles.scss";

export function StartNavigation() {
  const [documents, setDocuments] = useRecoilState(documentsState);

  const createNewDocument = () => {
    setDocuments([...documents, new DocumentModel()]);
  };

  return (
    <Container className="start-navigation">
      <Row>
        <Col className="d-flex justify-content-center">
          <Stack direction="horizontal" gap={3}>
            <Button variant="success" onClick={createNewDocument}>
              New document
            </Button>
            <Button variant="warning">Open from file</Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
