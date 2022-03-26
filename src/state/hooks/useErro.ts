import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

const useErro = () => {
    return useRecoilValue(erroState)
}

export default useErro