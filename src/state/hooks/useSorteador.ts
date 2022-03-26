import { useRecoilValue, useSetRecoilState } from "recoil"
import { participantesState, sorteioState } from "../atom"

const useSorteador = () => {

    const setSorteio = useSetRecoilState(sorteioState)
    const participantes = useRecoilValue(participantesState)

    return () => {

        const resultado = new Map<string, string>()
        
        const embaralhado = [...participantes]
        embaralhado.sort(() => Math.random() - 0.5)

        const total = participantes.length
        for (let index = 0; index < total; index++) {
            const indexDoAmigo = index === (total - 1) ? 0 : (index + 1)
            resultado.set(embaralhado[index], embaralhado[indexDoAmigo])
        }
        setSorteio(resultado)
        console.log(resultado)
    }

}

export default useSorteador