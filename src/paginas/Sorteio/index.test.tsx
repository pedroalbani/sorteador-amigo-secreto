import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil'
import Sorteio from '.'
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes';
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio';

jest.mock("../../state/hooks/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

jest.mock("../../state/hooks/useResultadoSorteio", () => {
    return {
        useResultadoSorteio: jest.fn()
    }
});

describe('a página de Sorteio', () => {
    const participantes = [
        'Ana Catarina',
        'Jorel',
        'Vovó Juju'
    ]
    
    const sorteio = new Map([
        ['Ana Catarina', 'Jorel'],
        ['Jorel', 'Vovó Juju'],
        ['Vovó Juju', 'Ana Catarina']
    ])
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(sorteio);
    })
    test('exibe todos os participantes disponíveis dentro do select', async () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>)
        const options = screen.getAllByRole('option')
        expect(options).toHaveLength(participantes.length + 1) // existe já uma option padrão
    })
    test('exibe o amigo secreto sorteado do participante selecionado', async () => {

        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>)

        const select = screen.getByPlaceholderText('Selecione o participante')
        fireEvent.change(select, { target: { value: participantes[1] } })

        const button = screen.getByRole('button')
        fireEvent.click(button)

        const alerta = screen.queryByRole('alert')
        expect(alerta).toBeInTheDocument()

    })
    test('esconde o amigo secreto sorteado depois de 5 segundos', async () => {
        jest.useFakeTimers();

        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText('Selecione o participante')
        fireEvent.change(select, { target: { value: participantes[1] } })

        const button = screen.getByRole('button')
        fireEvent.click(button)
        act(() => {
            jest.runAllTimers();
        })
        const alerta = screen.queryByRole('alert')
        expect(alerta).not.toBeInTheDocument()
    })
})