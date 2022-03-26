import { useRecoilValue } from "recoil"
import { participantesState } from "../atom"

const useListaParticipantes = () => {
    return useRecoilValue(participantesState)
}

export default useListaParticipantes