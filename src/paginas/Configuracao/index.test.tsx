import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Configuracao from '.'

jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
  }));

describe('a página de Configuracao', () => {
    test('impede o início da brincadeira', async () => {
        const { container } = render(
            <RecoilRoot>
                <Configuracao />
            </RecoilRoot>)
        expect(container).toMatchSnapshot()
    })
})