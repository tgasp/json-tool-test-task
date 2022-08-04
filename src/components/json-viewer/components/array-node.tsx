import { JVNodeProps, KeyValuePair } from "../../../core/types/node-props";
import { JVNode } from "./node";

export function JVArrayNode({ model, key, level }: JVNodeProps) {

  const keyValuePairs: KeyValuePair[] = [];
  for (const key in model.value) {
    const value = model.value[key];

    keyValuePairs.push({
      key,
      value,
    });
  }

  return (
    <>
      {keyValuePairs.map((kv, index) => (
        <JVNode model={kv} key={`${key}-${index}`} level={level} />
      ))}
    </>
  );

}