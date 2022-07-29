import { documentsState } from "../store/atoms";
import { useRecoilState } from "recoil";
import { DocumentModel } from "../core/models/document.model";
import { v4 as uuidv4 } from 'uuid';

const useDocuments = () => {
    const [documents, setDocuments] = useRecoilState(documentsState);

    const createDocument = (title?: string, body = '') => {
        if (!title) {
            const count = documents.length;
            title = `Untitled-${count + 1}`
        }

        setDocuments([...documents, new DocumentModel(uuidv4(), title, body)]);
    };

    const removeDocument = (document: DocumentModel) => {
        const filtered = documents.filter(d => d.id !== document.id)

        setDocuments(filtered);
    };

    return {
        documents,
        setDocuments,
        createDocument,
        removeDocument
    }
}

export default useDocuments;