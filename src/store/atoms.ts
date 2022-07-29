import { atom } from "recoil";
import { DocumentModel } from "../core/models/document.model";
import { EditorConfigModel } from "../core/models/editor-config.model";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const documentsState = atom({
    key: 'documents',
    default: [] as DocumentModel[],
    effects_UNSTABLE: [persistAtom],
});

export const editorConfig = atom({
    key: 'config',
    default: new EditorConfigModel(),
    effects_UNSTABLE: [persistAtom],
});

export const tabIndexState = atom({
    key: 'tabIndex',
    default: 0
});