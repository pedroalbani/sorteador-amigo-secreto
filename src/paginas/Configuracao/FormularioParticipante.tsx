import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante"
import { useErro } from "../../state/hooks/useErro"

const FormularioParticipante = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [novoParticipante, setNovoParticipante] = useState('')

    const erro = useErro()

    const adicionarParticipante = useAdicionarParticipante()

    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarParticipante(novoParticipante)
        setNovoParticipante('')
        inputRef.current?.focus()
    }

    return (<>
        <form onSubmit={aoSubmeter}>
            <div className="grupo-input-btn">
                <input
                    ref={inputRef}
                    value={novoParticipante}
                    onChange={evento =>  setNovoParticipante(evento.target.value)}
                    type="text"
                    required
                    placeholder='Insira o nome do participante' 
                    name="nome-do-participante"/>
                <button disabled={!novoParticipante} type='submit'>Adicionar</button>
            </div>
        </form>
        {erro && <p role="alert" className="alerta erro">{erro}</p>}
    </>)
}

export default FormularioParticipante