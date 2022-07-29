import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { documentsState } from "../../store/atoms";
import { DocumentModel } from "../../core/models/document.model";
import { useRecoilState } from "recoil";
import "./styles.scss";

export function DocumentsExplorer() {
  const [documents, setDocuments] = useRecoilState(documentsState);

  return (
    <Container className="start-navigation">
      <Row>
        <Col className="d-flex justify-content-center">
          {documents.toString()}
        </Col>
      </Row>
    </Container>
  );
}
