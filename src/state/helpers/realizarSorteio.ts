import shuffle from 'just-shuffle';

export function realizarSorteio(participantes: string[]) {
    const resultado = new Map<string, string>();
    const embaralhado = shuffle(participantes);
    const total = participantes.length;
    for (let index = 0; index < total; index++) {
        const indexDoAmigo = index === (total - 1) ? 0 : (index + 1);
        resultado.set(embaralhado[index], embaralhado[indexDoAmigo]);
    }
    return resultado;
}
