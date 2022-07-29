import { StartNavigation } from "./components/start-navigation";
import { useRecoilState } from "recoil";
import { documentsState } from "./store/atoms";
import { DocumentsExplorer } from "./components/documents-explorer";

function App() {
  const [documents] = useRecoilState(documentsState);

  return (
    <div className="App">
      {documents.length === 0 ? <StartNavigation /> : <DocumentsExplorer />}
    </div>
  );
}

export default App;
