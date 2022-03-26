import { atom } from "recoil";

export const participantesState = atom<string[]>({
    key: 'participantesState',
    default: []
})

export const sorteioState = atom<Map<string, string>>({
    key: 'sorteioState',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})