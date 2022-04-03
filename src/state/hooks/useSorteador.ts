import { useRecoilValue, useSetRecoilState } from "recoil"
import { participantesState, sorteioState } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio"

export const useSorteador = () => {

    const setSorteio = useSetRecoilState(sorteioState)
    const participantes = useRecoilValue(participantesState)

    return () => {
        const resultado = realizarSorteio(participantes);
        setSorteio(resultado)
    }

}

