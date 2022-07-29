import { documentsState } from "../store/atoms";
import { useRecoilState } from "recoil";
import { DocumentModel } from "../core/models/document.model";
import { v4 as uuidv4 } from 'uuid';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useDocuments = () => {
    const [documents, setDocuments] = useRecoilState(documentsState);

    const createDocument = (title?: string, body = '') => {
        if (!title) {
            const count = documents.length;
            title = `Untitled-${count + 1}`
        }

        setDocuments([...documents, new DocumentModel(uuidv4(), title, body)]);
    };

    const openFromFile = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.click();

        input.addEventListener('change', (e: Event) => {
            const target = e.target as HTMLInputElement;
            const files = target.files;

            if (files && files[0]) {
                const file = files[0];

                const fr = new FileReader();

                fr.onload = function () {
                    try {
                        JSON.parse(fr.result as string);

                        createDocument(file.name, fr.result as string)
                    } catch (err) {
                        toast("Invalid JSON.", { theme: 'dark', type: 'error' })
                    }
                }

                fr.readAsText(files[0]);
            }
        })
    };

    const updateDocument = (id: string, title?: string, body?: string) => {
        const updated = documents.map(doc => {
            if (doc.id === id) {
                return {
                    ...doc,
                    title: title || doc.title,
                    body: body || doc.body
                }
            }

            return doc;
        })

        setDocuments(updated);
    };

    const removeDocument = (doc: DocumentModel) => {
        const filtered = documents.filter(d => d.id !== doc.id)

        setDocuments(filtered);
    };

    return {
        documents,
        setDocuments,
        createDocument,
        updateDocument,
        removeDocument,
        openFromFile
    }
}

export default useDocuments;