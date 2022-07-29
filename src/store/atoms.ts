import { atom } from "recoil";
import { DocumentModel } from "../core/models/document.model";

export const documentsState = atom({
    key: 'documents',
    default: [] as DocumentModel[]
});