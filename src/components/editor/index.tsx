import { Row, Col } from "react-bootstrap";
import { EditorProps } from "../../core/types/editor-props";
import { JsonViewer } from "../json-viewer";

import "./styles/main.scss";

export function Editor({ value, onChange }: EditorProps) {
  
  return (
    <div className="editor-wrapper">
      <Row>
        <Col md={5}>
          <div className="editor-raw">
            <textarea
              onChange={(e) => onChange(e)}
              defaultValue={value}
            ></textarea>
          </div>
        </Col>
        <Col md={1}>{`->`}</Col>
        <Col md={6}>
          <JsonViewer json={value} />
        </Col>
      </Row>
    </div>
  );
}
