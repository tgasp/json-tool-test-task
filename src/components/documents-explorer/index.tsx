import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button, Nav, Form } from "react-bootstrap";

import useDocuments from "../../hooks/useDocument";

import { TiDelete } from "react-icons/ti";
import { IoAddSharp } from "react-icons/io5";

import { toast } from "react-toastify";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-one_dark";

import "./styles.scss";
import { useEffect, useState } from "react";
import { JSONHelper } from "../../helpers/json-helper";

export function DocumentsExplorer() {
  const {
    documents,
    createDocument,
    removeDocument,
    updateDocument,
    openFromFile,
  } = useDocuments();

  const [tabIndex, setTabIndex] = useState(0);
  const [tabSpace, setTabSpace] = useState(4);

  const formatDocument = () => {
    const doc = documents[tabIndex];

    updateDocument(doc.id, "", JSONHelper.format(doc.body, tabSpace));
  };

  useEffect(() => {
    formatDocument();
  }, [tabSpace]);

  return (
    <Container className="start-navigation">
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => {
          setTabIndex(
            index <= documents.length - 1 ? index : documents.length - 1
          );
        }}
      >
        <TabList>
          {documents.map((d) => (
            <Tab key={`tab-${d.id}`}>
              <div className="d-flex justify-content-between">
                <span>{d.title} </span>
                <span
                  className="remove-tab"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeDocument(d);
                    setTabIndex(tabIndex - 1);
                  }}
                >
                  <TiDelete size="1.3em" />
                </span>
              </div>
            </Tab>
          ))}
          <li className="react-tabs__tab add-tab">
            <span
              onClick={() => {
                createDocument();
                setTabIndex(documents.length);
              }}
            >
              <IoAddSharp />
            </span>
          </li>
        </TabList>

        <Nav className="actions-navbar">
          <Nav.Item>
            <Button
              variant="secondary"
              size="sm"
              onClick={async () => {
                openFromFile();
                setTabIndex(documents.length);
              }}
            >
              Open file
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant="secondary" size="sm" onClick={formatDocument}>
              Format
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                const doc = documents[tabIndex];

                if (JSONHelper.isValid(doc.body)) {
                  toast("JSON is valid.", { theme: "dark", type: "success" });
                } else {
                  toast("Invalid JSON.", { theme: "dark", type: "error" });
                }
              }}
            >
              Validate
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                const doc = documents[tabIndex];

                updateDocument(doc.id, "", JSONHelper.minify(doc.body));
              }}
            >
              Minify
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Form.Select
              aria-label="Default select example"
              size="sm"
              value={String(tabSpace)}
              onChange={(e) => {
                setTabSpace(Number(e.target.value));
              }}
            >
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
              tabSize={tabSpace}
              style={{
                width: "100%",
                height: "80vh"
              }}
            />
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  );
}
