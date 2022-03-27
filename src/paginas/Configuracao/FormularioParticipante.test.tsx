import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { RecoilRoot } from 'recoil'
import FormularioParticipante from './FormularioParticipante'

describe('o FormularioParticipante precisa', () => {
    test('bloquear a adição de participantes quando o input estiver vazio', async () => {
        render(
            <RecoilRoot>
                <FormularioParticipante />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira o nome do participante')
        const botao = screen.getByRole('button')
        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })
    test('adicionar um novo participante caso exista valor no input', () => {
        render(
            <RecoilRoot>
                <FormularioParticipante />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira o nome do participante')
        const botao = screen.getByRole('button')
        const alerta = screen.queryByRole('alert')
        fireEvent.change(input, {target: {value: 'Luiz'}})
        fireEvent.click(botao)
        expect(input).toHaveFocus()
        expect(input).toHaveValue("")
        expect(alerta).toBeNull()
    })
    test('bloquear a adição de participantes com nomes repetidos', () => {
        render(
            <RecoilRoot>
                <FormularioParticipante />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira o nome do participante')
        const botao = screen.getByRole('button')
        fireEvent.change(input, {target: {value: 'Lys'}})
        fireEvent.click(botao)
        fireEvent.change(input, {target: {value: 'Lys'}})
        fireEvent.click(botao)
        const alerta = screen.queryByRole('alert')
        expect(alerta).toBeInTheDocument()
    })
    test('limpar a mensagem de erro sobre participantes repetidos após 5 segundos', async () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <FormularioParticipante />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira o nome do participante')
        const botao = screen.getByRole('button')
        fireEvent.change(input, {target: {value: 'Lys'}})
        fireEvent.click(botao)
        fireEvent.change(input, {target: {value: 'Lys'}})
        fireEvent.click(botao)
        let alerta = screen.queryByRole('alert')
        expect(alerta).toBeInTheDocument()
        act(() => {
            jest.runAllTimers();
        })
        alerta = screen.queryByRole('alert')
        expect(alerta).toBeNull()
    })
})