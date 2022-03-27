import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"

const ListaParticipantes = () => {

    const participantes = useListaParticipantes()
   
    return (
        <ul>
            {participantes.map((nome, index) => <li key={index}>{nome}</li>)}
        </ul>
    )
}

export default ListaParticipantes