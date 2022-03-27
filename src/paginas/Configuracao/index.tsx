import Card from "../../componentes/Card"
import FormularioParticipante from "./FormularioParticipante"
import ListaParticipantes from "./ListaParticipantes"
import Rodape from "./Rodape"

const Configuracao = () => {

    return (<Card>
        <section>
            <h2>Participantes</h2>
            <FormularioParticipante />
            <ListaParticipantes />
            <Rodape />
        </section>
    </Card>)
}

export default Configuracao