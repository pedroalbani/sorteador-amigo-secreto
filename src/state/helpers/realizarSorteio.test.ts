import { realizarSorteio } from "./realizarSorteio"

const participantes = [
    'Ana Catarina',
    'Jorel',
    'Vovó Juju',
    'Irmão do Jorel'
]

const sorteio = realizarSorteio(participantes)

describe('num sorteio de amigo secreto', () => {
    test('cada participante não pode sortear seu próprio nome', () => {
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        });
    })
})