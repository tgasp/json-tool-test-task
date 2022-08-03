import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import useDocuments from "../../hooks/useDocument";

import { TiDelete } from "react-icons/ti";
import { IoAddSharp } from "react-icons/io5";

import "./styles.scss";
import { useEffect } from "react";
import { ActionsBar } from "./components/actions-bar";
import useConfig from "../../hooks/useConfig";
import { DocumentModel } from "../../core/models/document.model";
import useTabIndex from "./hooks/useTabIndex";
import { Editor } from "../editor";

export function DocumentsExplorer() {
  const {
    documents,
    createDocument,
    removeDocument,
    updateDocument,
    formatDocument,
  } = useDocuments();

  const { config } = useConfig();
  const { tabIndex, setTabIndex } = useTabIndex();

  useEffect(() => {
    formatDocument(tabIndex, config.tabSpace);
  }, [config]);

  return (
    <Container className="start-navigation">
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => {
          setTabIndex(index);
        }}
      >
        <TabList>
          {documents.map((d: DocumentModel) => (
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

        <ActionsBar />

        {documents.map((d: DocumentModel) => (
          <TabPanel key={`tab-panel-${d.id}`}>
            <Editor
              value={d.body}
              onChange={(e: any) => {
                updateDocument(d.id, "", e);
              }}
              tabSize={config.tabSpace}
              style={{
                width: "100%",
                height: "80vh",
              }}
            />
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  );
}
