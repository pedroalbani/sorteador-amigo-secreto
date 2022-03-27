import { useRecoilValue, useSetRecoilState } from "recoil"
import { participantesState, sorteioState } from "../atom"
import shuffle from 'just-shuffle';

export const useSorteador = () => {

    const setSorteio = useSetRecoilState(sorteioState)
    const participantes = useRecoilValue(participantesState)

    return () => {
        const resultado = new Map<string, string>()
        const embaralhado = shuffle(participantes)
        const total = participantes.length
        for (let index = 0; index < total; index++) {
            const indexDoAmigo = index === (total - 1) ? 0 : (index + 1)
            resultado.set(embaralhado[index], embaralhado[indexDoAmigo])
        }
        setSorteio(resultado)
    }

}