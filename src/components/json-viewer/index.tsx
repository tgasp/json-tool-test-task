import { JVNode } from "./components/node";
import "./styles/main.scss";

export function JsonViewer({ json }: any) {
  let parsed = {};
  try {
    parsed = JSON.parse(json);
  } catch (err) {}

  return (
    <div className="json-viewer-wrapper">
      <JVNode
        model={{
          key: "JSON",
          value: parsed,
        }}
        collapse={true}
        level={0}
      />
    </div>
  );
}
