import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import Rodape from "./Rodape"

jest.mock("../../state/hooks/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

const mockSorteador = jest.fn();

jest.mock("../../state/hooks/useSorteador", () => {
    return {
        useSorteador: () => mockSorteador
    }
});

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavegacao,
}));

describe('o Rodape sem participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValueOnce(['Ana'])
    })
    test('impede o início da brincadeira', async () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('o Rodape com participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValueOnce(['Ana', 'Catarina', 'Jorel'])
    })
    test('habilita o início da brincadeira', async () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })
    test('faz o sorteio', async () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockSorteador).toHaveBeenCalled()
    })
    test('redireciona para a tela de sorteio', async () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalled()
    })
})