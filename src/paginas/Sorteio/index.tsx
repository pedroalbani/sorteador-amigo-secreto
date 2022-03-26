import { useState } from "react"
import Card from "../../componentes/Card"
import useListaParticipantes from "../../state/hooks/useListaParticipantes"
import useResultadoSorteio from "../../state/hooks/usResultadoSorteio"

const Sorteio = () => {

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')
    const participantes = useListaParticipantes()
    const resultado = useResultadoSorteio()

    const [participantesJahBrincaram, setParticipanteJahBrincaram] = useState<string[]>([])

    const exibirAmigo = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (!participanteDaVez) {
            return
        }
        setAmigoSecreto(resultado.get(participanteDaVez)!)
        setParticipanteJahBrincaram([...participantesJahBrincaram, participanteDaVez])
        setTimeout(() => {
            setParticipanteDaVez('')
            setAmigoSecreto('')
        }, 5000);

    }

    return (<Card>
        <section className="sorteio">
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={exibirAmigo}>
                <select value={participanteDaVez} onChange={evento => setParticipanteDaVez(evento.target.value)} required name="select-participante" id="select-participante">
                    <option value="">Selecione seu nome</option>
                    {participantes.map((nome, index) => <option disabled={participantesJahBrincaram.includes(nome)} key={index}>{nome}</option>)}
                </select>
                <p>Clique em sortear para ver quem é seu amigo secreto! <br /> Você terá 5 segundos para memorizar, então fique esperto!</p>
                <button className="botao" disabled={!participanteDaVez || !!amigoSecreto} type='submit'>Sortear</button>
            </form>
            {amigoSecreto && <div>
                <p className="resultado">{amigoSecreto}</p>
            </div>}
            <footer className="sorteio">
                <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>)
}

export default Sorteio