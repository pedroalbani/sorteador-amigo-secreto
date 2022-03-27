import { useRecoilValue } from "recoil"
import { participantesState } from "../atom"

export const useListaParticipantes = () => {
    return useRecoilValue(participantesState)
}