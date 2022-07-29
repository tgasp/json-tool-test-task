
export class DocumentModel {
    id: string
    title: string
    body: string

    constructor(id: string, title = '', body = '') {
        this.id = id;
        this.title = title;
        this.body = body;
    }
}