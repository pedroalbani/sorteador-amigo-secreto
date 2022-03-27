import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useErro = () => {
    return useRecoilValue(erroState)
}
