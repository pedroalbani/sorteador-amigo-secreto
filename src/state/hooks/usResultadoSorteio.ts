import { useRecoilValue } from "recoil"
import { sorteioState } from "../atom"

const useResultadoSorteio = () => {
    return useRecoilValue(sorteioState)
}

export default useResultadoSorteio