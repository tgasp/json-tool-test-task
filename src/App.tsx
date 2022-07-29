import { StartNavigation } from "./components/start-navigation";
import { DocumentsExplorer } from "./components/documents-explorer";
import useDocuments from "./hooks/useDocument";
import { ToastContainer } from "react-toastify";

function App() {
  const { documents } = useDocuments();

  return (
    <div className="App">
      {documents.length === 0 ? <StartNavigation /> : <DocumentsExplorer />}
      <ToastContainer />
    </div>
  );
}

export default App;
