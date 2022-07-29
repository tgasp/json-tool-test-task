import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useDocuments from "../../hooks/useDocument";
import { TiDelete } from "react-icons/ti";
import { IoAddSharp } from "react-icons/io5";
import "./styles.scss";

export function DocumentsExplorer() {
  const { documents, createDocument, removeDocument } = useDocuments();

  return (
    <Container className="start-navigation">
      <Tabs>
        <TabList>
          {documents.map((d) => (
            <Tab>
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

        {documents.map((d) => (
          <TabPanel>{d.body}</TabPanel>
        ))}
      </Tabs>
    </Container>
  );
}
