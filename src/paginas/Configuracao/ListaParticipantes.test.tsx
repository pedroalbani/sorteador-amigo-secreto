import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes';
import ListaParticipantes from './ListaParticipantes'

jest.mock("../../state/hooks/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

describe('a ListaParticipantes vazia precisa', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })
    test('iniciar corretamente sem nenhum participante cadastrado', async () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>)
        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(0)
    })
})

describe('a ListaParticipantes preenchida precisa', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina'])
    })
    test('listar todos os participantes da brincadeira', async () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>)
        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(2)
    })
})