import { Node } from "./components/node"

export function Editor(props: any) {
    const rows: string[] = props.value.split('\n')
    return (
        <>
            {rows.map((r, index: number) => <Node value={r} key={index} />)}
        </>
    )
}