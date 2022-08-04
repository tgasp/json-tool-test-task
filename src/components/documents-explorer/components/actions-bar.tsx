import { Nav, Button, Form } from "react-bootstrap";
import { JSONHelper } from "../../../helpers/json-helper";
import useConfig from "../../../hooks/useConfig";
import useDocuments from "../../../hooks/useDocument";
import { toast } from "react-toastify";
import useTabIndex from "../hooks/useTabIndex";

export function ActionsBar() {
  const {
    documents,
    openFromFile,
    formatDocument,
    minifyDocument,
  } = useDocuments();

  const { config, setConfig } = useConfig();
  const { tabIndex, setTabIndex } = useTabIndex();

  return (
    <Nav className="actions-navbar">
      <Nav.Item>
        <Button
          variant="secondary"
          size="sm"
          onClick={async () => {
            await openFromFile();
            setTabIndex(documents.length);
          }}
        >
          Open file
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => formatDocument(tabIndex, config.tabSpace)}
        >
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

            minifyDocument(doc.id)
          }}
        >
          Minify
        </Button>
      </Nav.Item>

      <Nav.Item>
        <Form.Select
          aria-label="Default select example"
          size="sm"
          value={String(config.tabSpace)}
          onChange={(e: any) => {
            setConfig({
              tabSpace: Number(e.target.value),
            });
          }}
        >
          <option value="2">2 Tab Space</option>
          <option value="3">3 Tab Space</option>
          <option value="4">4 Tab Space</option>
        </Form.Select>
      </Nav.Item>
    </Nav>
  );
}
