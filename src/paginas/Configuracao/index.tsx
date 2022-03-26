import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../componentes/Card"
import useAdicionarParticipante from "../../state/hooks/useAdicionarParticipante"
import useErro from "../../state/hooks/useErro"
import useListaParticipantes from "../../state/hooks/useListaParticipantes"
import useSorteador from "../../state/hooks/useSorteador"

const Configuracao = () => {

    const navegarPara = useNavigate()
    const sortear = useSorteador()

    const inputRef = useRef<HTMLInputElement>(null)
    const [novoParticipante, setNovoParticipante] = useState('')

    const participantes = useListaParticipantes()
    const erro = useErro()

    const adicionarParticipante = useAdicionarParticipante()

    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarParticipante(novoParticipante)
        setNovoParticipante('')
        inputRef.current?.focus()
    }

    const iniciar = () => {
        sortear()
        navegarPara('sorteio')
    }

    return (<Card>
        <section>
            <h2>Participantes</h2>
            <form onSubmit={aoSubmeter}>
                <div className="grupo-input-btn">
                    <input ref={inputRef} value={novoParticipante} onChange={evento => setNovoParticipante(evento.target.value)} type="text" required placeholder='Insira o nome do participante' />
                    <button disabled={!novoParticipante} type='submit'>Adicionar</button>
                </div>
            </form>
            {erro && <p className="alerta erro">{erro}</p>}
            <ul>
                {participantes.map((nome, index) => <li key={index}>{nome}</li>)}
            </ul>
            <footer className="rodape-configuracoes">
                <button className="botao" onClick={iniciar}>Iniciar brincadeira!</button>
                <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
            </footer>
        </section>
    </Card>)
}

export default Configuracao