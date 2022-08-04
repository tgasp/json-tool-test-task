
export type JVNodeProps = {
    model: KeyValuePair,
    collapse?: boolean,
    key?: string,
    level: number
}

export type KeyValuePair = {
    key: string,
    value: any
}