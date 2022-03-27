import { useRecoilState, useSetRecoilState } from "recoil"
import { erroState, participantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const [participantes, setListaParticipantes] = useRecoilState(participantesState)
    const setErro = useSetRecoilState(erroState)
    return (participante: string) => {
        if (participantes.includes(participante)) {
            setErro('Já existe um participante com esse nome')
            setTimeout(() => {
                setErro('')
            }, 5000);
            return
        }
        return setListaParticipantes(listaAntiga => [...listaAntiga, participante])
    }
}
