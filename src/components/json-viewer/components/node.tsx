import { useState } from "react";
import { JVArrayNode } from "./array-node";
import { JVObjectNode } from "./object-node";

export function JVNode({ model, collapse, level }: any) {
  const [isCollapsed, setCollapsed] = useState(collapse);

  const getNodeType = (model: any) => {
    if (Array.isArray(model.value)) return "array";
    else if (typeof model.value === "object") return "object";

    return "primitive";
  };

  const getNode = (model: any, level: number) => {
    switch (getNodeType(model)) {
      case "array":
        return (
          <JVArrayNode
            model={{
              key: model.key,
              value: model.value,
            }}
            level={level}
            collapse={true}
          />
        );
      case "object":
        return (
          <JVObjectNode
            model={{
              key: model.key,
              value: model.value,
            }}
            level={level}
            collapse={true}
          />
        );
      case "primitive":
        return <div>{model.value}</div>;
    }
  };

  return (
    <div
      style={{
        paddingLeft: `${level * 5 + 5}px`,
      }}
    >
      <div
        className={`jvnode-key${
          getNodeType(model) !== "primitive" ? " collapsable" : ""
        }${isCollapsed ? " collapse-opened" : ""}`}
        onClick={() =>
          getNodeType(model) !== "primitive" ? setCollapsed(!isCollapsed) : ""
        }
      >
        "{model.key}":{" "}
        {getNodeType(model) === "primitive" ? ` "${model.value}"` : ""}
      </div>

      {isCollapsed ? getNode(model, level + 1) : ""}
    </div>
  );
}
