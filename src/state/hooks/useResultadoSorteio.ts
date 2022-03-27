import { useRecoilValue } from "recoil"
import { sorteioState } from "../atom"

export const useResultadoSorteio = () => {
    return useRecoilValue(sorteioState)
}
