import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button, Nav, Form } from "react-bootstrap";

import useDocuments from "../../hooks/useDocument";

import { TiDelete } from "react-icons/ti";
import { IoAddSharp } from "react-icons/io5";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-one_dark";

import "./styles.scss";

export function DocumentsExplorer() {
  const { documents, createDocument, removeDocument, updateDocument, openFromFile } =
    useDocuments();

  return (
    <Container className="start-navigation">
      <Tabs>
        <TabList>
          {documents.map((d) => (
            <Tab key={`tab-${d.id}`}>
              <div className="d-flex justify-content-between">
                <span>{d.title} </span>
                <span
                  className="remove-tab"
                  onClick={() => {
                    removeDocument(d);
                  }}
                >
                  <TiDelete size="1.3em" />
                </span>
              </div>
            </Tab>
          ))}
          <li className="react-tabs__tab add-tab">
            <span onClick={() => createDocument()}>
              <IoAddSharp />
            </span>
          </li>
        </TabList>

        <Nav className="actions-navbar">
          <Nav.Item>
            <Button variant="secondary" size="sm" onClick={() => openFromFile()}>
              Open file
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant="secondary" size="sm">
              Format
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant="secondary" size="sm">
              Minify
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Form.Select aria-label="Default select example" size="sm">
              <option value="2">2 Tab Space</option>
              <option value="3">3 Tab Space</option>
              <option value="4">4 Tab Space</option>
            </Form.Select>
          </Nav.Item>
        </Nav>

        {documents.map((d) => (
          <TabPanel key={`tab-panel-${d.id}`}>
            <AceEditor
              mode="json"
              theme="one_dark"
              name={d.id}
              value={d.body}
              onChange={(e) => {
                updateDocument(d.id, "", e);
              }}
              style={{
                width: "100%",
                height: "100vh",
              }}
            />
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  );
}
